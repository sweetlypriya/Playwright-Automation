export class LoginPage{ //export keyword is used so that we can import this class in another page

    //var,let,const keywords for variables is not used inside class
    username="sweetly priya"

    //function keyword is not used inside the class
    enterUsername(){
        console.log(this.username+" entered");
    }
    enterPassword(){
        console.log("Password entered");
    }
}

//create instance outside ths class
const login=new LoginPage() //create an instance
login.enterUsername()