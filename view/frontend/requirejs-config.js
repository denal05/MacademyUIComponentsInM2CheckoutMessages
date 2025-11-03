var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/summary/cart-items': {
                'Denal05_MacademyUIComponentsInM2CheckoutMessages/js/view/summary/cart-items-mixin': true
            }
        }
    },
    /*
    Don't use a map to override a template unless absolutely necessary; instead, try to use a template property in your UI Component.
    */
    map: {
        '*': {
            'Magento_Checkout/template/sidebar':
                'Denal05_MacademyUIComponentsInM2CheckoutMessages/template/sidebar'
        }
    }
}