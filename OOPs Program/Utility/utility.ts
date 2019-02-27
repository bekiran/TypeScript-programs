import { log } from "util";

/*************************** Object Oriented Programs in TypeScript ***************************/

var readline = require('readline-sync');

/*************************************************************************************************
*  Purpose  : Inventory Data Management of Rice, Pulses and Wheats
* 
*  @author  : Kiran B.E.
*  @version :1.0
*  @since   :25-02-2018 
*************************************************************************************************/
module.exports = {

    inventory() {

        var fs = require('fs');

        //to read the data from JSON file.
        var data = fs.readFileSync('inventory.json');

        //for holding the object.
        var jsonGrocery = JSON.parse(data);

        console.log("1: Rice");
        console.log("2: pulses");
        console.log("3: wheat");

        //asking user to enter the choice
        var item: string = readline.question("Please enter your choice! \n")
        switch (item) {
            case '1':
                var weight: any = readline.question("please enter weight of rice you want to purchase: ");
                for (var i = 0; i < jsonGrocery.Rice.length; i++) {
                    console.log("per kg of " + jsonGrocery.Rice[i].name + " costs " + jsonGrocery.Rice[i].price + " and for " + weight + " kgs. cost " + weight * jsonGrocery.Rice[i].price);

                }
                break;

            case '2':
                var weight: any = readline.question("please enter weight of pulses you want to purchase: ");
                for (var i = 0; i < jsonGrocery.pulses.length; i++) {
                    console.log("per kg of " + jsonGrocery.pulses[i].name + " costs " + jsonGrocery.pulses[i].price + " and for " + weight + "kgs. cost " + weight * jsonGrocery.pulses[i].price);

                }
                break;


            case '3':
                var weight: any = readline.question("please enter weight of wheat you want to purchase: ");
                for (var i = 0; i < jsonGrocery.wheat.length; i++) {
                    console.log("per kg of " + jsonGrocery.wheat[i].name + " costs " + jsonGrocery.wheat[i].price + " and for " + weight + "kgs. cost " + weight * jsonGrocery.wheat[i].price);

                }
                break;

            default:
                console.log("please enter valid item!!");
        }

    }

}
