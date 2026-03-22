"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticClass = void 0;
class StaticClass {
    //Static- we can call function without creating instance
    //we cannot use constructor as it belongs to instance
    static userEnd() {
        console.log("Static user verified");
    }
}
exports.StaticClass = StaticClass;
StaticClass.userEnd();
//# sourceMappingURL=static.js.map