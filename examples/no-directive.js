// example - valid: true
angular.module('myModule').component('helloWorld', function() {
    return {
        template: '<h2>Hello World!</h2>'
    };
});

// example - valid: false, errorMessage: "Directive should be implemented with the component method"
angular.module('myModule').directive('helloWorld', function() {
});


