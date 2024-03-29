// source: irismod/nft/genesis.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');

var irismod_nft_nft_pb = require('../../irismod/nft/nft_pb.js');

goog.exportSymbol('proto.irismod.nft.GenesisState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.nft.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irismod.nft.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.irismod.nft.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.nft.GenesisState.displayName = 'proto.irismod.nft.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irismod.nft.GenesisState.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.nft.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.nft.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.nft.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.nft.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    collectionsList: jspb.Message.toObjectList(msg.getCollectionsList(),
    irismod_nft_nft_pb.Collection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.nft.GenesisState}
 */
proto.irismod.nft.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.nft.GenesisState;
  return proto.irismod.nft.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.nft.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.nft.GenesisState}
 */
proto.irismod.nft.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new irismod_nft_nft_pb.Collection;
      reader.readMessage(value,irismod_nft_nft_pb.Collection.deserializeBinaryFromReader);
      msg.addCollections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.nft.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.nft.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.nft.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.nft.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      irismod_nft_nft_pb.Collection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Collection collections = 1;
 * @return {!Array<!proto.irismod.nft.Collection>}
 */
proto.irismod.nft.GenesisState.prototype.getCollectionsList = function() {
  return /** @type{!Array<!proto.irismod.nft.Collection>} */ (
    jspb.Message.getRepeatedWrapperField(this, irismod_nft_nft_pb.Collection, 1));
};


/**
 * @param {!Array<!proto.irismod.nft.Collection>} value
 * @return {!proto.irismod.nft.GenesisState} returns this
*/
proto.irismod.nft.GenesisState.prototype.setCollectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.irismod.nft.Collection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.irismod.nft.Collection}
 */
proto.irismod.nft.GenesisState.prototype.addCollections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.irismod.nft.Collection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.nft.GenesisState} returns this
 */
proto.irismod.nft.GenesisState.prototype.clearCollectionsList = function() {
  return this.setCollectionsList([]);
};


goog.object.extend(exports, proto.irismod.nft);
