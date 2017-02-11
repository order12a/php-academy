"use strict";

var setupApp = function () {
    var persons = [new Person('John', 'Dou', 30, ['java', 'c++', 'php']),
        new Person('Steve', 'Conrad', 24, ['javascript', 'typescript', 'ruby', 'python']),
        new Person('Jane', 'Hogan', 27, ['css', 'coffee-script', 'javascript'])];

    writeTable(persons);
};

function reset() {
    //TODO implement function for reset data to default
}

function addPerson() {
    //TODO implement(create table if empty or add row at the bottom)
}

function validateInput(value, expectedType) {
    if(typeof value === expectedType){
        return value;
    }else {
        switch (expectedType){
            case "number":
            {
                //TODO implement warning message
                break;
            }
            case "string":
            {
                //TODO implement warning message
                break;
            }
            default:
                //TODO implement some code
                return;
        }
    }
}

function writeTable(persons) {
    var counter = 1;
    var tableContainer;

    if(!(document.getElementsByTagName('table').length > 0)){
        tableContainer = createTableHeader();
    }
    persons.forEach(function (person) {
        var tbody = document.createElement('tbody');
        var tr = document.createElement('tr');
        var tdNum = document.createElement('td');

        tr.appendChild(tdNum);
        tdNum.innerHTML = counter;
        tableContainer.appendChild(tbody);
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
    var container = document.getElementsByClassName('center')[1];
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


