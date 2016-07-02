/**
The accoutn link template

@class [template] elemens_account_link
@constructor
*/


Template['elemens_account_link'].helpers({
    /**
    Get the account and return the account or address of "from" or "to" property

    @method (getAccount)
    */
    'getAccount': function(){
        return Helpers.getAccountByAddress(this.address) || {address: web3.toChecksumAddress(this.address)};
    }
});