module sweeto.login {
    export class LoginController {
        isValidUser: boolean;
        inValidUserText: string;
        title: string;
        checkBoxText: string;
        loginButtonText: string;
        newRegistrationText: string;
        user: sweeto.user.Iuser;
        abc: string;
        def: number;
        g: string;
        registeredUser: sweeto.user.Iuser[];
        constructor(private $location: ng.ILocationService) {
            this.isValidUser = true;
            this.inValidUserText = "UserId or Password is wrong.";
            this.title = "Login Page";
            this.checkBoxText = "Remember me";
            this.loginButtonText = "Sign In";
            this.newRegistrationText = "Register ?";
            this.registeredUser = [];
            // Adding first user
            let user = new sweeto.login.User();
            user.firstName = "Rajeev";
            user.middleName = "?";
            user.lastname = "Ranjan";
            user.userId = "rajeev.ranjan";
            user.password = "abcdef";
            this.registeredUser.push(user);
            // Adding second user
            user = new sweeto.login.User();
            user.firstName = "Sanjeev";
            user.middleName = "?";
            user.lastname = "Verma";
            user.userId = "sanjeev.verma";
            user.password = "12345";
            this.registeredUser.push(user);

        }
        validateUser(loginUser: sweeto.user.Iuser): void {
            const user = this.registeredUser.filter((u) => {
                if (u.userId === loginUser.userId && u.password === loginUser.password) {
                    return true;
                }
                return false;
            });
            /* tslint:disable
            console.log(user);
             */
            if (user.length === 0) {
                this.isValidUser = false;
            }
          /* tslint:disable */  else {
                this.$location.path("/profile");
            }

        }
    }
    angular.module("sweeto.login").controller("LoginController", LoginController);
}
