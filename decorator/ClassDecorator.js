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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TS_SubExtension = exports.TS_BaseExtension = exports.BindWidget = exports.TS_UserWidgetExtension = void 0;
var TS_UserWidgetExtension = /** @class */ (function () {
    function TS_UserWidgetExtension() {
        this.BindList = new Array();
    }
    TS_UserWidgetExtension.prototype.ToString = function () {
        console.log("".concat(this.constructor.name, " bind num: ").concat(this.BindList.length));
    };
    return TS_UserWidgetExtension;
}());
exports.TS_UserWidgetExtension = TS_UserWidgetExtension;
function BindWidget(WidgetName, ExtensionName) {
    if (ExtensionName === void 0) { ExtensionName = ""; }
    return function (target, propKey) {
        if (target instanceof TS_UserWidgetExtension) {
            var bindInfo = { WidgetName: WidgetName, ExtensionName: ExtensionName, PropertyKey: propKey };
            if (target.BindList == null) {
                target.BindList = new Array();
            }
            target.BindList.push(bindInfo);
            //target.AddBind(bindInfo);
        }
    };
}
exports.BindWidget = BindWidget;
var TS_BaseExtension = /** @class */ (function (_super) {
    __extends(TS_BaseExtension, _super);
    function TS_BaseExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        BindWidget("Base1")
    ], TS_BaseExtension.prototype, "Base1");
    return TS_BaseExtension;
}(TS_UserWidgetExtension));
exports.TS_BaseExtension = TS_BaseExtension;
var TS_SubExtension = /** @class */ (function (_super) {
    __extends(TS_SubExtension, _super);
    function TS_SubExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        BindWidget("Sub1")
    ], TS_SubExtension.prototype, "Sub1");
    __decorate([
        BindWidget("Sub2")
    ], TS_SubExtension.prototype, "Sub2");
    return TS_SubExtension;
}(TS_BaseExtension));
exports.TS_SubExtension = TS_SubExtension;
var Base = new TS_BaseExtension();
var Sub = new TS_SubExtension();
Base.ToString();
Sub.ToString();
