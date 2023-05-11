/**
 * @fileoverview gRPC-Web generated client stub for uptick.erc20.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')
const proto = {};
proto.uptick = {};
proto.uptick.erc20 = {};
proto.uptick.erc20.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.uptick.erc20.v1.MsgClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.uptick.erc20.v1.MsgPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.erc20.v1.MsgConvertCoin,
 *   !proto.uptick.erc20.v1.MsgConvertCoinResponse>}
 */
const methodDescriptor_Msg_ConvertCoin = new grpc.web.MethodDescriptor(
  '/uptick.erc20.v1.Msg/ConvertCoin',
  grpc.web.MethodType.UNARY,
  proto.uptick.erc20.v1.MsgConvertCoin,
  proto.uptick.erc20.v1.MsgConvertCoinResponse,
  /**
   * @param {!proto.uptick.erc20.v1.MsgConvertCoin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.erc20.v1.MsgConvertCoinResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.erc20.v1.MsgConvertCoin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.erc20.v1.MsgConvertCoinResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.erc20.v1.MsgConvertCoinResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.erc20.v1.MsgClient.prototype.convertCoin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.erc20.v1.Msg/ConvertCoin',
      request,
      metadata || {},
      methodDescriptor_Msg_ConvertCoin,
      callback);
};


/**
 * @param {!proto.uptick.erc20.v1.MsgConvertCoin} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.erc20.v1.MsgConvertCoinResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.erc20.v1.MsgPromiseClient.prototype.convertCoin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.erc20.v1.Msg/ConvertCoin',
      request,
      metadata || {},
      methodDescriptor_Msg_ConvertCoin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.erc20.v1.MsgConvertERC20,
 *   !proto.uptick.erc20.v1.MsgConvertERC20Response>}
 */
const methodDescriptor_Msg_ConvertERC20 = new grpc.web.MethodDescriptor(
  '/uptick.erc20.v1.Msg/ConvertERC20',
  grpc.web.MethodType.UNARY,
  proto.uptick.erc20.v1.MsgConvertERC20,
  proto.uptick.erc20.v1.MsgConvertERC20Response,
  /**
   * @param {!proto.uptick.erc20.v1.MsgConvertERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.erc20.v1.MsgConvertERC20Response.deserializeBinary
);


/**
 * @param {!proto.uptick.erc20.v1.MsgConvertERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.erc20.v1.MsgConvertERC20Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.erc20.v1.MsgConvertERC20Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.erc20.v1.MsgClient.prototype.convertERC20 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.erc20.v1.Msg/ConvertERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_ConvertERC20,
      callback);
};


/**
 * @param {!proto.uptick.erc20.v1.MsgConvertERC20} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.erc20.v1.MsgConvertERC20Response>}
 *     Promise that resolves to the response
 */
proto.uptick.erc20.v1.MsgPromiseClient.prototype.convertERC20 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.erc20.v1.Msg/ConvertERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_ConvertERC20);
};


module.exports = proto.uptick.erc20.v1;

