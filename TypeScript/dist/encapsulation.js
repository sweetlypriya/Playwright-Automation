"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutPage = void 0;
class CheckoutPage {
    //encapsulation- restric data/function through private function
    //private can be used only inside the class
    accountNumber() {
        console.log("987654321123456");
    } //it cannot be called outside the class
    verifyUser() { }
    cardName() {
        console.log("HDFC Card");
        this.accountNumber();
    }
}
exports.CheckoutPage = CheckoutPage;
const checkout = new CheckoutPage();
checkout.cardName();
//# sourceMappingURL=encapsulation.js.map