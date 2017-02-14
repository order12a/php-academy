"use strict";

var setupApp = function () {

    writeTable(persons);
    document.getElementById('clear').onclick = clearInputs;
    document.getElementById('add').onclick = addPerson;
    document.getElementById('reset').onclick = resetData;
    document.getElementById('f_name').onclick = sortByFirstName;
    document.getElementById('l_name').onclick = sortByLastName;
    document.getElementById('age_col').onclick = sortByAge;
    document.getElementById('langs_col').onclick = sortByLanguageQuantity;

    document.getElementById('remove').onclick = deleteUser;
};

var initData = function () {
    return [new Person('John', 'Dou', 30, ['java', 'c++', 'php']),
        new Person('Steve', 'Conrad', 24, ['javascript', 'typescript', 'ruby', 'python']),
        new Person('Jane', 'Hogan', 27, ['css', 'coffee-script', 'javascript'])];
};

function resetData() {
    writeTable(initData());
}

function clearInputs() {
    console.log('Clear inputs clicked!');
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }

    var textareas = document.getElementsByTagName('textarea');
    for(var i = 0; i < textareas.length; i++){
        textareas[i].value = '';
    }
}

function addPerson() {

    var person = new Person();

    person.firstName = validateInput(document.getElementById('first_name'));
    person.lastName = validateInput(document.getElementById('last_name'));
    person.age = +validateInput(document.getElementById('age'));
    person.languages = (document.getElementById('langs').value).split(',');

    persons.push(person);
    writeTable(persons);
    clearInputs();
}

function validateInput(element) {//TODO smart data validation
    var value = element.value;

    if(value === undefined || value === null || value === ''){
        throw new Error('Value was not set!');
    }

    return value;
}

var deleteUser = function () {
    var remove_criteria = document.getElementById('remove_criteria').value;
    remove_criteria.toLowerCase();
    for (var i = 0; i < persons.length; i++){
        if((persons[i].firstName).toLowerCase() === remove_criteria || persons[i].lastName.toLowerCase() === remove_criteria){
            persons.splice(i, 1);
            clearInputs();
        }else {
            // document.getElementById('remove_criteria').style.color = 'red'; TODO implement smart warnings
        }
    }

    writeTable(persons);
};

function writeTable(persons) {

    var counter = 1;
    var tableContainer;
    var tbody = document.createElement('tbody');

    if(!(document.getElementsByTagName('table').length > 0)){
        tableContainer = createTableHeader();
        tableContainer.appendChild(tbody);
    }else {
        var body = document.getElementsByClassName('center')[2];
        body.removeChild(document.getElementsByTagName('table')[0]);

        tableContainer = createTableHeader();
        tableContainer.appendChild(tbody);
    }
    persons.forEach(function (person) {
        var tr = document.createElement('tr');
        var tdNum = document.createElement('td');

        tr.appendChild(tdNum);
        tdNum.innerHTML = counter;
        tbody.appendChild(tr);
        for(var prop in person){
            var text;

            if(Array.isArray(person[prop])){
                text = person[prop].join(', ');
            }else {
                text = person[prop];
            }

           var tN = document.createTextNode(text);
           var td = document.createElement('td');

           td.appendChild(tN);
           tr.appendChild(td);
        }

        counter++;
    });
}

function createTableHeader(){
    var container = document.getElementsByClassName('center')[2];
    var tableContainer = document.createElement('table');
    tableContainer.setAttribute('class', 'table table-bordered');
    container.appendChild(tableContainer);

    var header = document.createElement('thead');
    tableContainer.appendChild(header);

    var headerRow = document.createElement('tr');
    header.appendChild(headerRow);

    var headerNumber = document.createElement('th');
    var headerFName = document.createElement('th');
    headerFName.setAttribute('id', 'f_name');
    var headerLName = document.createElement('th');
    headerLName.setAttribute('id', 'l_name');
    var headerAge = document.createElement('th');
    headerAge.setAttribute('id', 'age_col');
    var headerLangs = document.createElement('th');
    headerLangs.setAttribute('id', 'langs_col');

    headerRow.appendChild(headerNumber);
    headerNumber.innerHTML = '#';
    headerRow.appendChild(headerFName);
    headerFName.innerHTML = 'First Name';
    headerRow.appendChild(headerLName);
    headerLName.innerHTML = 'Last Name';
    headerRow.appendChild(headerAge);
    headerAge.innerHTML = 'Age';
    headerRow.appendChild(headerLangs);
    headerLangs.innerHTML = 'Languages';

    return tableContainer;
}

function Person(firstName, lastName, age, languages) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.languages = languages;
}

var persons = initData();

var sortByAge = function () {
    console.log('sortByAge');
    persons.sort(function (person1, person2) {
        return person1.age - person2.age;
    });

    writeTable(persons);
};

var sortByFirstName = function () {
    console.log('sortByFirstName');
    persons.sort(function (person1, person2) {
        return (person1.firstName.charCodeAt(0) + person1.firstName.charCodeAt(1)) - (person2.firstName.charCodeAt(0) + person2.firstName.charCodeAt(1));
    });

    writeTable(persons);
};

var sortByLastName = function () {
    console.log('sortByLastName');
    persons.sort(function (person1, person2) {
        return person1.lastName.charCodeAt(0) - person2.lastName.charCodeAt(0);
    });

    writeTable(persons);
};

var sortByLanguageQuantity = function () {

    console.log('sortByLanguageQuantity');
    persons.sort(function (person1, person2) {
        return person1.languages.length - person2.languages.length;
    });

    persons.reverse();
    writeTable(persons);
};

var temp;


