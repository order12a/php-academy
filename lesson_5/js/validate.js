"use strict";

if (window.addEventListener) window.addEventListener("load", initApp, false);
else if (window.attachEvent) window.attachEvent("onload", initApp);

function initApp() {
    my_form.userName.onchange = validateName;
    my_form.age.onchange = validateAge;
    my_form.mail.onchange = validateEmail;
    my_form.phone.onchange = validatePhone;
    my_form.message.onchange = validateMessage;
    my_form.onsubmit = validateForm;
}

function validate(targetElement, pattern) {
    var isValid = targetElement.value.search(pattern);
    if(isValid == -1){
        if(targetElement.classList.contains('valid')){
            targetElement.classList.remove('valid');
        }
        targetElement.classList.add('invalid');
    }else {
        if(targetElement.classList.contains('invalid')){
            targetElement.classList.remove('invalid');
        }
        targetElement.classList.add('valid');
    }
}

function validateName() {
    var pattern = /\S{1,50}/;
    validate(this, pattern);
}

function validateAge() {
    var pattern = /\d{1,3}/;
    if(+this.value < 0 || +this.value > 120){
        if(this.classList.contains('valid')){
            console.log('Inside in!');
            this.classList.remove('valid');
        }
        this.classList.add('invalid');
        return;
    }
    validate(this, pattern);
}

function validateEmail() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
}

function validatePhone() {
    var pattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    validate(this, pattern);
}

function validateMessage() {
    var pattern = /.{1,1200}/;
    validate(this, pattern);
}

function validateForm() {
    var valid = true;

    for(var i = 0; i < my_form.elements.length; i++){
        if(my_form.elements[i].type == 'text' || my_form.elements[i].type == 'textarea'
            || my_form.elements[i].type == 'tel' || my_form.elements[i].type == 'email'
            || my_form.elements[i].type == 'number'){
            var element = my_form.elements[i];
            element.onchange();
            if(element.classList.contains('invalid')){
                valid = valid & false;
            }
        }
    }

    if(!valid){
        var container = document.getElementsByTagName('form')[0];

        if(document.getElementsByClassName('red-warning').length > 0){
            container.removeChild(document.getElementsByClassName('red-warning')[0]);
        }


        container.appendChild(createWarning());
        return false;
    }
}

function createWarning() {
    var warningMessage = document.createElement('p');
    warningMessage.classList.add('red-warning');
    warningMessage.classList.add('row');
    warningMessage.classList.add('col');
    warningMessage.classList.add('s7');
    warningMessage.classList.add('center');
    warningMessage.innerHTML = 'Please fill form correctly!';
    return warningMessage;
}