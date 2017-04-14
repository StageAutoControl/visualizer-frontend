/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const dmx = $root.dmx = (() => {

    /**
     * Namespace dmx.
     * @exports dmx
     * @namespace
     */
    const dmx = {};

    dmx.DMXCommand = (function() {

        /**
         * Properties of a DMXCommand.
         * @typedef dmx.DMXCommand$Properties
         * @type {Object}
         * @property {number} [universe] DMXCommand universe.
         * @property {number} [channel] DMXCommand channel.
         * @property {number} [value] DMXCommand value.
         */

        /**
         * Constructs a new DMXCommand.
         * @exports dmx.DMXCommand
         * @constructor
         * @param {dmx.DMXCommand$Properties=} [properties] Properties to set
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
         * @returns {dmx.DMXCommand} DMXCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DMXCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dmx.DMXCommand();
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
         * @returns {dmx.DMXCommand} DMXCommand
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
         * @returns {dmx.DMXCommand} DMXCommand
         */
        DMXCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.dmx.DMXCommand)
                return object;
            let message = new $root.dmx.DMXCommand();
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
         * This is an alias of {@link dmx.DMXCommand.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {dmx.DMXCommand} DMXCommand
         */
        DMXCommand.from = DMXCommand.fromObject;

        /**
         * Creates a plain object from a DMXCommand message. Also converts values to other types if specified.
         * @param {dmx.DMXCommand} message DMXCommand
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

    dmx.DMXCommands = (function() {

        /**
         * Properties of a DMXCommands.
         * @typedef dmx.DMXCommands$Properties
         * @type {Object}
         * @property {Array.<dmx.DMXCommand$Properties>} [commands] DMXCommands commands.
         */

        /**
         * Constructs a new DMXCommands.
         * @exports dmx.DMXCommands
         * @constructor
         * @param {dmx.DMXCommands$Properties=} [properties] Properties to set
         */
        function DMXCommands(properties) {
            this.commands = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DMXCommands commands.
         * @type {Array.<dmx.DMXCommand$Properties>}
         */
        DMXCommands.prototype.commands = $util.emptyArray;

        /**
         * Decodes a DMXCommands message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dmx.DMXCommands} DMXCommands
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DMXCommands.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dmx.DMXCommands();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.commands && message.commands.length))
                        message.commands = [];
                    message.commands.push($root.dmx.DMXCommand.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DMXCommands message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dmx.DMXCommands} DMXCommands
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DMXCommands.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a DMXCommands message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {dmx.DMXCommands} DMXCommands
         */
        DMXCommands.fromObject = function fromObject(object) {
            if (object instanceof $root.dmx.DMXCommands)
                return object;
            let message = new $root.dmx.DMXCommands();
            if (object.commands) {
                if (!Array.isArray(object.commands))
                    throw TypeError(".dmx.DMXCommands.commands: array expected");
                message.commands = [];
                for (let i = 0; i < object.commands.length; ++i) {
                    if (typeof object.commands[i] !== "object")
                        throw TypeError(".dmx.DMXCommands.commands: object expected");
                    message.commands[i] = $root.dmx.DMXCommand.fromObject(object.commands[i]);
                }
            }
            return message;
        };

        /**
         * Creates a DMXCommands message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link dmx.DMXCommands.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {dmx.DMXCommands} DMXCommands
         */
        DMXCommands.from = DMXCommands.fromObject;

        /**
         * Creates a plain object from a DMXCommands message. Also converts values to other types if specified.
         * @param {dmx.DMXCommands} message DMXCommands
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DMXCommands.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.commands = [];
            if (message.commands && message.commands.length) {
                object.commands = [];
                for (let j = 0; j < message.commands.length; ++j)
                    object.commands[j] = $root.dmx.DMXCommand.toObject(message.commands[j], options);
            }
            return object;
        };

        /**
         * Creates a plain object from this DMXCommands message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DMXCommands.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this DMXCommands to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        DMXCommands.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DMXCommands;
    })();

    return dmx;
})();

export { $root as default };
