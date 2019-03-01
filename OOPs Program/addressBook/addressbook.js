"use strict";
exports.__esModule = true;
/************************************************************************************************
*  @Purpose : Address Book to store address of peopel and to find the adress of existing person.
*  @file    : addressbook.ts
*  @author  : bekiranabbi@gmail.com
*  @version : 1.0
**************************************************************************************************/
//used for taking input from user
var prompt = require('prompt-sync')();
//used for performing file operations
var fs = require('fs');
//used to read data from json file
var data = fs.readFileSync('Addressbook.json');
//for holding the object
var arrayOfObjects = JSON.parse(data);
var nameRestriction = /[a-z]/ig; //Regular expression to remove anything that is not: a-z 0-9 and hyphen
var contactRestriction = /[0-9]/g; //Regular expression is used to find any character that is NOT a digit.
var Address = /** @class */ (function () {
    function Address() {
    }
    Address.prototype.createAddress = function () {
        console.log("*** Please enter your information details in addressbook ***");
        var name = prompt("Please enter your first name : ");
        var lastName = prompt("Please enter your last name : ");
        if (nameRestriction.test(name) == false && name.length > 3 && nameRestriction.test(lastName) == false && lastName.length > 3) {
            console.log("Invalid name!");
            return false;
        }
        console.log("Please enter your address");
        var street = prompt("Street: ");
        var city = prompt("City: ");
        if (nameRestriction.test(city) == false) {
            console.log("Invalid  city name!");
            return false;
        }
        var state = prompt("State: ");
        if (nameRestriction.test(state) == false) {
            console.log("Invalid  state name!");
            return false;
        }
        var nation = prompt("Nationality: ");
        if (nameRestriction.test(nation) == false) {
            console.log("Invalid Nationality!");
            return false;
        }
        var zip = prompt("Zip/Postal code: ");
        if (contactRestriction.test(zip) == false || zip.length != 6) {
            console.log("Invalid Zipcode!!please enter minimum 6 digits ");
            return false;
        }
        var phoneNum = prompt("Phone number: ");
        if (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
            console.log("Invalid number!");
            return false;
        }
        arrayOfObjects.Person.push({
            Name: name,
            LastName: lastName,
            Address: {
                Street: street,
                City: city,
                State: state,
                Nation: nation,
                Zip: zip,
                PhoneNum: phoneNum
            }
        });
        //Convert a JavaScript object into a string with JSON.stringify().
        fs.writeFile('Addressbook.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err)
                throw err;
            console.log('Done!');
        });
        console.log("Address updated succesfully!");
        console.log("Your information on record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    };
    Address.prototype.compare1 = function (a, b) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
        }
        return 0;
    };
    Address.prototype.sorting = function () {
        console.log(arrayOfObjects.Person.sort(this.compare1)); //this is a keyword
    };
    Address.prototype.openProfile = function () {
        var temp = -1;
        if (arrayOfObjects.Person.length > 0) {
            for (var i = 0; i < arrayOfObjects.Person.length; i++) {
                console.log(arrayOfObjects.Person[i]);
            }
            var update = prompt("Please enter profile name : ");
            for (var k = 0; k < arrayOfObjects.Person.length; k++) {
                if (update == arrayOfObjects.Person[k].Name) {
                    temp = k;
                    console.log("Please select an option to modify your details ");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Add");
                    console.log("4: Sort");
                    console.log("6: Quit");
                    var choice2 = prompt("Please enter your choice: ");
                    switch (choice2) {
                        case '1':
                            console.log("Please select to modify your details? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nation");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                            var choice3 = prompt("Please enter your choice: ");
                            switch (choice3) {
                                case '1':
                                    var sUpdate = prompt("Enter the new street number: ");
                                    if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                        console.log("Invalid street details!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }
                                    };
                                    arrayOfObjects.Person[k] = obj;
                                    this.save();
                                    break;
                                case '2':
                                    var cUpdate = prompt("Enter the new city name: ");
                                    if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }
                                    };
                                    arrayOfObjects.Person[k] = obj;
                                    this.save();
                                    break;
                                case '3':
                                    var stUpdate = prompt("Enter the new state name: ");
                                    if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "State": stUpdate,
                                            "City": cUpdate,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }
                                    };
                                    arrayOfObjects.Person[k] = obj;
                                    this.save();
                                    break;
                                case '4':
                                    var nUpdate = prompt("Enter the new nation name: ");
                                    if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": nUpdate,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }
                                    };
                                    arrayOfObjects.Person[k] = obj;
                                    this.save();
                                    break;
                                case '5':
                                    var zUpdate = prompt("Enter the new zip code: ");
                                    if (contactRestriction.test(zUpdate) == false || zUpdate.length != 6) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": arrayOfObjects.Person[k]["Address"].PhoneNum
                                        }
                                    };
                                    arrayOfObjects.Person[k] = obj;
                                    this.save();
                                    break;
                                case '6':
                                    var pUpdate = prompt("Enter the new phone number: ");
                                    if (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": arrayOfObjects.Person[k].Name,
                                        "LastName": arrayOfObjects.Person[k].LastName,
                                        "Address": {
                                            "Street": arrayOfObjects.Person[k]["Address"].Street,
                                            "City": arrayOfObjects.Person[k]["Address"].City,
                                            "State": arrayOfObjects.Person[k]["Address"].State,
                                            "Nation": arrayOfObjects.Person[k]["Address"].Nation,
                                            "Zip": arrayOfObjects.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    };
                                    arrayOfObjects.Person[k] = obj;
                                    this.save();
                                    break;
                                case '7':
                                    console.log("Exit!");
                                    address();
                                    break;
                            }
                            break;
                        case '2':
                            var update = prompt("Please enter the item you want to delete: ");
                            arrayOfObjects.Person[update];
                            for (var k = 0; k < arrayOfObjects.Person.length; k++) {
                                if (arrayOfObjects.Person[k] == null) {
                                    arrayOfObjects.Person.splice(k, 1);
                                }
                            }
                            fs.writeFile('Addressbook.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                                if (err)
                                    throw err;
                                console.log('Sucess...');
                            });
                            break;
                        case '3':
                            this.createAddress();
                            break;
                        case '4':
                            this.sorting();
                            this.save();
                            break;
                        case '5':
                            console.log("Exit");
                            address();
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            }
            if (temp == -1) {
                console.log("Profile not present in the address book! Please create one.");
                address();
            }
        }
        else {
            console.log("No profiles to display!! Please create a new profile!");
            this.createAddress();
        }
    };
    Address.prototype.save = function () {
        fs.writeFile('Addressbook.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err)
                throw err;
            console.log('File Saved!!');
        });
    };
    return Address;
}());
function address() {
    var a = new Address();
    console.log("****************** ADDRESS BOOK **********************************");
    console.log("1: Update address book");
    console.log("2: Open Address Book");
    console.log("3: Exit");
    var choice1 = prompt("Please enter your choice: ");
    switch (choice1) {
        case '1':
            a.createAddress();
            break;
        case '2':
            a.openProfile();
            break;
        case '3':
            console.log("Exit!");
            break;
        default:
            console.log("Please enter a valid option!!");
    }
}
address();
