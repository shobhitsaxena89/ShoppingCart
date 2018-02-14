angular.module('localAmazon.product')
.controller('ProductListCtrl', ['productService',
function(productService){
    // assign this to someVariable becasue context may change
    // we want to get products using controller object
    // var self = this;
    // self.products = [];
    // self.$onInit = function(){
    //     productService.getProducts()
    //         .then(function(result){
    //             // here 'this' context has changed to Window object rather than controller object.                
    //             // Console.Log(this);
    //             self.products = result.data;
    //         });
    // };

}])
    .component('productList', {
        templateUrl: 'src/product/components/product-list/product-list.component.html',
        bindings: {
            products: '<'
        },
        controller: 'ProductListCtrl'   
    });