define([], function() {
    'use strict';
    
    return function (Component) {
        return Component.extend({
            defaults: {
                template: 'Denal05_MacademyUIComponentsInM2CheckoutMessages/summary/cart-items'
            },
            isItemsBlockExpanded: function () {
                return true;
            }
        });
    };
});