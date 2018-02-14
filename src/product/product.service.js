angular.module('localAmazon.product')
    .service('productService', ['$http', 'appConstant',
        function($http, appConstant){
        this.getProducts = function(){
            return $http.get(appConstant.urls.product);
        };
        this.addProduct = function(){

        };
        this.getProductDetails = function(){

        };
    }]);