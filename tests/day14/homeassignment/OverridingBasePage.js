"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.findElement = function () {
        console.log("Function findElement() from BasePage Parent Class");
    };
    BasePage.prototype.clickElement = function () {
        console.log("Function clickElement() from BasePage Parent Class");
    };
    BasePage.prototype.enterText = function () {
        console.log("Function enterText() from BasePage Parent Class");
    };
    BasePage.prototype.performCommonTasks = function () {
        console.log("Function performCommonTasks() from BasePage Parent Class");
    };
    return BasePage;
}());
exports.BasePage = BasePage;
var basePage = new BasePage();
basePage.performCommonTasks();
basePage.enterText();
