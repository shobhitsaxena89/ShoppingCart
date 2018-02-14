angular.module('localAmazon')
.directive('myFirst', [function(){
return{
    restrict: 'A', // A- attribute, E- element, 
    template: '<div>My Directive</div>',
    scope: true,
    link: function(scope, element, attribute){

    }
};
}]);