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
            component: 'productList'
        });

        $stateProvider.state({
            name: 'addProduct',
            url: '/add-product',
            component: 'addProduct'
        });

        $stateProvider.state({
            name: 'cart',
            url: '/cart',
            component: 'cart'
        });

    $urlRouterProvider.otherwise('/')
}]);