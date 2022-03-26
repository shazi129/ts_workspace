"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const $NPCMsg = __importStar(require("./NPCMsg"));
const long_1 = __importDefault(require("../external/long"));
var npcMsg = new $NPCMsg.NPCClient.NPCMsg();
npcMsg.iMsgID = $NPCMsg.NPCClient.E_SVR_MSG_ID.E_SVR_MSG_ID_HELLO;
var helloReq = new $NPCMsg.NPCClient.THelloReq();
helloReq.iClientTime = Date.parse(new Date().toString());
npcMsg.vecMsgBody = $NPCMsg.NPCClient.THelloReq.encode(helloReq).finish();
var encode_buffer = $NPCMsg.NPCClient.NPCMsg.encode(npcMsg).finish();
var msg = $NPCMsg.NPCClient.NPCMsg.decode(encode_buffer);
console.log("recv msg id:" + msg.iMsgID);
var s = "我的";
console.log(s.length.toString());
console.log(new long_1.default(12).toBytes());
