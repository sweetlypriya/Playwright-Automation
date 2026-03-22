"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class1_1 = require("./class1");
class HomePage extends class1_1.LoginPage {
    constructor(user) {
        super();
        this.user = user;
    }
    //access modifiers
    //private- used only inside the class
    //protected-can be used inside class and inside child class
    //public-by default it is public
    //readonly-we cannot edit only readable
    verifyUrl() {
        console.log("URL Verified");
    }
    verifyHeader() {
        console.log("Header Verified");
    }
    verifyUser() {
        console.log("user is verified as " + this.user);
        this.verifyUrl();
        this.verifyHeader();
    }
}
exports.default = HomePage;
const home = new HomePage("Priya");
home.enterPassword();
home.verifyUser();
//# sourceMappingURL=accessModifiers.js.map