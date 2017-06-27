module sweeto.login {
    angular.module("sweeto.login", []);

    export class User implements sweeto.user.Iuser {
        userId: string;
        password: string;
        id: number;
        firstName: string;
        middleName: string;
        lastname: string;
        address: sweeto.user.Iaddress[];
    }
}
