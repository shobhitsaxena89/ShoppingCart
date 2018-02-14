angular.module('localAmazon.product')
    .component('productDetails', {
        templateUrl: 'src/product/components/product-details/product-details.component.html',
        // bindings are internally attached to controller
        bindings: {
            product : '<'
        }
    });