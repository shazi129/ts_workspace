import Long from "../external/long";

var finalData = new Uint8Array(4);

finalData.set(new Long(8).toBytes().slice(4));

console.log(finalData.toString())


