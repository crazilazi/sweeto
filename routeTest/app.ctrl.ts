module sweeto {
    export class SweetoController {
        expressBooking: number = 1;
        wallchartTouchSupport: boolean = false;
        hideMenuItems: boolean = false;
        constructor(private $location: ng.ILocationService) {
            // this.expressBooking = 1;
            // this.wallchartTouchSupport = false;
            // this.hideMenuItems = false;
        }
        hideMenu(): void {
            this.hideMenuItems = true;
        }
        showMenu(): void {
            this.hideMenuItems = false;
        }
    }
    angular.module("sweeto").controller("sweetoController", SweetoController);
}
