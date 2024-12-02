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
exports.WebComponent = void 0;
var WebComponent = /** @class */ (function () {
    function WebComponent(selector) {
        this.selector = selector;
    }
    WebComponent.prototype.click = function () {
        console.log("Function click() from WebComponent Class with selector as \"".concat(this.selector, "\""));
    };
    WebComponent.prototype.focus = function () {
        console.log("Function focus() from WebComponent Class with selector as \"".concat(this.selector, "\""));
    };
    return WebComponent;
}());
exports.WebComponent = WebComponent;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.click = function () {
        console.log("Function click() overridden from Button Class(extended class)");
    };
    return Button;
}(WebComponent));
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = "";
        return _this;
    }
    TextInput.prototype.enterText = function (text) {
        this.value = text;
        console.log("Value set for \"value\" parameter is ".concat(this.value));
    };
    return TextInput;
}(WebComponent));
function testComponents() {
    var buttonObj = new Button("text");
    var textObj = new TextInput("button");
    buttonObj.click();
    textObj.enterText("Mukta");
    var webCompObj = new WebComponent("text");
    webCompObj.click();
}
testComponents();
