/************************************************************************************************
*  @Purpose : Address Book to store address of peopel and to find the adress of existing person.
*  @file    : addressbook.ts
*  @author  : bekiranabbi@gmail.com
*  @version : 1.0
*  @since   : 26-02-2019
**************************************************************************************************/
var utility = require('../Utility/Utility');
//created object of utility using new keyword.
var Utility = new utility();
var cliniqueManagement = /** @class */ (function () {
    function cliniqueManagement() {
    }
    cliniqueManagement.prototype.cmanagement = function () {
        Utility.clinique();
    };
    return cliniqueManagement;
}());
//created object of cliniquemanagement using new keyword.
var cm = new cliniqueManagement();
cm.cmanagement();