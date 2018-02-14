angular.module('localAmazon.product')
.controller('ProductListCtrl', ['productService',
function(productService){
    var self = this;
    self.products = [];
    self.$onInit = function(){
        productService.getProducts()
            .then(function(result){
                self.products = result.data;
            });
    };

}])
    .component('productList', {
        templateUrl: 'src/product/components/product-list/product-list.component.html',
        controller: 'ProductListCtrl'   
    });