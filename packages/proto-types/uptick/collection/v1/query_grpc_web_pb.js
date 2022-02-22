/**
 * @fileoverview gRPC-Web generated client stub for uptick.collection.v1
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

var uptick_collection_v1_collection_pb = require('../../../uptick/collection/v1/collection_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
const proto = {};
proto.uptick = {};
proto.uptick.collection = {};
proto.uptick.collection.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.uptick.collection.v1.QueryClient =
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
proto.uptick.collection.v1.QueryPromiseClient =
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
 *   !proto.uptick.collection.v1.QuerySupplyRequest,
 *   !proto.uptick.collection.v1.QuerySupplyResponse>}
 */
const methodDescriptor_Query_Supply = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Query/Supply',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.QuerySupplyRequest,
  proto.uptick.collection.v1.QuerySupplyResponse,
  /**
   * @param {!proto.uptick.collection.v1.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.QuerySupplyResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.QuerySupplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.QuerySupplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.QueryClient.prototype.supply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.QuerySupplyResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.QueryPromiseClient.prototype.supply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.QueryNFTsOfOwnerRequest,
 *   !proto.uptick.collection.v1.QueryNFTsOfOwnerResponse>}
 */
const methodDescriptor_Query_NFTsOfOwner = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Query/NFTsOfOwner',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.QueryNFTsOfOwnerRequest,
  proto.uptick.collection.v1.QueryNFTsOfOwnerResponse,
  /**
   * @param {!proto.uptick.collection.v1.QueryNFTsOfOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.QueryNFTsOfOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.QueryNFTsOfOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.QueryNFTsOfOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.QueryNFTsOfOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.QueryClient.prototype.nFTsOfOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Query/NFTsOfOwner',
      request,
      metadata || {},
      methodDescriptor_Query_NFTsOfOwner,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.QueryNFTsOfOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.QueryNFTsOfOwnerResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.QueryPromiseClient.prototype.nFTsOfOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Query/NFTsOfOwner',
      request,
      metadata || {},
      methodDescriptor_Query_NFTsOfOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.QueryCollectionRequest,
 *   !proto.uptick.collection.v1.QueryCollectionResponse>}
 */
const methodDescriptor_Query_Collection = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Query/Collection',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.QueryCollectionRequest,
  proto.uptick.collection.v1.QueryCollectionResponse,
  /**
   * @param {!proto.uptick.collection.v1.QueryCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.QueryCollectionResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.QueryCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.QueryCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.QueryCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.QueryClient.prototype.collection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Query/Collection',
      request,
      metadata || {},
      methodDescriptor_Query_Collection,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.QueryCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.QueryCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.QueryPromiseClient.prototype.collection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Query/Collection',
      request,
      metadata || {},
      methodDescriptor_Query_Collection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.QueryDenomRequest,
 *   !proto.uptick.collection.v1.QueryDenomResponse>}
 */
const methodDescriptor_Query_Denom = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Query/Denom',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.QueryDenomRequest,
  proto.uptick.collection.v1.QueryDenomResponse,
  /**
   * @param {!proto.uptick.collection.v1.QueryDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.QueryDenomResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.QueryDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.QueryDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.QueryDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.QueryClient.prototype.denom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Query/Denom',
      request,
      metadata || {},
      methodDescriptor_Query_Denom,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.QueryDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.QueryDenomResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.QueryPromiseClient.prototype.denom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Query/Denom',
      request,
      metadata || {},
      methodDescriptor_Query_Denom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.QueryDenomsRequest,
 *   !proto.uptick.collection.v1.QueryDenomsResponse>}
 */
const methodDescriptor_Query_Denoms = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Query/Denoms',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.QueryDenomsRequest,
  proto.uptick.collection.v1.QueryDenomsResponse,
  /**
   * @param {!proto.uptick.collection.v1.QueryDenomsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.QueryDenomsResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.QueryDenomsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.QueryDenomsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.QueryDenomsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.QueryClient.prototype.denoms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Query/Denoms',
      request,
      metadata || {},
      methodDescriptor_Query_Denoms,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.QueryDenomsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.QueryDenomsResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.QueryPromiseClient.prototype.denoms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Query/Denoms',
      request,
      metadata || {},
      methodDescriptor_Query_Denoms);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.QueryNFTRequest,
 *   !proto.uptick.collection.v1.QueryNFTResponse>}
 */
const methodDescriptor_Query_NFT = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Query/NFT',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.QueryNFTRequest,
  proto.uptick.collection.v1.QueryNFTResponse,
  /**
   * @param {!proto.uptick.collection.v1.QueryNFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.QueryNFTResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.QueryNFTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.QueryNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.QueryNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.QueryClient.prototype.nFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Query/NFT',
      request,
      metadata || {},
      methodDescriptor_Query_NFT,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.QueryNFTRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.QueryNFTResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.QueryPromiseClient.prototype.nFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Query/NFT',
      request,
      metadata || {},
      methodDescriptor_Query_NFT);
};


module.exports = proto.uptick.collection.v1;

