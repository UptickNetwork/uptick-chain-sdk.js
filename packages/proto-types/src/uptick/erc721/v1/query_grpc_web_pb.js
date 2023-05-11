/**
 * @fileoverview gRPC-Web generated client stub for uptick.erc721.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var uptick_erc721_v1_genesis_pb = require('../../../uptick/erc721/v1/genesis_pb.js')

var uptick_erc721_v1_erc721_pb = require('../../../uptick/erc721/v1/erc721_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
const proto = {};
proto.uptick = {};
proto.uptick.erc721 = {};
proto.uptick.erc721.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.uptick.erc721.v1.QueryClient =
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
proto.uptick.erc721.v1.QueryPromiseClient =
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
 *   !proto.uptick.erc721.v1.QueryTokenPairsRequest,
 *   !proto.uptick.erc721.v1.QueryTokenPairsResponse>}
 */
const methodDescriptor_Query_TokenPairs = new grpc.web.MethodDescriptor(
  '/uptick.erc721.v1.Query/TokenPairs',
  grpc.web.MethodType.UNARY,
  proto.uptick.erc721.v1.QueryTokenPairsRequest,
  proto.uptick.erc721.v1.QueryTokenPairsResponse,
  /**
   * @param {!proto.uptick.erc721.v1.QueryTokenPairsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.erc721.v1.QueryTokenPairsResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.erc721.v1.QueryTokenPairsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.erc721.v1.QueryTokenPairsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.erc721.v1.QueryTokenPairsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.erc721.v1.QueryClient.prototype.tokenPairs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.erc721.v1.Query/TokenPairs',
      request,
      metadata || {},
      methodDescriptor_Query_TokenPairs,
      callback);
};


/**
 * @param {!proto.uptick.erc721.v1.QueryTokenPairsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.erc721.v1.QueryTokenPairsResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.erc721.v1.QueryPromiseClient.prototype.tokenPairs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.erc721.v1.Query/TokenPairs',
      request,
      metadata || {},
      methodDescriptor_Query_TokenPairs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.erc721.v1.QueryTokenPairRequest,
 *   !proto.uptick.erc721.v1.QueryTokenPairResponse>}
 */
const methodDescriptor_Query_TokenPair = new grpc.web.MethodDescriptor(
  '/uptick.erc721.v1.Query/TokenPair',
  grpc.web.MethodType.UNARY,
  proto.uptick.erc721.v1.QueryTokenPairRequest,
  proto.uptick.erc721.v1.QueryTokenPairResponse,
  /**
   * @param {!proto.uptick.erc721.v1.QueryTokenPairRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.erc721.v1.QueryTokenPairResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.erc721.v1.QueryTokenPairRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.erc721.v1.QueryTokenPairResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.erc721.v1.QueryTokenPairResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.erc721.v1.QueryClient.prototype.tokenPair =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.erc721.v1.Query/TokenPair',
      request,
      metadata || {},
      methodDescriptor_Query_TokenPair,
      callback);
};


/**
 * @param {!proto.uptick.erc721.v1.QueryTokenPairRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.erc721.v1.QueryTokenPairResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.erc721.v1.QueryPromiseClient.prototype.tokenPair =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.erc721.v1.Query/TokenPair',
      request,
      metadata || {},
      methodDescriptor_Query_TokenPair);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.erc721.v1.QueryParamsRequest,
 *   !proto.uptick.erc721.v1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/uptick.erc721.v1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.uptick.erc721.v1.QueryParamsRequest,
  proto.uptick.erc721.v1.QueryParamsResponse,
  /**
   * @param {!proto.uptick.erc721.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.erc721.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.erc721.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.erc721.v1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.erc721.v1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.erc721.v1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.erc721.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.uptick.erc721.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.erc721.v1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.erc721.v1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.erc721.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.uptick.erc721.v1;

