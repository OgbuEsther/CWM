export interface clientDetails {
    name : string;
    address : string;
    clientType : boolean;
    email : string;
    phoneNumber : string;
    dashBoard : {}[]
}

export interface userDashBoard {
    message :  {}[];
    paymentLog : string[];
    bills : string;
    schedule : string
}


export interface adminDetails{
name : string;
email : string;
password : string;
dashBoard : {}[];
}

export interface adminDashboard {
message : {}[];
paymentLog : string[];
approvals : boolean;
viewArea: string;
expectedPayment : string;

}

