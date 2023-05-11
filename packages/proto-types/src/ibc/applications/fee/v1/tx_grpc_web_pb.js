/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.fee.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')

var ibc_applications_fee_v1_fee_pb = require('../../../../ibc/applications/fee/v1/fee_pb.js')

var ibc_core_channel_v1_channel_pb = require('../../../../ibc/core/channel/v1/channel_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.applications = {};
proto.ibc.applications.fee = {};
proto.ibc.applications.fee.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.applications.fee.v1.MsgClient =
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
proto.ibc.applications.fee.v1.MsgPromiseClient =
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
 *   !proto.ibc.applications.fee.v1.MsgRegisterPayee,
 *   !proto.ibc.applications.fee.v1.MsgRegisterPayeeResponse>}
 */
const methodDescriptor_Msg_RegisterPayee = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Msg/RegisterPayee',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.MsgRegisterPayee,
  proto.ibc.applications.fee.v1.MsgRegisterPayeeResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.MsgRegisterPayee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.MsgRegisterPayeeResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.MsgRegisterPayee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.MsgRegisterPayeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.MsgRegisterPayeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.MsgClient.prototype.registerPayee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Msg/RegisterPayee',
      request,
      metadata || {},
      methodDescriptor_Msg_RegisterPayee,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.MsgRegisterPayee} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.MsgRegisterPayeeResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.MsgPromiseClient.prototype.registerPayee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Msg/RegisterPayee',
      request,
      metadata || {},
      methodDescriptor_Msg_RegisterPayee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayee,
 *   !proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse>}
 */
const methodDescriptor_Msg_RegisterCounterpartyPayee = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Msg/RegisterCounterpartyPayee',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayee,
  proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.MsgClient.prototype.registerCounterpartyPayee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Msg/RegisterCounterpartyPayee',
      request,
      metadata || {},
      methodDescriptor_Msg_RegisterCounterpartyPayee,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayee} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.MsgPromiseClient.prototype.registerCounterpartyPayee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Msg/RegisterCounterpartyPayee',
      request,
      metadata || {},
      methodDescriptor_Msg_RegisterCounterpartyPayee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.MsgPayPacketFee,
 *   !proto.ibc.applications.fee.v1.MsgPayPacketFeeResponse>}
 */
const methodDescriptor_Msg_PayPacketFee = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Msg/PayPacketFee',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.MsgPayPacketFee,
  proto.ibc.applications.fee.v1.MsgPayPacketFeeResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.MsgPayPacketFee} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.MsgPayPacketFeeResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.MsgPayPacketFee} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.MsgPayPacketFeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.MsgPayPacketFeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.MsgClient.prototype.payPacketFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Msg/PayPacketFee',
      request,
      metadata || {},
      methodDescriptor_Msg_PayPacketFee,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.MsgPayPacketFee} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.MsgPayPacketFeeResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.MsgPromiseClient.prototype.payPacketFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Msg/PayPacketFee',
      request,
      metadata || {},
      methodDescriptor_Msg_PayPacketFee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.MsgPayPacketFeeAsync,
 *   !proto.ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse>}
 */
const methodDescriptor_Msg_PayPacketFeeAsync = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Msg/PayPacketFeeAsync',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.MsgPayPacketFeeAsync,
  proto.ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.MsgPayPacketFeeAsync} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.MsgPayPacketFeeAsync} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.MsgClient.prototype.payPacketFeeAsync =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Msg/PayPacketFeeAsync',
      request,
      metadata || {},
      methodDescriptor_Msg_PayPacketFeeAsync,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.MsgPayPacketFeeAsync} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.MsgPromiseClient.prototype.payPacketFeeAsync =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Msg/PayPacketFeeAsync',
      request,
      metadata || {},
      methodDescriptor_Msg_PayPacketFeeAsync);
};


module.exports = proto.ibc.applications.fee.v1;

