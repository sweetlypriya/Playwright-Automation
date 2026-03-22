"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poly2 = exports.Poly1 = void 0;
class Poly1 {
    fun1() {
        console.log("fun1 verified");
    }
}
exports.Poly1 = Poly1;
class Poly2 extends Poly1 {
}
exports.Poly2 = Poly2;
const poly = new Poly2();
poly.fun1();
//# sourceMappingURL=polymorphism.js.map