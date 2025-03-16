"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const long_1 = __importDefault(require("../external/long"));
var finalData = new Uint8Array(4);
finalData.set(new long_1.default(8).toBytes().slice(4));
console.log(finalData.toString());
//# sourceMappingURL=TestBytes.js.map