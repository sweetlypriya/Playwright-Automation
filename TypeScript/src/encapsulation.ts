import HomePage from "./accessModifiers";

export class CheckoutPage {
    //encapsulation- restric data/function through private function
    //private can be used only inside the class

    private accountNumber() {
        console.log("987654321123456");
    } //it cannot be called outside the class
    verifyUser(){}

    cardName() {
        console.log("HDFC Card");
        this.accountNumber()
    }
}
const checkout = new CheckoutPage()
checkout.cardName()

