import { LoginPage } from "./class1";

export default class HomePage extends LoginPage {//inheritance
    //default keyword is used import this class without {} or we can change the class name while importing in another page

    user: string
    constructor(user: string) {
        super()
        this.user = user
    }
    //access modifiers
    //private- used only inside the class
    //protected-can be used inside class and inside child class
    //public-by default it is public
    //readonly-we cannot edit only readable

    private verifyUrl() {
        console.log("URL Verified");
    }

    protected verifyHeader() {
        console.log("Header Verified");
    }

    verifyUser() {
        console.log("user is verified as " + this.user);
        this.verifyUrl()
        this.verifyHeader()
    }
}
const home = new HomePage("Priya")
home.enterPassword()
home.verifyUser()
