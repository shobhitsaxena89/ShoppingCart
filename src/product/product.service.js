angular.module('localAmazon.product')
    .service('productService', ['$http', 'appConstant',
        function($http, appConstant){

        this.getProducts = function(){
            return $http.get(appConstant.urls.product);
        };
        this.addProduct = function(productDetails){
            return $http.post(appConstant.urls.product, productDetails);
        };
        this.searchProduct = function(title){
            return $http.get(appConstant.urls.product + '?title' + title)
                .then(function(res){
                    return res.data
                });
        };
        this.getProductDetails = function(productId){           
                return $http.get(appConstant.urls.product+ '/' + productId);
        };
    
}]);