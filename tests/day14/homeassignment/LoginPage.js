"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OverridingBasePage_1 = require("./OverridingBasePage");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.performCommonTasks = function () {
        console.log("Function performCommonTasks() overridden from LoginPage SubClass");
    };
    LoginPage.prototype.clickSubmit = function () {
        console.log("Function clickSubmit() from LoginPage SubClass");
    };
    return LoginPage;
}(OverridingBasePage_1.BasePage));
// const basePage = new BasePage();
// basePage.performCommonTasks();
var loginPage = new LoginPage();
loginPage.performCommonTasks();
