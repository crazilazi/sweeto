module sweeto.user {
    export interface IuserDetails {
        id: number;
        firstName: string;
        middleName: string;
        lastname: string;
        address: Iaddress[];

    }
    export interface Iaddress {
        street1: string;
        street2: string;
        landMark: string;
        pinCode: number;
    }
    export interface Iuser extends IuserDetails {
        userId: string;
        password: string;

    }
}
