/**
Template Controllers

@module Templates
*/

/**
The address input template

@class [template] elemens_input_address
@constructor
*/

Template['elemens_input_address'].helpers({
    /**
    Add the attributes and merge the current context

    @method (attributes)
    @return {String}
    */
    'attributes': function() {
        var attr = _.clone(this);
        attr.class =  this.class ? this.class + ' abi-input' : 'abi-input';
        attr.placeholder = this.placeholder || '0x123456...';
        attr.value = this.value;
        return attr;
    }
})