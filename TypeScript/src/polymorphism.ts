export class Poly1 {
    fun1() {
        console.log("fun1 verified");
    }
}
export class Poly2 extends Poly1 {
    fun1() {
        console.log("fun2 verified");
    }
}
const poly = new Poly2()
poly.fun1()