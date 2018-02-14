angular.module('localAmazon', [
    'ui.router',
    'localAmazon.cart',
    'localAmazon.product',
    'localAmazon.shared'
]);

angular.module('localAmazon')
    .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state({
            name: 'home',
            url: '/',
            component: 'productList',
// before loading component we are loading the data from service first.
            resolve:{
                products: ['productService', function(productService){
                return productService.getProducts()
                .then(function(res){
                    return res.data;
                });
                }
            ]}
        });

        $stateProvider.state({
            name: 'addProduct',
            url: '/add-product',
            component: 'addProduct'
        });

        $stateProvider.state({
            name: 'productInfo',
            url: '/product-details/{productId}',
            component: 'productDetails',
            resolve:{
                product: ['productService', '$transition$', 
                function(productService,transition){
                    var params = transition.params();
                    var productId = params.productId;
                    return productService.getProductDetails(productId);
                }]
            }
        });

        $stateProvider.state({
            name: 'cart',
            url: '/cart',
            component: 'cart'
        });

    $urlRouterProvider.otherwise('/')
}]);