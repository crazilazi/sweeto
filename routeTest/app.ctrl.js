"use strict";
var sweeto;
(function (sweeto) {
    var SweetoController = (function () {
        function SweetoController($location) {
            this.$location = $location;
            this.expressBooking = 1;
            this.wallchartTouchSupport = false;
            this.hideMenuItems = false;
            // this.expressBooking = 1;
            // this.wallchartTouchSupport = false;
            // this.hideMenuItems = false;
        }
        SweetoController.prototype.hideMenu = function () {
            this.hideMenuItems = true;
        };
        SweetoController.prototype.showMenu = function () {
            this.hideMenuItems = false;
        };
        return SweetoController;
    }());
    sweeto.SweetoController = SweetoController;
    angular.module("sweeto").controller("sweetoController", SweetoController);
})(sweeto || (sweeto = {}));
//# sourceMappingURL=app.ctrl.js.map