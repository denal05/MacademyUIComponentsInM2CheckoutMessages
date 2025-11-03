define([], function() {
    'use strict';
    
    return function (Component) {
        return Component.extend({
            defaults: {
                template: 'Denal05_MacademyUIComponentsInM2CheckoutMessages/summary/cart-items'
                exports: 'totals.subtotal': 'checkout.sidebar.guarantee:subtotal'
            },
            isItemsBlockExpanded: function () {
                return true;
            }
        });
    };
});