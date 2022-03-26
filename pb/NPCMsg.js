/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.NPCClient = (function() {

    /**
     * Namespace NPCClient.
     * @exports NPCClient
     * @namespace
     */
    var NPCClient = {};

    /**
     * E_SVR_MSG_ID enum.
     * @name NPCClient.E_SVR_MSG_ID
     * @enum {number}
     * @property {number} E_SVR_MSG_ID_NONE=0 E_SVR_MSG_ID_NONE value
     * @property {number} E_SVR_MSG_ID_HELLO=1 E_SVR_MSG_ID_HELLO value
     */
    NPCClient.E_SVR_MSG_ID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "E_SVR_MSG_ID_NONE"] = 0;
        values[valuesById[1] = "E_SVR_MSG_ID_HELLO"] = 1;
        return values;
    })();

    NPCClient.NPCMsg = (function() {

        /**
         * Properties of a NPCMsg.
         * @memberof NPCClient
         * @interface INPCMsg
         * @property {number|null} [iMsgID] NPCMsg iMsgID
         * @property {Uint8Array|null} [vecMsgBody] NPCMsg vecMsgBody
         */

        /**
         * Constructs a new NPCMsg.
         * @memberof NPCClient
         * @classdesc Represents a NPCMsg.
         * @implements INPCMsg
         * @constructor
         * @param {NPCClient.INPCMsg=} [properties] Properties to set
         */
        function NPCMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NPCMsg iMsgID.
         * @member {number} iMsgID
         * @memberof NPCClient.NPCMsg
         * @instance
         */
        NPCMsg.prototype.iMsgID = 0;

        /**
         * NPCMsg vecMsgBody.
         * @member {Uint8Array} vecMsgBody
         * @memberof NPCClient.NPCMsg
         * @instance
         */
        NPCMsg.prototype.vecMsgBody = $util.newBuffer([]);

        /**
         * Creates a new NPCMsg instance using the specified properties.
         * @function create
         * @memberof NPCClient.NPCMsg
         * @static
         * @param {NPCClient.INPCMsg=} [properties] Properties to set
         * @returns {NPCClient.NPCMsg} NPCMsg instance
         */
        NPCMsg.create = function create(properties) {
            return new NPCMsg(properties);
        };

        /**
         * Encodes the specified NPCMsg message. Does not implicitly {@link NPCClient.NPCMsg.verify|verify} messages.
         * @function encode
         * @memberof NPCClient.NPCMsg
         * @static
         * @param {NPCClient.INPCMsg} message NPCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NPCMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.iMsgID != null && Object.hasOwnProperty.call(message, "iMsgID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.iMsgID);
            if (message.vecMsgBody != null && Object.hasOwnProperty.call(message, "vecMsgBody"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.vecMsgBody);
            return writer;
        };

        /**
         * Encodes the specified NPCMsg message, length delimited. Does not implicitly {@link NPCClient.NPCMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NPCClient.NPCMsg
         * @static
         * @param {NPCClient.INPCMsg} message NPCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NPCMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NPCMsg message from the specified reader or buffer.
         * @function decode
         * @memberof NPCClient.NPCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NPCClient.NPCMsg} NPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NPCMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NPCClient.NPCMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iMsgID = reader.int32();
                    break;
                case 2:
                    message.vecMsgBody = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NPCMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NPCClient.NPCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NPCClient.NPCMsg} NPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NPCMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NPCMsg message.
         * @function verify
         * @memberof NPCClient.NPCMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NPCMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.iMsgID != null && message.hasOwnProperty("iMsgID"))
                if (!$util.isInteger(message.iMsgID))
                    return "iMsgID: integer expected";
            if (message.vecMsgBody != null && message.hasOwnProperty("vecMsgBody"))
                if (!(message.vecMsgBody && typeof message.vecMsgBody.length === "number" || $util.isString(message.vecMsgBody)))
                    return "vecMsgBody: buffer expected";
            return null;
        };

        /**
         * Creates a NPCMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NPCClient.NPCMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NPCClient.NPCMsg} NPCMsg
         */
        NPCMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.NPCClient.NPCMsg)
                return object;
            var message = new $root.NPCClient.NPCMsg();
            if (object.iMsgID != null)
                message.iMsgID = object.iMsgID | 0;
            if (object.vecMsgBody != null)
                if (typeof object.vecMsgBody === "string")
                    $util.base64.decode(object.vecMsgBody, message.vecMsgBody = $util.newBuffer($util.base64.length(object.vecMsgBody)), 0);
                else if (object.vecMsgBody.length)
                    message.vecMsgBody = object.vecMsgBody;
            return message;
        };

        /**
         * Creates a plain object from a NPCMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NPCClient.NPCMsg
         * @static
         * @param {NPCClient.NPCMsg} message NPCMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NPCMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.iMsgID = 0;
                if (options.bytes === String)
                    object.vecMsgBody = "";
                else {
                    object.vecMsgBody = [];
                    if (options.bytes !== Array)
                        object.vecMsgBody = $util.newBuffer(object.vecMsgBody);
                }
            }
            if (message.iMsgID != null && message.hasOwnProperty("iMsgID"))
                object.iMsgID = message.iMsgID;
            if (message.vecMsgBody != null && message.hasOwnProperty("vecMsgBody"))
                object.vecMsgBody = options.bytes === String ? $util.base64.encode(message.vecMsgBody, 0, message.vecMsgBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.vecMsgBody) : message.vecMsgBody;
            return object;
        };

        /**
         * Converts this NPCMsg to JSON.
         * @function toJSON
         * @memberof NPCClient.NPCMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NPCMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NPCMsg;
    })();

    NPCClient.THelloReq = (function() {

        /**
         * Properties of a THelloReq.
         * @memberof NPCClient
         * @interface ITHelloReq
         * @property {number|Long|null} [iClientTime] THelloReq iClientTime
         */

        /**
         * Constructs a new THelloReq.
         * @memberof NPCClient
         * @classdesc Represents a THelloReq.
         * @implements ITHelloReq
         * @constructor
         * @param {NPCClient.ITHelloReq=} [properties] Properties to set
         */
        function THelloReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * THelloReq iClientTime.
         * @member {number|Long} iClientTime
         * @memberof NPCClient.THelloReq
         * @instance
         */
        THelloReq.prototype.iClientTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new THelloReq instance using the specified properties.
         * @function create
         * @memberof NPCClient.THelloReq
         * @static
         * @param {NPCClient.ITHelloReq=} [properties] Properties to set
         * @returns {NPCClient.THelloReq} THelloReq instance
         */
        THelloReq.create = function create(properties) {
            return new THelloReq(properties);
        };

        /**
         * Encodes the specified THelloReq message. Does not implicitly {@link NPCClient.THelloReq.verify|verify} messages.
         * @function encode
         * @memberof NPCClient.THelloReq
         * @static
         * @param {NPCClient.ITHelloReq} message THelloReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        THelloReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.iClientTime != null && Object.hasOwnProperty.call(message, "iClientTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.iClientTime);
            return writer;
        };

        /**
         * Encodes the specified THelloReq message, length delimited. Does not implicitly {@link NPCClient.THelloReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NPCClient.THelloReq
         * @static
         * @param {NPCClient.ITHelloReq} message THelloReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        THelloReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a THelloReq message from the specified reader or buffer.
         * @function decode
         * @memberof NPCClient.THelloReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NPCClient.THelloReq} THelloReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        THelloReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NPCClient.THelloReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iClientTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a THelloReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NPCClient.THelloReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NPCClient.THelloReq} THelloReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        THelloReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a THelloReq message.
         * @function verify
         * @memberof NPCClient.THelloReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        THelloReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.iClientTime != null && message.hasOwnProperty("iClientTime"))
                if (!$util.isInteger(message.iClientTime) && !(message.iClientTime && $util.isInteger(message.iClientTime.low) && $util.isInteger(message.iClientTime.high)))
                    return "iClientTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a THelloReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NPCClient.THelloReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NPCClient.THelloReq} THelloReq
         */
        THelloReq.fromObject = function fromObject(object) {
            if (object instanceof $root.NPCClient.THelloReq)
                return object;
            var message = new $root.NPCClient.THelloReq();
            if (object.iClientTime != null)
                if ($util.Long)
                    (message.iClientTime = $util.Long.fromValue(object.iClientTime)).unsigned = false;
                else if (typeof object.iClientTime === "string")
                    message.iClientTime = parseInt(object.iClientTime, 10);
                else if (typeof object.iClientTime === "number")
                    message.iClientTime = object.iClientTime;
                else if (typeof object.iClientTime === "object")
                    message.iClientTime = new $util.LongBits(object.iClientTime.low >>> 0, object.iClientTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a THelloReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NPCClient.THelloReq
         * @static
         * @param {NPCClient.THelloReq} message THelloReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        THelloReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.iClientTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.iClientTime = options.longs === String ? "0" : 0;
            if (message.iClientTime != null && message.hasOwnProperty("iClientTime"))
                if (typeof message.iClientTime === "number")
                    object.iClientTime = options.longs === String ? String(message.iClientTime) : message.iClientTime;
                else
                    object.iClientTime = options.longs === String ? $util.Long.prototype.toString.call(message.iClientTime) : options.longs === Number ? new $util.LongBits(message.iClientTime.low >>> 0, message.iClientTime.high >>> 0).toNumber() : message.iClientTime;
            return object;
        };

        /**
         * Converts this THelloReq to JSON.
         * @function toJSON
         * @memberof NPCClient.THelloReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        THelloReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return THelloReq;
    })();

    NPCClient.THelloRsp = (function() {

        /**
         * Properties of a THelloRsp.
         * @memberof NPCClient
         * @interface ITHelloRsp
         * @property {number|null} [iRet] THelloRsp iRet
         * @property {number|Long|null} [iClientTime] THelloRsp iClientTime
         * @property {number|Long|null} [iServerTime] THelloRsp iServerTime
         */

        /**
         * Constructs a new THelloRsp.
         * @memberof NPCClient
         * @classdesc Represents a THelloRsp.
         * @implements ITHelloRsp
         * @constructor
         * @param {NPCClient.ITHelloRsp=} [properties] Properties to set
         */
        function THelloRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * THelloRsp iRet.
         * @member {number} iRet
         * @memberof NPCClient.THelloRsp
         * @instance
         */
        THelloRsp.prototype.iRet = 0;

        /**
         * THelloRsp iClientTime.
         * @member {number|Long} iClientTime
         * @memberof NPCClient.THelloRsp
         * @instance
         */
        THelloRsp.prototype.iClientTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * THelloRsp iServerTime.
         * @member {number|Long} iServerTime
         * @memberof NPCClient.THelloRsp
         * @instance
         */
        THelloRsp.prototype.iServerTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new THelloRsp instance using the specified properties.
         * @function create
         * @memberof NPCClient.THelloRsp
         * @static
         * @param {NPCClient.ITHelloRsp=} [properties] Properties to set
         * @returns {NPCClient.THelloRsp} THelloRsp instance
         */
        THelloRsp.create = function create(properties) {
            return new THelloRsp(properties);
        };

        /**
         * Encodes the specified THelloRsp message. Does not implicitly {@link NPCClient.THelloRsp.verify|verify} messages.
         * @function encode
         * @memberof NPCClient.THelloRsp
         * @static
         * @param {NPCClient.ITHelloRsp} message THelloRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        THelloRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.iRet != null && Object.hasOwnProperty.call(message, "iRet"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.iRet);
            if (message.iClientTime != null && Object.hasOwnProperty.call(message, "iClientTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.iClientTime);
            if (message.iServerTime != null && Object.hasOwnProperty.call(message, "iServerTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.iServerTime);
            return writer;
        };

        /**
         * Encodes the specified THelloRsp message, length delimited. Does not implicitly {@link NPCClient.THelloRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NPCClient.THelloRsp
         * @static
         * @param {NPCClient.ITHelloRsp} message THelloRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        THelloRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a THelloRsp message from the specified reader or buffer.
         * @function decode
         * @memberof NPCClient.THelloRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NPCClient.THelloRsp} THelloRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        THelloRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NPCClient.THelloRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.iRet = reader.int32();
                    break;
                case 2:
                    message.iClientTime = reader.int64();
                    break;
                case 3:
                    message.iServerTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a THelloRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NPCClient.THelloRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NPCClient.THelloRsp} THelloRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        THelloRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a THelloRsp message.
         * @function verify
         * @memberof NPCClient.THelloRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        THelloRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.iRet != null && message.hasOwnProperty("iRet"))
                if (!$util.isInteger(message.iRet))
                    return "iRet: integer expected";
            if (message.iClientTime != null && message.hasOwnProperty("iClientTime"))
                if (!$util.isInteger(message.iClientTime) && !(message.iClientTime && $util.isInteger(message.iClientTime.low) && $util.isInteger(message.iClientTime.high)))
                    return "iClientTime: integer|Long expected";
            if (message.iServerTime != null && message.hasOwnProperty("iServerTime"))
                if (!$util.isInteger(message.iServerTime) && !(message.iServerTime && $util.isInteger(message.iServerTime.low) && $util.isInteger(message.iServerTime.high)))
                    return "iServerTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a THelloRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NPCClient.THelloRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NPCClient.THelloRsp} THelloRsp
         */
        THelloRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.NPCClient.THelloRsp)
                return object;
            var message = new $root.NPCClient.THelloRsp();
            if (object.iRet != null)
                message.iRet = object.iRet | 0;
            if (object.iClientTime != null)
                if ($util.Long)
                    (message.iClientTime = $util.Long.fromValue(object.iClientTime)).unsigned = false;
                else if (typeof object.iClientTime === "string")
                    message.iClientTime = parseInt(object.iClientTime, 10);
                else if (typeof object.iClientTime === "number")
                    message.iClientTime = object.iClientTime;
                else if (typeof object.iClientTime === "object")
                    message.iClientTime = new $util.LongBits(object.iClientTime.low >>> 0, object.iClientTime.high >>> 0).toNumber();
            if (object.iServerTime != null)
                if ($util.Long)
                    (message.iServerTime = $util.Long.fromValue(object.iServerTime)).unsigned = false;
                else if (typeof object.iServerTime === "string")
                    message.iServerTime = parseInt(object.iServerTime, 10);
                else if (typeof object.iServerTime === "number")
                    message.iServerTime = object.iServerTime;
                else if (typeof object.iServerTime === "object")
                    message.iServerTime = new $util.LongBits(object.iServerTime.low >>> 0, object.iServerTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a THelloRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NPCClient.THelloRsp
         * @static
         * @param {NPCClient.THelloRsp} message THelloRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        THelloRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.iRet = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.iClientTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.iClientTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.iServerTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.iServerTime = options.longs === String ? "0" : 0;
            }
            if (message.iRet != null && message.hasOwnProperty("iRet"))
                object.iRet = message.iRet;
            if (message.iClientTime != null && message.hasOwnProperty("iClientTime"))
                if (typeof message.iClientTime === "number")
                    object.iClientTime = options.longs === String ? String(message.iClientTime) : message.iClientTime;
                else
                    object.iClientTime = options.longs === String ? $util.Long.prototype.toString.call(message.iClientTime) : options.longs === Number ? new $util.LongBits(message.iClientTime.low >>> 0, message.iClientTime.high >>> 0).toNumber() : message.iClientTime;
            if (message.iServerTime != null && message.hasOwnProperty("iServerTime"))
                if (typeof message.iServerTime === "number")
                    object.iServerTime = options.longs === String ? String(message.iServerTime) : message.iServerTime;
                else
                    object.iServerTime = options.longs === String ? $util.Long.prototype.toString.call(message.iServerTime) : options.longs === Number ? new $util.LongBits(message.iServerTime.low >>> 0, message.iServerTime.high >>> 0).toNumber() : message.iServerTime;
            return object;
        };

        /**
         * Converts this THelloRsp to JSON.
         * @function toJSON
         * @memberof NPCClient.THelloRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        THelloRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return THelloRsp;
    })();

    return NPCClient;
})();

module.exports = $root;
