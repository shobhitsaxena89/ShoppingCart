angular.module('localAmazon')
.directive('prodTitle', ['$q', 'productService', function($q, productService){
return{
    restrict: 'A', // A- attribute, E- element, M-comment, C-class
    //template: '<div>My Directive</div>',
    // scope: {
    //     myTitle:'@', // @-> we are expecting a value
    //     myAppName:'#'
    // },
    // if we don't specify then scope by default is false
    require: 'ngModel',
    link: function(scope, element, attribute,ngModelCtrl){
        console.log(ngModelCtrl);
        ngModelCtrl.$validators.prodTitle = function(val){
        if(!val)
        {
            return true;
        }
        if(val.startsWith('galaxy')){
            return false;
        }
            return true;
        };
        ngModelCtrl.$asyncValidators.prodAvailability= function(val){
            var defer = $q.defer();
            productService.searchProduct(val)
                .then(function(products){
                    if(products.length > 0){
                        defer.reject();
                    }
                    defer.resolve();
                });
                return defer.promise;
        };
}
};
}]);