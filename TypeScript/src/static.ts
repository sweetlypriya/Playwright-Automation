export class StaticClass{
//Static- we can call function without creating instance
//we cannot use constructor as it belongs to instance
    static userEnd(){
        console.log("Static user verified");
    }
}
StaticClass.userEnd()




