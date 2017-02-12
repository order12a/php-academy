"use strict";

var setupApp = function () {

    writeTable(persons);
    document.getElementById('clear').onclick = clearInputs;
    document.getElementById('add').onclick = addPerson;
    document.getElementById('reset').onclick = resetData;
    document.getElementsByTagName('th')[3].onclick = sortByAge;
    // document.getElementsByTagName('th')[3].onclick = function () {
    //     persons.sort(function (person1, person2) {
    //         return person1.age - person2.age;
    //     });
    //
    //     writeTable(persons);
    // };
};


function resetData() {
    writeTable([new Person('John', 'Dou', 30, ['java', 'c++', 'php']),
        new Person('Steve', 'Conrad', 24, ['javascript', 'typescript', 'ruby', 'python']),
        new Person('Jane', 'Hogan', 27, ['css', 'coffee-script', 'javascript'])]);
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

function addPerson() {//TODO implement smart validation
    var person = new Person();

    person.firstName = document.getElementById('first_name').value;
    person.lastName = document.getElementById('last_name').value;
    person.age = +document.getElementById('age').value;
    person.languages = (document.getElementById('langs').value).split(',');

    persons.push(person);
    writeTable(persons);
}

function validateInput(value, expectedType) {//TODO smart data validation
    if(value === undefined || value === null){
        throw new Error('Value was not set!');
    }

    if(typeof value === expectedType){
        return value;
    }else {
        switch (expectedType){
            case "number":
            {
                document.querySelector('err_number').innerHTML = 'No correct age was specified';
                break;
            }
            case "string":
            {
                document.querySelector('err_text').innerHTML = 'No correct text values was specified';
                break;
            }
            default:
                console.log('No expected type specified');
                return;
        }
    }
}

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
    var headerLName = document.createElement('th');
    var headerAge = document.createElement('th');
    var headerLangs = document.createElement('th');

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

var persons = [new Person('John', 'Dou', 30, ['java', 'c++', 'php']),
    new Person('Steve', 'Conrad', 24, ['javascript', 'typescript', 'ruby', 'python']),
    new Person('Jane', 'Hogan', 27, ['css', 'coffee-script', 'javascript'])];

var sortByAge = function () {
    persons.sort(function (person1, person2) {
        return person1.age - person2.age;
    });

    writeTable(persons);
};