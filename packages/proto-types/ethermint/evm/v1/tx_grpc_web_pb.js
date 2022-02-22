/**
 * @fileoverview gRPC-Web generated client stub for ethermint.evm.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var ethermint_evm_v1_evm_pb = require('../../../ethermint/evm/v1/evm_pb.js')
const proto = {};
proto.ethermint = {};
proto.ethermint.evm = {};
proto.ethermint.evm.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ethermint.evm.v1.MsgClient =
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
proto.ethermint.evm.v1.MsgPromiseClient =
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
 *   !proto.ethermint.evm.v1.MsgEthereumTx,
 *   !proto.ethermint.evm.v1.MsgEthereumTxResponse>}
 */
const methodDescriptor_Msg_EthereumTx = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Msg/EthereumTx',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.MsgEthereumTx,
  proto.ethermint.evm.v1.MsgEthereumTxResponse,
  /**
   * @param {!proto.ethermint.evm.v1.MsgEthereumTx} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.MsgEthereumTxResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.MsgEthereumTx} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.MsgEthereumTxResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.MsgEthereumTxResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.MsgClient.prototype.ethereumTx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Msg/EthereumTx',
      request,
      metadata || {},
      methodDescriptor_Msg_EthereumTx,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.MsgEthereumTx} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.MsgEthereumTxResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.MsgPromiseClient.prototype.ethereumTx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Msg/EthereumTx',
      request,
      metadata || {},
      methodDescriptor_Msg_EthereumTx);
};


module.exports = proto.ethermint.evm.v1;

