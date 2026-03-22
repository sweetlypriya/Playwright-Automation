"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    constructor() {
        //var,let,const keywords for variables is not used inside class
        this.username = "sweetly priya";
    }
    //function keyword is not used inside the class
    enterUsername() {
        console.log(this.username + " entered");
    }
    enterPassword() {
        console.log("Password entered");
    }
}
exports.LoginPage = LoginPage;
//create instance outside ths class
const login = new LoginPage(); //create an instance
login.enterUsername();
//# sourceMappingURL=class1.js.map