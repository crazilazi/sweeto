module sweeto.route {
    angular.module("sweeto.route", ["ngRoute"])
    .config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];

    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
      .when("/", {
         templateUrl: "/app/login/login.app.html",
          controller: "LoginController as vm",
      })
      .when("/profile", {
         templateUrl: "/app/profile/profile.app.html",
        //  controller: "StoreDetailCtrl as vm",
      })
      .otherwise("/");
    }
}
