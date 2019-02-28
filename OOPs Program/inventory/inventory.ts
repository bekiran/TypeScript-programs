/**********************************************************************************************
*  @Purpose :Inventory data management of Rice, Pulses and Wheats
*  @file    :inventory.js
*  @author  :bekiranabbi@gmail.com
*  @version :1.0
*  @since   :26/02/2019    
************************************************************************************************/

var utility = require('../Utility/Utility');

//used for coversation via console
var readline = require('readline-sync');
//created object of utility using new keyword

var Utility = new utility();

//used for handling all the file operations.
var fs = require('fs');
//reading data from json file
var data = fs.readFileSync('inventory.json');
 
class inventory
{
   invDataManagement():void
   {
      Utility.inventorydata()
   }

}
var inventer = new inventory
inventer.invDataManagement();