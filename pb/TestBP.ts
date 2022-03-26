import * as $NPCMsg from "./NPCMsg";
import Long from "../external/long";

var npcMsg = new $NPCMsg.NPCClient.NPCMsg();
npcMsg.iMsgID = $NPCMsg.NPCClient.E_SVR_MSG_ID.E_SVR_MSG_ID_HELLO;

var helloReq = new $NPCMsg.NPCClient.THelloReq()
helloReq.iClientTime = Date.parse(new Date().toString())
npcMsg.vecMsgBody = $NPCMsg.NPCClient.THelloReq.encode(helloReq).finish();

var encode_buffer = $NPCMsg.NPCClient.NPCMsg.encode(npcMsg).finish();


var msg = $NPCMsg.NPCClient.NPCMsg.decode(encode_buffer);

console.log("recv msg id:" + msg.iMsgID)

var s:string = "我的"
console.log(s.length.toString())


console.log(new Long(12).toBytes())