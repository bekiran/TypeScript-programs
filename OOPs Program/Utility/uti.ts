/*************************************** Object Oriented Programs ****************************************/
// const readline = require("readline-sync");
var read = require("readline-sync");

module.exports = {
    /***************************************** Address Book ************************************/

    //To accept the first name of a person

    personFirstName() {
        var flag : boolean = true;
        var name:string = read.question("Please enter your name : \n");
        while (flag)
        {
            if(name!= "string" && isNaN){
                flag = false;
            } else {
                name = read.question("please enter your name correctly : \n");
            }
        }
        return name;

    },

    //To accept the last name of a person

    personLastName() {
        var flag : boolean = true;
        var Lname : string = read.question("Please enter your last name : \n");
        while (flag)
        {
            if(Lname!= "string" && isNaN){
                flag = false;
            } else {
                Lname = read.question("Please enter your valid last name : \n");
            }
        }
        return Lname;
    },

    personAddress(){
        var flag : boolean = true;
        var Address : string = read.question("Please enter your address : \n");
        while (flag)
        {
            if(Address!= "string" && isNaN){
                flag=false;
            } else {
                Address = read.question("Please enter valid address : \n");
            }
            return Address;

        }
    },

    personState(){
        var flag : boolean = true;
        var State : string = read.question("please enter your State : \n");
        while (flag)
        {
            if(State!= "string" && isNaN){
                flag = false;
            } else {
                State = read.question("please enter valid state : \n");
            }
        }
        return State;
    },

    personMobile: function() {
        var flag : boolean = true;
        var mob : number = read.question("Please enter your contact number : \n");
        while (flag)
        {
            if( !isNaN(mob)) {
                flag =false;
            } else {
                mob = read.question("Please enter valid contact number! : \n");
            }
        }
        return mob;
    },

    personZipCode : function(){
        var flag : boolean = true;
        var Code : number = read.question("Please enter your contact number : \n");
        while (flag)
        {
            if( !isNaN(Code)) {
                flag =false;
            } else {
                Code = read.question("Please enter valid contact number! : \n");
            }
        }
        return Code;
    },


    /******************************** Add person object *************************************/

    addperson(object){
        var id : number = 0;
        try {
            var personobj = object.Person;
            //taking inputs by user using  methods
            var fname = this.personFirstName();
            var lname = this.personLastName();
            var address = this.personAddress();
            var state = this.personState();
            var PinCode = this.personZipCode();
            var mob = this.personMobile();
            for (var key in personobj) {
              id++;
            }
            //generating id for new user
            //var id1 = personobj[id - 1].ID;
            personobj.push({
              Firstname: fname,
              LastName: lname,
              Address: address,
              State: state,
              Zip: PinCode,
              Mobile: mob
            });  
        } catch (error) {
            console.log("Error in adding person");
            
        }
    },

    //  to edit person from address book

    editperson(object){

        var paramete
        
    },

    /*****************************************************************************************/

}