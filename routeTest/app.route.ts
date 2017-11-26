module sweeto.route {
    angular.module("sweeto.route", ["ui.router"])
    .config(routeConfig);
    // routeConfig.$inject = ["$routeProvider"];
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    // function routeConfig($routeProvider: ng.route.IRouteProvider): void {
    //     $routeProvider
    //   .when("/", {
    //      templateUrl: "/app/login/login.app.html",
    //       controller: "LoginController as vm",
    //   })
    //   .when("/profile", {
    //      templateUrl: "/app/profile/profile.app.html",
    //     //  controller: "StoreDetailCtrl as vm",
    //   })
    //    .otherwise({
    //             redirectTo: "/",
    //         });
    // }
    function routeConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
        $urlRouterProvider.otherwise("/");
        // const loginState: ng.ui.IState = {
        //     name: "login",
        //     url: "/login",
        //     templateUrl: "/app/login/login.app.html",
        //     controller: "LoginController",
        //     controllerAs: "vm",
        // };

        // const profileState: ng.ui.IState = {
        //     name: "profile",
        //     url: "/profile",
        //     templateUrl: "/app/profile/profile.app.html",
        //     controller: "StoreDetailCtrl",
        //     controllerAs: "vm",
        // };

        $stateProvider.state("config", {
            url: "/",
            views: {
                ""  :    { templateUrl: "/routeTest/items/landing.html" },
                "one@config": { templateUrl: "/routeTest/items/routeMenu.html" },
                "two@config": { templateUrl: "/routeTest/items/items.html" ,
                 controller: "sweetoController",
                 controllerAs: "vm",
                },
            },
        }).state("config.expressbooking", {
            url: "/config/expressbooking",
            templateUrl: "/routeTest/items/expressBooking.html",
            // controller: "sweetoController",
            // controllerAs: "vm",
        }).state("config.wallchart", {
            url: "/config/wallchart",
            templateUrl: "/routeTest/items/wallchart.html",
            // controller: "sweetoController",
            // controllerAs: "vm",
        }).state("test", {
            url: "/test",
            templateUrl: "/routeTest/items/expressBooking.html",

        });

        // $stateProvider.state(profileState);

    }
}
