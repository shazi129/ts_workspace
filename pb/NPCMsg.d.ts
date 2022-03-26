import * as $protobuf from "protobufjs";
/** Namespace NPCClient. */
export namespace NPCClient {

    /** E_SVR_MSG_ID enum. */
    enum E_SVR_MSG_ID {
        E_SVR_MSG_ID_NONE = 0,
        E_SVR_MSG_ID_HELLO = 1
    }

    /** Properties of a NPCMsg. */
    interface INPCMsg {

        /** NPCMsg iMsgID */
        iMsgID?: (number|null);

        /** NPCMsg vecMsgBody */
        vecMsgBody?: (Uint8Array|null);
    }

    /** Represents a NPCMsg. */
    class NPCMsg implements INPCMsg {

        /**
         * Constructs a new NPCMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: NPCClient.INPCMsg);

        /** NPCMsg iMsgID. */
        public iMsgID: number;

        /** NPCMsg vecMsgBody. */
        public vecMsgBody: Uint8Array;

        /**
         * Creates a new NPCMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NPCMsg instance
         */
        public static create(properties?: NPCClient.INPCMsg): NPCClient.NPCMsg;

        /**
         * Encodes the specified NPCMsg message. Does not implicitly {@link NPCClient.NPCMsg.verify|verify} messages.
         * @param message NPCMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NPCClient.INPCMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NPCMsg message, length delimited. Does not implicitly {@link NPCClient.NPCMsg.verify|verify} messages.
         * @param message NPCMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NPCClient.INPCMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NPCMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NPCClient.NPCMsg;

        /**
         * Decodes a NPCMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NPCClient.NPCMsg;

        /**
         * Verifies a NPCMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NPCMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NPCMsg
         */
        public static fromObject(object: { [k: string]: any }): NPCClient.NPCMsg;

        /**
         * Creates a plain object from a NPCMsg message. Also converts values to other types if specified.
         * @param message NPCMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NPCClient.NPCMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NPCMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a THelloReq. */
    interface ITHelloReq {

        /** THelloReq iClientTime */
        iClientTime?: (number|Long|null);
    }

    /** Represents a THelloReq. */
    class THelloReq implements ITHelloReq {

        /**
         * Constructs a new THelloReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: NPCClient.ITHelloReq);

        /** THelloReq iClientTime. */
        public iClientTime: (number|Long);

        /**
         * Creates a new THelloReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns THelloReq instance
         */
        public static create(properties?: NPCClient.ITHelloReq): NPCClient.THelloReq;

        /**
         * Encodes the specified THelloReq message. Does not implicitly {@link NPCClient.THelloReq.verify|verify} messages.
         * @param message THelloReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NPCClient.ITHelloReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified THelloReq message, length delimited. Does not implicitly {@link NPCClient.THelloReq.verify|verify} messages.
         * @param message THelloReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NPCClient.ITHelloReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a THelloReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns THelloReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NPCClient.THelloReq;

        /**
         * Decodes a THelloReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns THelloReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NPCClient.THelloReq;

        /**
         * Verifies a THelloReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a THelloReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns THelloReq
         */
        public static fromObject(object: { [k: string]: any }): NPCClient.THelloReq;

        /**
         * Creates a plain object from a THelloReq message. Also converts values to other types if specified.
         * @param message THelloReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NPCClient.THelloReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this THelloReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a THelloRsp. */
    interface ITHelloRsp {

        /** THelloRsp iRet */
        iRet?: (number|null);

        /** THelloRsp iClientTime */
        iClientTime?: (number|Long|null);

        /** THelloRsp iServerTime */
        iServerTime?: (number|Long|null);
    }

    /** Represents a THelloRsp. */
    class THelloRsp implements ITHelloRsp {

        /**
         * Constructs a new THelloRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: NPCClient.ITHelloRsp);

        /** THelloRsp iRet. */
        public iRet: number;

        /** THelloRsp iClientTime. */
        public iClientTime: (number|Long);

        /** THelloRsp iServerTime. */
        public iServerTime: (number|Long);

        /**
         * Creates a new THelloRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns THelloRsp instance
         */
        public static create(properties?: NPCClient.ITHelloRsp): NPCClient.THelloRsp;

        /**
         * Encodes the specified THelloRsp message. Does not implicitly {@link NPCClient.THelloRsp.verify|verify} messages.
         * @param message THelloRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NPCClient.ITHelloRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified THelloRsp message, length delimited. Does not implicitly {@link NPCClient.THelloRsp.verify|verify} messages.
         * @param message THelloRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NPCClient.ITHelloRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a THelloRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns THelloRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NPCClient.THelloRsp;

        /**
         * Decodes a THelloRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns THelloRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NPCClient.THelloRsp;

        /**
         * Verifies a THelloRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a THelloRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns THelloRsp
         */
        public static fromObject(object: { [k: string]: any }): NPCClient.THelloRsp;

        /**
         * Creates a plain object from a THelloRsp message. Also converts values to other types if specified.
         * @param message THelloRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NPCClient.THelloRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this THelloRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
