"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concrete = /** @class */ (function () {
    function Concrete() {
    }
    Concrete.prototype.connect = function () {
        console.log("Method Connect from Interface");
    };
    Concrete.prototype.disconnect = function () {
        console.log("Method disconnect from Interface");
    };
    Concrete.prototype.executeUpdate = function () {
        console.log("Method executeUpdate from Interface");
    };
    return Concrete;
}());
var concreteObj = new Concrete();
concreteObj.connect();
concreteObj.disconnect();
concreteObj.executeUpdate();
