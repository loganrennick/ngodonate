import { DonationType } from "./donation-type";
import { Gift } from "./gift";
import { PersonalInfo } from "./personal-info";

export class Donation {
    public id: number = 0;
    public type: DonationType = { id: 0, Name: "" };
    public gift: Gift = { id: 0, price: 0, monthly: false };
    public personalInfo: PersonalInfo = { id: 0, firstName: "", lastName: "", phoneNum: 0, email: "", address: "", city: "", state: "", zip: 0, country: "" }
}
