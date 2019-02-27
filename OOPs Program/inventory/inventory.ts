/**
*  @Purpose :Data Management of Rice, Pulses and Wheats
*  @file    :inventory.js
*  @author  :bekiranabbi@gmail.com
*  @version :1.0
*  @since   :26/02/2019    
*/

var res = require('../Utility/utility')
var read =  require('readline-sync')
var utility = new res();
var fs = require('fs');
var Data = fs.readFileSync('inventory.json');

class inventory{
    dataManagement(){
        
        utility.inventory
    }
}

var invent = new inventory
invent.dataManagement();