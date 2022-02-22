/**
 * @fileoverview gRPC-Web generated client stub for irismod.htlc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var irismod_htlc_htlc_pb = require('../../irismod/htlc/htlc_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.htlc = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.htlc.QueryClient =
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
proto.irismod.htlc.QueryPromiseClient =
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
 *   !proto.irismod.htlc.QueryHTLCRequest,
 *   !proto.irismod.htlc.QueryHTLCResponse>}
 */
const methodDescriptor_Query_HTLC = new grpc.web.MethodDescriptor(
  '/irismod.htlc.Query/HTLC',
  grpc.web.MethodType.UNARY,
  proto.irismod.htlc.QueryHTLCRequest,
  proto.irismod.htlc.QueryHTLCResponse,
  /**
   * @param {!proto.irismod.htlc.QueryHTLCRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.QueryHTLCResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.htlc.QueryHTLCRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.irismod.htlc.QueryHTLCResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.htlc.QueryHTLCResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.htlc.QueryClient.prototype.hTLC =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.htlc.Query/HTLC',
      request,
      metadata || {},
      methodDescriptor_Query_HTLC,
      callback);
};


/**
 * @param {!proto.irismod.htlc.QueryHTLCRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.htlc.QueryHTLCResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.htlc.QueryPromiseClient.prototype.hTLC =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.htlc.Query/HTLC',
      request,
      metadata || {},
      methodDescriptor_Query_HTLC);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.htlc.QueryAssetSupplyRequest,
 *   !proto.irismod.htlc.QueryAssetSupplyResponse>}
 */
const methodDescriptor_Query_AssetSupply = new grpc.web.MethodDescriptor(
  '/irismod.htlc.Query/AssetSupply',
  grpc.web.MethodType.UNARY,
  proto.irismod.htlc.QueryAssetSupplyRequest,
  proto.irismod.htlc.QueryAssetSupplyResponse,
  /**
   * @param {!proto.irismod.htlc.QueryAssetSupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.QueryAssetSupplyResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.htlc.QueryAssetSupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.irismod.htlc.QueryAssetSupplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.htlc.QueryAssetSupplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.htlc.QueryClient.prototype.assetSupply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.htlc.Query/AssetSupply',
      request,
      metadata || {},
      methodDescriptor_Query_AssetSupply,
      callback);
};


/**
 * @param {!proto.irismod.htlc.QueryAssetSupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.htlc.QueryAssetSupplyResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.htlc.QueryPromiseClient.prototype.assetSupply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.htlc.Query/AssetSupply',
      request,
      metadata || {},
      methodDescriptor_Query_AssetSupply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.htlc.QueryAssetSuppliesRequest,
 *   !proto.irismod.htlc.QueryAssetSuppliesResponse>}
 */
const methodDescriptor_Query_AssetSupplies = new grpc.web.MethodDescriptor(
  '/irismod.htlc.Query/AssetSupplies',
  grpc.web.MethodType.UNARY,
  proto.irismod.htlc.QueryAssetSuppliesRequest,
  proto.irismod.htlc.QueryAssetSuppliesResponse,
  /**
   * @param {!proto.irismod.htlc.QueryAssetSuppliesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.QueryAssetSuppliesResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.htlc.QueryAssetSuppliesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.irismod.htlc.QueryAssetSuppliesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.htlc.QueryAssetSuppliesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.htlc.QueryClient.prototype.assetSupplies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.htlc.Query/AssetSupplies',
      request,
      metadata || {},
      methodDescriptor_Query_AssetSupplies,
      callback);
};


/**
 * @param {!proto.irismod.htlc.QueryAssetSuppliesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.htlc.QueryAssetSuppliesResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.htlc.QueryPromiseClient.prototype.assetSupplies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.htlc.Query/AssetSupplies',
      request,
      metadata || {},
      methodDescriptor_Query_AssetSupplies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.htlc.QueryParamsRequest,
 *   !proto.irismod.htlc.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/irismod.htlc.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.irismod.htlc.QueryParamsRequest,
  proto.irismod.htlc.QueryParamsResponse,
  /**
   * @param {!proto.irismod.htlc.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.htlc.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.irismod.htlc.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.htlc.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.htlc.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.htlc.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.irismod.htlc.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.htlc.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.htlc.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.htlc.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.irismod.htlc;

