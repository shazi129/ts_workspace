"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TS_SubExtension = exports.TS_BaseExtension = exports.TS_UserWidgetExtension = void 0;
exports.BindWidget = BindWidget;
exports.TestDecorator = TestDecorator;
class TS_UserWidgetExtension {
    ToString() {
        var _a;
        console.log(`${this.constructor.name} bind num: ${(_a = this.BindList) === null || _a === void 0 ? void 0 : _a.length}`);
    }
}
exports.TS_UserWidgetExtension = TS_UserWidgetExtension;
function BindWidget(WidgetName, ExtensionName = "") {
    return (target, propKey) => {
        if (target instanceof TS_UserWidgetExtension) {
            var bindInfo = { WidgetName: WidgetName, ExtensionName: ExtensionName, PropertyKey: propKey };
            if (target.BindList == null) {
                target.BindList = new Array();
            }
            target.BindList.push(bindInfo);
        }
    };
}
class TS_BaseExtension extends TS_UserWidgetExtension {
}
exports.TS_BaseExtension = TS_BaseExtension;
__decorate([
    BindWidget("Base1"),
    __metadata("design:type", Object)
], TS_BaseExtension.prototype, "Base1", void 0);
class TS_SubExtension extends TS_BaseExtension {
}
exports.TS_SubExtension = TS_SubExtension;
__decorate([
    BindWidget("Sub1"),
    __metadata("design:type", Object)
], TS_SubExtension.prototype, "Sub1", void 0);
__decorate([
    BindWidget("Sub2"),
    __metadata("design:type", Object)
], TS_SubExtension.prototype, "Sub2", void 0);
function TestDecorator() {
    let Base = new TS_BaseExtension();
    let Sub = new TS_SubExtension();
    Base.ToString();
    Sub.ToString();
}
//# sourceMappingURL=ClassDecorator.js.map