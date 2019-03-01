"use strict";
/*************************** Object Oriented Programs in TypeScript ***************************/
var prompt = require('prompt-sync');
var fs = require('fs');
var readline = require('readline-sync');
var utility = /** @class */ (function () {
    //empty constructor
    function utility() {
    }
    //used to take input from user.
    utility.prototype.input = function () {
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return rl;
    };
    utility.prototype.getString = function () {
        var data = readline.question("");
        return data;
    };
    /*************************************************************************************************
    *  Purpose  : Inventory Data Management of Rice, Pulses and Wheats
    *
    *  @author  : Kiran B.E.
    *  @version :1.0
    *  @since   :25-02-2018
    *************************************************************************************************/
    utility.prototype.inventorydata = function () {
        var fs = require('fs');
        //to read the data from JSON file.
        var data = fs.readFileSync('inventory.json');
        //for holding the object.
        var jsonGrocery = JSON.parse(data);
        console.log("Please select the iteam bellow you want purchase \n");
        console.log("1: Rice");
        console.log("2: pulses");
        console.log("3: wheat");
        //asking user to enter the choice
        var item = readline.question("Please enter your choice! \n");
        switch (item) {
            case '1':
                var weight = readline.question("please enter weight of rice you want to purchase: ");
                for (var i = 0; i < jsonGrocery.Rice.length; i++) {
                    console.log("per kg of " + jsonGrocery.Rice[i].name + " costs " + jsonGrocery.Rice[i].price + " and for " + weight + " kgs. cost " + weight * jsonGrocery.Rice[i].price);
                }
                break;
            case '2':
                var weight = readline.question("please enter weight of pulses you want to purchase: ");
                for (var i = 0; i < jsonGrocery.pulses.length; i++) {
                    console.log("per kg of " + jsonGrocery.pulses[i].name + " costs " + jsonGrocery.pulses[i].price + " and for " + weight + "kgs. cost " + weight * jsonGrocery.pulses[i].price);
                }
                break;
            case '3':
                var weight = readline.question("please enter weight of wheat you want to purchase: ");
                for (var i = 0; i < jsonGrocery.wheat.length; i++) {
                    console.log("per kg of " + jsonGrocery.wheat[i].name + " costs " + jsonGrocery.wheat[i].price + " and for " + weight + "kgs. cost " + weight * jsonGrocery.wheat[i].price);
                }
                break;
            default:
                console.log("please enter valid item!!");
        }
    };
    /*************************************************************************************************
    *  Purpose  : Clinique data management of Doctors and patients.
    *
    *  @author  : Kiran B.E.
    *  @version :1.0
    *  @since   :25-02-2018
    *************************************************************************************************/
    utility.prototype.clinique = function () {
        var data = fs.readFileSync('clinique.json');
        var prompt1 = require('prompt-sync')();
        var clinique = JSON.parse(data);
        do {
            console.log("1. Add appointment");
            console.log("2. Print list");
            console.log("3. search");
            console.log("4. exit ");
            // console.log('test1');
            var option = prompt1("Enter the option : ");
            console.log('test2');
            switch (option) {
                case '1':
                    // console.log(" List of doctors avilable are : ");
                    // console.log(clinique.doctors);
                    var name = prompt1("Enter the name of patient: ");
                    var ID = Math.floor(Math.random() * 1000);
                    var mobNo = prompt1("Enter your mobile number");
                    var age = prompt1("Please Enter your age: ");
                    var appointment_To = prompt1("Enter the name of doctor you want appointment with : ");
                    clinique.Patients.push({
                        "Name": name,
                        "ID": ID,
                        "mobNo": mobNo,
                        "age": age,
                        "appoinntment_To": appointment_To
                    });
                    console.log(clinique.Patients);
                    console.log("Appointment added sucessfully!");
                    fs.writeFileSync('clinique.json', JSON.stringify(clinique));
                    break;
                case '2':
                    console.log(clinique);
                    break;
                case '3':
                    console.log("   Search List   ");
                    console.log("1. Doctor \n 2.Patient");
                    var option2 = prompt1('Enter Option: ');
                    if (option2 == 1) {
                        console.log("1. Search by Name \n2.Search ID \n3.Search by Specialization \n4.Search by Availability");
                        var option3 = prompt1('Enter options: ');
                        if (option3 == 1) {
                            var i = prompt1('Name: ');
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].Name == i) {
                                    console.log(" Doctor Details");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 2) {
                            var i = prompt1('ID: ');
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].ID == i) {
                                    console.log(" Doctor Details");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 3) {
                            var i = prompt1('Specialization: ');
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].Specialization == i) {
                                    console.log(" Doctor Details");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        else if (option3 == 4) {
                            var i = prompt1('Availability: ');
                            for (var key in clinique.Doctors) {
                                if (clinique.Doctors[key].Availability == i) {
                                    console.log("Doctors Details");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                    }
                    if (option2 == 2) {
                        console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age");
                        var option4 = prompt('Enter option: ');
                        if (option4 == 1) {
                            var i = prompt1('Name: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].Name == i) {
                                    console.log(" Patients Details");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 2) {
                            var i = prompt1('ID: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].ID == i) {
                                    console.log("Patient Details");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 3) {
                            var i = prompt1('mobNo: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].mobNo == i) {
                                    console.log("Patient Details");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        else if (option4 == 4) {
                            var i = prompt1('Age: ');
                            for (var key in clinique.Patients) {
                                if (clinique.Patients[key].Age == i) {
                                    console.log("Patient Details");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                    }
                    break;
                case '4':
                    break;
                default:
                    console.log("please enter valid input");
            }
        } while (option != '4');
    };
    return utility;
}());
module.exports = utility;
