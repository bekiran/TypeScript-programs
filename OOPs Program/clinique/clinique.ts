
/************************************************************************************************
*  @Purpose : Address Book to store address of peopel and to find the adress of existing person.
*  @file    : addressbook.ts
*  @author  : bekiranabbi@gmail.com
*  @version : 1.0  
*  @since   : 26-02-2019
**************************************************************************************************/

var Utility = require('../Utility/Utility');
//created object of utility using new keyword.
var utility = new Utility();
class cliniqueManagement {

    cmanagement()
    {
       utility.clinique();
    }

}
//created object of cliniquemanagement using new keyword.
var cm = new cliniqueManagement();
cm.cmanagement();

