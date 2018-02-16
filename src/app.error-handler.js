angular.module('localAmazon')
    .decorator('$exceptionHandler', ['$delegate', function($delegate){
        return function(exception, cause){
            console.warn("My custom handler, here we can add more details and then the real excetion flow.")
            $delegate(exception, cause);
        };
    }]);