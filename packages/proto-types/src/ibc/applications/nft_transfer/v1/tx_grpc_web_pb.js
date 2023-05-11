/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.nft_transfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')

var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.applications = {};
proto.ibc.applications.nft_transfer = {};
proto.ibc.applications.nft_transfer.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.applications.nft_transfer.v1.MsgClient =
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
proto.ibc.applications.nft_transfer.v1.MsgPromiseClient =
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
 *   !proto.ibc.applications.nft_transfer.v1.MsgTransfer,
 *   !proto.ibc.applications.nft_transfer.v1.MsgTransferResponse>}
 */
const methodDescriptor_Msg_Transfer = new grpc.web.MethodDescriptor(
  '/ibc.applications.nft_transfer.v1.Msg/Transfer',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.nft_transfer.v1.MsgTransfer,
  proto.ibc.applications.nft_transfer.v1.MsgTransferResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.MsgTransfer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.MsgTransferResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.MsgTransfer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.nft_transfer.v1.MsgTransferResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.nft_transfer.v1.MsgTransferResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.nft_transfer.v1.MsgClient.prototype.transfer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Msg/Transfer',
      request,
      metadata || {},
      methodDescriptor_Msg_Transfer,
      callback);
};


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.MsgTransfer} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.nft_transfer.v1.MsgTransferResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.nft_transfer.v1.MsgPromiseClient.prototype.transfer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Msg/Transfer',
      request,
      metadata || {},
      methodDescriptor_Msg_Transfer);
};


module.exports = proto.ibc.applications.nft_transfer.v1;

