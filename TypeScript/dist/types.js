"use strict";
//Tuple - it stores multiple values in given type order and length
const auto = ["playwright", 34, "selenium", "cypruss"];
console.log(auto);
const tool = "playwright";
console.log(tool);
const autoTools = ["playwright", 34, "selenium", "cypruss"];
console.log(autoTools);
const personName = "sweetly";
const age = 34;
const women = true;
const final = "success";
const automation = {
    personName: "priya",
    age: 32,
    tool: "playwright"
};
const person = {
    automation: "play",
    age: 34
};
//ENUM => to store constant values
var tableHeader;
(function (tableHeader) {
    tableHeader["Home"] = "HomePage";
    tableHeader["product"] = "productPage";
    tableHeader["login"] = "loginpage";
    tableHeader["signin"] = "signinpage";
})(tableHeader || (tableHeader = {}));
console.log(tableHeader.product);
//# sourceMappingURL=types.js.map