define([], function() {
    'use strict';
    
    return function (Component) {
        return Component.extend({
            defaults: {
                template: 'Denal05_MacademyUIComponentsInM2CheckoutMessages/summary/cart-items'
                /*
                Don't use exports as they are harder to debug; use imports instead.
                */
                exports: 'totals.subtotal': 'checkout.sidebar.guarantee:subtotal'
            },
            isItemsBlockExpanded: function () {
                return true;
            }
        });
    };
});