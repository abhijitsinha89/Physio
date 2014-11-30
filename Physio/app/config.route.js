(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: '/app/home/home.html',
                    title: 'home',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Home'
                    }
                }
            }, {
                url: '/book',
                config: {
                    title: 'book',
                    templateUrl: '/app/book/book.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Book'
                    }
                }
            }, {
                url: '/about',
                config: {
                    title: 'about',
                    templateUrl: '/app/about/about.html',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> About'
                    }
                }
            }, {
                url: '/contact',
                config: {
                    title: 'contact',
                    templateUrl: '/app/contact/contact.html',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-lock"></i> Contact'
                    }
                }
            }, {
                url: '/payment',
                config: {
                    title: 'book',
                    templateUrl: '/app/payment/payment.html',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-lock"></i> Payment'
                    }
                }
            }, {
                url: '/policies',
                config: {
                    title: 'book',
                    templateUrl: '/app/policies/policies.html',
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-lock"></i> Policies'
                    }
                }
            }
        ];
    }
})();