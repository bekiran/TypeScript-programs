try {
    var utility = require('../Utility/utility');
    var read = require('readline-sync');
    var filestream = require('fs');
    var content = filestream.readFileSync('AddressBook.json', 'utf8');
    var obj = JSON.parse(content);

    function addressBook() {
        utility.personAddressBook(obj, filestream);
    }
    addressBook()

} catch (error) {
    console.log("Error in the code");
}

