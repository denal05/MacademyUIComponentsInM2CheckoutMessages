define(['uiComponent'], function(Component) {
    'use strict';
    
    return Component.extend({
        defaults: {
            imports: {
                countryId: 'checkoutProvider:shippingAddress.country_id'
            }
        }
    });
});