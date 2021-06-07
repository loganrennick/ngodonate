export class RegistrationModel {
    _id: number = 0;
    firstName: string = "";
    lastName: string = "";
    eMail: string = "";
    userRole: string = "";
    userID: string = "";
    passWord: string = "";
    cnfPassWord?: string = "";
}

export class RegistrationModelToPost {
    firstName: string = "";
    lastName: string = "";
    eMail: string = "";
    userRole: string = "";
    userID: string = "";
    passWord: string = "";
    cnfPassWord?: string = "";
}