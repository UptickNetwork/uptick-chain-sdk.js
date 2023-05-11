/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.transfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_applications_transfer_v1_transfer_pb = require('../../../../ibc/applications/transfer/v1/transfer_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.applications = {};
proto.ibc.applications.transfer = {};
proto.ibc.applications.transfer.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.applications.transfer.v1.QueryClient =
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
proto.ibc.applications.transfer.v1.QueryPromiseClient =
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
 *   !proto.ibc.applications.transfer.v1.QueryDenomTraceRequest,
 *   !proto.ibc.applications.transfer.v1.QueryDenomTraceResponse>}
 */
const methodDescriptor_Query_DenomTrace = new grpc.web.MethodDescriptor(
  '/ibc.applications.transfer.v1.Query/DenomTrace',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.transfer.v1.QueryDenomTraceRequest,
  proto.ibc.applications.transfer.v1.QueryDenomTraceResponse,
  /**
   * @param {!proto.ibc.applications.transfer.v1.QueryDenomTraceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.transfer.v1.QueryDenomTraceResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryDenomTraceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.transfer.v1.QueryDenomTraceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.transfer.v1.QueryDenomTraceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.transfer.v1.QueryClient.prototype.denomTrace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/DenomTrace',
      request,
      metadata || {},
      methodDescriptor_Query_DenomTrace,
      callback);
};


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryDenomTraceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.transfer.v1.QueryDenomTraceResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.transfer.v1.QueryPromiseClient.prototype.denomTrace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/DenomTrace',
      request,
      metadata || {},
      methodDescriptor_Query_DenomTrace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.transfer.v1.QueryDenomTracesRequest,
 *   !proto.ibc.applications.transfer.v1.QueryDenomTracesResponse>}
 */
const methodDescriptor_Query_DenomTraces = new grpc.web.MethodDescriptor(
  '/ibc.applications.transfer.v1.Query/DenomTraces',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.transfer.v1.QueryDenomTracesRequest,
  proto.ibc.applications.transfer.v1.QueryDenomTracesResponse,
  /**
   * @param {!proto.ibc.applications.transfer.v1.QueryDenomTracesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.transfer.v1.QueryDenomTracesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryDenomTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.transfer.v1.QueryDenomTracesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.transfer.v1.QueryDenomTracesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.transfer.v1.QueryClient.prototype.denomTraces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/DenomTraces',
      request,
      metadata || {},
      methodDescriptor_Query_DenomTraces,
      callback);
};


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryDenomTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.transfer.v1.QueryDenomTracesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.transfer.v1.QueryPromiseClient.prototype.denomTraces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/DenomTraces',
      request,
      metadata || {},
      methodDescriptor_Query_DenomTraces);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.transfer.v1.QueryParamsRequest,
 *   !proto.ibc.applications.transfer.v1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/ibc.applications.transfer.v1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.transfer.v1.QueryParamsRequest,
  proto.ibc.applications.transfer.v1.QueryParamsResponse,
  /**
   * @param {!proto.ibc.applications.transfer.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.transfer.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.transfer.v1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.transfer.v1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.transfer.v1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.transfer.v1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.transfer.v1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.transfer.v1.QueryDenomHashRequest,
 *   !proto.ibc.applications.transfer.v1.QueryDenomHashResponse>}
 */
const methodDescriptor_Query_DenomHash = new grpc.web.MethodDescriptor(
  '/ibc.applications.transfer.v1.Query/DenomHash',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.transfer.v1.QueryDenomHashRequest,
  proto.ibc.applications.transfer.v1.QueryDenomHashResponse,
  /**
   * @param {!proto.ibc.applications.transfer.v1.QueryDenomHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.transfer.v1.QueryDenomHashResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryDenomHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.transfer.v1.QueryDenomHashResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.transfer.v1.QueryDenomHashResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.transfer.v1.QueryClient.prototype.denomHash =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/DenomHash',
      request,
      metadata || {},
      methodDescriptor_Query_DenomHash,
      callback);
};


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryDenomHashRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.transfer.v1.QueryDenomHashResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.transfer.v1.QueryPromiseClient.prototype.denomHash =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/DenomHash',
      request,
      metadata || {},
      methodDescriptor_Query_DenomHash);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.transfer.v1.QueryEscrowAddressRequest,
 *   !proto.ibc.applications.transfer.v1.QueryEscrowAddressResponse>}
 */
const methodDescriptor_Query_EscrowAddress = new grpc.web.MethodDescriptor(
  '/ibc.applications.transfer.v1.Query/EscrowAddress',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.transfer.v1.QueryEscrowAddressRequest,
  proto.ibc.applications.transfer.v1.QueryEscrowAddressResponse,
  /**
   * @param {!proto.ibc.applications.transfer.v1.QueryEscrowAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.transfer.v1.QueryEscrowAddressResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryEscrowAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.transfer.v1.QueryEscrowAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.transfer.v1.QueryEscrowAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.transfer.v1.QueryClient.prototype.escrowAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/EscrowAddress',
      request,
      metadata || {},
      methodDescriptor_Query_EscrowAddress,
      callback);
};


/**
 * @param {!proto.ibc.applications.transfer.v1.QueryEscrowAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.transfer.v1.QueryEscrowAddressResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.transfer.v1.QueryPromiseClient.prototype.escrowAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.transfer.v1.Query/EscrowAddress',
      request,
      metadata || {},
      methodDescriptor_Query_EscrowAddress);
};


module.exports = proto.ibc.applications.transfer.v1;

