/**
 * @fileoverview gRPC-Web generated client stub for ethermint.feemarket.v1
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

var ethermint_feemarket_v1_feemarket_pb = require('../../../ethermint/feemarket/v1/feemarket_pb.js')
const proto = {};
proto.ethermint = {};
proto.ethermint.feemarket = {};
proto.ethermint.feemarket.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ethermint.feemarket.v1.QueryClient =
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
proto.ethermint.feemarket.v1.QueryPromiseClient =
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
 *   !proto.ethermint.feemarket.v1.QueryParamsRequest,
 *   !proto.ethermint.feemarket.v1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/ethermint.feemarket.v1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.ethermint.feemarket.v1.QueryParamsRequest,
  proto.ethermint.feemarket.v1.QueryParamsResponse,
  /**
   * @param {!proto.ethermint.feemarket.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.feemarket.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.feemarket.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.feemarket.v1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.feemarket.v1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.feemarket.v1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.feemarket.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.ethermint.feemarket.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.feemarket.v1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.feemarket.v1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.feemarket.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.feemarket.v1.QueryBaseFeeRequest,
 *   !proto.ethermint.feemarket.v1.QueryBaseFeeResponse>}
 */
const methodDescriptor_Query_BaseFee = new grpc.web.MethodDescriptor(
  '/ethermint.feemarket.v1.Query/BaseFee',
  grpc.web.MethodType.UNARY,
  proto.ethermint.feemarket.v1.QueryBaseFeeRequest,
  proto.ethermint.feemarket.v1.QueryBaseFeeResponse,
  /**
   * @param {!proto.ethermint.feemarket.v1.QueryBaseFeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.feemarket.v1.QueryBaseFeeResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.feemarket.v1.QueryBaseFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.feemarket.v1.QueryBaseFeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.feemarket.v1.QueryBaseFeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.feemarket.v1.QueryClient.prototype.baseFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.feemarket.v1.Query/BaseFee',
      request,
      metadata || {},
      methodDescriptor_Query_BaseFee,
      callback);
};


/**
 * @param {!proto.ethermint.feemarket.v1.QueryBaseFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.feemarket.v1.QueryBaseFeeResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.feemarket.v1.QueryPromiseClient.prototype.baseFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.feemarket.v1.Query/BaseFee',
      request,
      metadata || {},
      methodDescriptor_Query_BaseFee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.feemarket.v1.QueryBlockGasRequest,
 *   !proto.ethermint.feemarket.v1.QueryBlockGasResponse>}
 */
const methodDescriptor_Query_BlockGas = new grpc.web.MethodDescriptor(
  '/ethermint.feemarket.v1.Query/BlockGas',
  grpc.web.MethodType.UNARY,
  proto.ethermint.feemarket.v1.QueryBlockGasRequest,
  proto.ethermint.feemarket.v1.QueryBlockGasResponse,
  /**
   * @param {!proto.ethermint.feemarket.v1.QueryBlockGasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.feemarket.v1.QueryBlockGasResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.feemarket.v1.QueryBlockGasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.feemarket.v1.QueryBlockGasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.feemarket.v1.QueryBlockGasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.feemarket.v1.QueryClient.prototype.blockGas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.feemarket.v1.Query/BlockGas',
      request,
      metadata || {},
      methodDescriptor_Query_BlockGas,
      callback);
};


/**
 * @param {!proto.ethermint.feemarket.v1.QueryBlockGasRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.feemarket.v1.QueryBlockGasResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.feemarket.v1.QueryPromiseClient.prototype.blockGas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.feemarket.v1.Query/BlockGas',
      request,
      metadata || {},
      methodDescriptor_Query_BlockGas);
};


module.exports = proto.ethermint.feemarket.v1;

