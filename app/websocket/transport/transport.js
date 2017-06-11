/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const transport = $root.transport = (() => {

    /**
     * Namespace transport.
     * @exports transport
     * @namespace
     */
    const transport = {};

    transport.DMXCommand = (function() {

        /**
         * Properties of a DMXCommand.
         * @typedef transport.DMXCommand$Properties
         * @type {Object}
         * @property {number} [universe] DMXCommand universe.
         * @property {number} [channel] DMXCommand channel.
         * @property {number} [value] DMXCommand value.
         */

        /**
         * Constructs a new DMXCommand.
         * @exports transport.DMXCommand
         * @constructor
         * @param {transport.DMXCommand$Properties=} [properties] Properties to set
         */
        function DMXCommand(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DMXCommand universe.
         * @type {number}
         */
        DMXCommand.prototype.universe = 0;

        /**
         * DMXCommand channel.
         * @type {number}
         */
        DMXCommand.prototype.channel = 0;

        /**
         * DMXCommand value.
         * @type {number}
         */
        DMXCommand.prototype.value = 0;

        /**
         * Decodes a DMXCommand message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transport.DMXCommand} DMXCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DMXCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transport.DMXCommand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.universe = reader.uint32();
                    break;
                case 2:
                    message.channel = reader.uint32();
                    break;
                case 3:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DMXCommand message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transport.DMXCommand} DMXCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DMXCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a DMXCommand message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {transport.DMXCommand} DMXCommand
         */
        DMXCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.transport.DMXCommand)
                return object;
            let message = new $root.transport.DMXCommand();
            if (object.universe != null)
                message.universe = object.universe >>> 0;
            if (object.channel != null)
                message.channel = object.channel >>> 0;
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a DMXCommand message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link transport.DMXCommand.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {transport.DMXCommand} DMXCommand
         */
        DMXCommand.from = DMXCommand.fromObject;

        /**
         * Creates a plain object from a DMXCommand message. Also converts values to other types if specified.
         * @param {transport.DMXCommand} message DMXCommand
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DMXCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.universe = 0;
                object.channel = 0;
                object.value = 0;
            }
            if (message.universe != null && message.hasOwnProperty("universe"))
                object.universe = message.universe;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Creates a plain object from this DMXCommand message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DMXCommand.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this DMXCommand to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        DMXCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DMXCommand;
    })();

    transport.MIDICommand = (function() {

        /**
         * Properties of a MIDICommand.
         * @typedef transport.MIDICommand$Properties
         * @type {Object}
         * @property {number} [channel] MIDICommand channel.
         * @property {number} [value] MIDICommand value.
         */

        /**
         * Constructs a new MIDICommand.
         * @exports transport.MIDICommand
         * @constructor
         * @param {transport.MIDICommand$Properties=} [properties] Properties to set
         */
        function MIDICommand(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MIDICommand channel.
         * @type {number}
         */
        MIDICommand.prototype.channel = 0;

        /**
         * MIDICommand value.
         * @type {number}
         */
        MIDICommand.prototype.value = 0;

        /**
         * Decodes a MIDICommand message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transport.MIDICommand} MIDICommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MIDICommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transport.MIDICommand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channel = reader.uint32();
                    break;
                case 2:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MIDICommand message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transport.MIDICommand} MIDICommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MIDICommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a MIDICommand message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {transport.MIDICommand} MIDICommand
         */
        MIDICommand.fromObject = function fromObject(object) {
            if (object instanceof $root.transport.MIDICommand)
                return object;
            let message = new $root.transport.MIDICommand();
            if (object.channel != null)
                message.channel = object.channel >>> 0;
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a MIDICommand message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link transport.MIDICommand.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {transport.MIDICommand} MIDICommand
         */
        MIDICommand.from = MIDICommand.fromObject;

        /**
         * Creates a plain object from a MIDICommand message. Also converts values to other types if specified.
         * @param {transport.MIDICommand} message MIDICommand
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MIDICommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channel = 0;
                object.value = 0;
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Creates a plain object from this MIDICommand message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MIDICommand.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this MIDICommand to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        MIDICommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MIDICommand;
    })();

    transport.BarChange = (function() {

        /**
         * Properties of a BarChange.
         * @typedef transport.BarChange$Properties
         * @type {Object}
         * @property {number|Long} [at] BarChange at.
         * @property {number} [noteValue] BarChange noteValue.
         * @property {number} [noteCount] BarChange noteCount.
         * @property {number} [speed] BarChange speed.
         */

        /**
         * Constructs a new BarChange.
         * @exports transport.BarChange
         * @constructor
         * @param {transport.BarChange$Properties=} [properties] Properties to set
         */
        function BarChange(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BarChange at.
         * @type {number|Long}
         */
        BarChange.prototype.at = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BarChange noteValue.
         * @type {number}
         */
        BarChange.prototype.noteValue = 0;

        /**
         * BarChange noteCount.
         * @type {number}
         */
        BarChange.prototype.noteCount = 0;

        /**
         * BarChange speed.
         * @type {number}
         */
        BarChange.prototype.speed = 0;

        /**
         * Decodes a BarChange message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transport.BarChange} BarChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transport.BarChange();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.at = reader.uint64();
                    break;
                case 2:
                    message.noteValue = reader.uint32();
                    break;
                case 3:
                    message.noteCount = reader.uint32();
                    break;
                case 4:
                    message.speed = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BarChange message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transport.BarChange} BarChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a BarChange message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {transport.BarChange} BarChange
         */
        BarChange.fromObject = function fromObject(object) {
            if (object instanceof $root.transport.BarChange)
                return object;
            let message = new $root.transport.BarChange();
            if (object.at != null)
                if ($util.Long)
                    (message.at = $util.Long.fromValue(object.at)).unsigned = true;
                else if (typeof object.at === "string")
                    message.at = parseInt(object.at, 10);
                else if (typeof object.at === "number")
                    message.at = object.at;
                else if (typeof object.at === "object")
                    message.at = new $util.LongBits(object.at.low >>> 0, object.at.high >>> 0).toNumber(true);
            if (object.noteValue != null)
                message.noteValue = object.noteValue >>> 0;
            if (object.noteCount != null)
                message.noteCount = object.noteCount >>> 0;
            if (object.speed != null)
                message.speed = object.speed >>> 0;
            return message;
        };

        /**
         * Creates a BarChange message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link transport.BarChange.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {transport.BarChange} BarChange
         */
        BarChange.from = BarChange.fromObject;

        /**
         * Creates a plain object from a BarChange message. Also converts values to other types if specified.
         * @param {transport.BarChange} message BarChange
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BarChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.at = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.at = options.longs === String ? "0" : 0;
                object.noteValue = 0;
                object.noteCount = 0;
                object.speed = 0;
            }
            if (message.at != null && message.hasOwnProperty("at"))
                if (typeof message.at === "number")
                    object.at = options.longs === String ? String(message.at) : message.at;
                else
                    object.at = options.longs === String ? $util.Long.prototype.toString.call(message.at) : options.longs === Number ? new $util.LongBits(message.at.low >>> 0, message.at.high >>> 0).toNumber(true) : message.at;
            if (message.noteValue != null && message.hasOwnProperty("noteValue"))
                object.noteValue = message.noteValue;
            if (message.noteCount != null && message.hasOwnProperty("noteCount"))
                object.noteCount = message.noteCount;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = message.speed;
            return object;
        };

        /**
         * Creates a plain object from this BarChange message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BarChange.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this BarChange to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        BarChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BarChange;
    })();

    transport.Command = (function() {

        /**
         * Properties of a Command.
         * @typedef transport.Command$Properties
         * @type {Object}
         * @property {Array.<transport.DMXCommand$Properties>} [dmxCommands] Command dmxCommands.
         * @property {Array.<transport.MIDICommand$Properties>} [midiCommands] Command midiCommands.
         * @property {transport.BarChange$Properties} [barChange] Command barChange.
         * @property {number|Long} [frame] Command frame.
         */

        /**
         * Constructs a new Command.
         * @exports transport.Command
         * @constructor
         * @param {transport.Command$Properties=} [properties] Properties to set
         */
        function Command(properties) {
            this.dmxCommands = [];
            this.midiCommands = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Command dmxCommands.
         * @type {Array.<transport.DMXCommand$Properties>}
         */
        Command.prototype.dmxCommands = $util.emptyArray;

        /**
         * Command midiCommands.
         * @type {Array.<transport.MIDICommand$Properties>}
         */
        Command.prototype.midiCommands = $util.emptyArray;

        /**
         * Command barChange.
         * @type {(transport.BarChange$Properties|null)}
         */
        Command.prototype.barChange = null;

        /**
         * Command frame.
         * @type {number|Long}
         */
        Command.prototype.frame = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transport.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transport.Command();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.dmxCommands && message.dmxCommands.length))
                        message.dmxCommands = [];
                    message.dmxCommands.push($root.transport.DMXCommand.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.midiCommands && message.midiCommands.length))
                        message.midiCommands = [];
                    message.midiCommands.push($root.transport.MIDICommand.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.barChange = $root.transport.BarChange.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.frame = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transport.Command} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {transport.Command} Command
         */
        Command.fromObject = function fromObject(object) {
            if (object instanceof $root.transport.Command)
                return object;
            let message = new $root.transport.Command();
            if (object.dmxCommands) {
                if (!Array.isArray(object.dmxCommands))
                    throw TypeError(".transport.Command.dmxCommands: array expected");
                message.dmxCommands = [];
                for (let i = 0; i < object.dmxCommands.length; ++i) {
                    if (typeof object.dmxCommands[i] !== "object")
                        throw TypeError(".transport.Command.dmxCommands: object expected");
                    message.dmxCommands[i] = $root.transport.DMXCommand.fromObject(object.dmxCommands[i]);
                }
            }
            if (object.midiCommands) {
                if (!Array.isArray(object.midiCommands))
                    throw TypeError(".transport.Command.midiCommands: array expected");
                message.midiCommands = [];
                for (let i = 0; i < object.midiCommands.length; ++i) {
                    if (typeof object.midiCommands[i] !== "object")
                        throw TypeError(".transport.Command.midiCommands: object expected");
                    message.midiCommands[i] = $root.transport.MIDICommand.fromObject(object.midiCommands[i]);
                }
            }
            if (object.barChange != null) {
                if (typeof object.barChange !== "object")
                    throw TypeError(".transport.Command.barChange: object expected");
                message.barChange = $root.transport.BarChange.fromObject(object.barChange);
            }
            if (object.frame != null)
                if ($util.Long)
                    (message.frame = $util.Long.fromValue(object.frame)).unsigned = true;
                else if (typeof object.frame === "string")
                    message.frame = parseInt(object.frame, 10);
                else if (typeof object.frame === "number")
                    message.frame = object.frame;
                else if (typeof object.frame === "object")
                    message.frame = new $util.LongBits(object.frame.low >>> 0, object.frame.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link transport.Command.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {transport.Command} Command
         */
        Command.from = Command.fromObject;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param {transport.Command} message Command
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Command.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.dmxCommands = [];
                object.midiCommands = [];
            }
            if (options.defaults) {
                object.barChange = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.frame = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.frame = options.longs === String ? "0" : 0;
            }
            if (message.dmxCommands && message.dmxCommands.length) {
                object.dmxCommands = [];
                for (let j = 0; j < message.dmxCommands.length; ++j)
                    object.dmxCommands[j] = $root.transport.DMXCommand.toObject(message.dmxCommands[j], options);
            }
            if (message.midiCommands && message.midiCommands.length) {
                object.midiCommands = [];
                for (let j = 0; j < message.midiCommands.length; ++j)
                    object.midiCommands[j] = $root.transport.MIDICommand.toObject(message.midiCommands[j], options);
            }
            if (message.barChange != null && message.hasOwnProperty("barChange"))
                object.barChange = $root.transport.BarChange.toObject(message.barChange, options);
            if (message.frame != null && message.hasOwnProperty("frame"))
                if (typeof message.frame === "number")
                    object.frame = options.longs === String ? String(message.frame) : message.frame;
                else
                    object.frame = options.longs === String ? $util.Long.prototype.toString.call(message.frame) : options.longs === Number ? new $util.LongBits(message.frame.low >>> 0, message.frame.high >>> 0).toNumber(true) : message.frame;
            return object;
        };

        /**
         * Creates a plain object from this Command message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Command.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Command to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Command.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Command;
    })();

    return transport;
})();

export { $root as default };
