/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.interchain_accounts.controller.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var ibc_applications_interchain_accounts_controller_v1_controller_pb = require('../../../../../ibc/applications/interchain_accounts/controller/v1/controller_pb.js')

var gogoproto_gogo_pb = require('../../../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.applications = {};
proto.ibc.applications.interchain_accounts = {};
proto.ibc.applications.interchain_accounts.controller = {};
proto.ibc.applications.interchain_accounts.controller.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.applications.interchain_accounts.controller.v1.QueryClient =
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
proto.ibc.applications.interchain_accounts.controller.v1.QueryPromiseClient =
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
 *   !proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest,
 *   !proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse>}
 */
const methodDescriptor_Query_InterchainAccount = new grpc.web.MethodDescriptor(
  '/ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest,
  proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse,
  /**
   * @param {!proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.interchain_accounts.controller.v1.QueryClient.prototype.interchainAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount',
      request,
      metadata || {},
      methodDescriptor_Query_InterchainAccount,
      callback);
};


/**
 * @param {!proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.interchain_accounts.controller.v1.QueryPromiseClient.prototype.interchainAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount',
      request,
      metadata || {},
      methodDescriptor_Query_InterchainAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest,
 *   !proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/ibc.applications.interchain_accounts.controller.v1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest,
  proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse,
  /**
   * @param {!proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.interchain_accounts.controller.v1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.interchain_accounts.controller.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.interchain_accounts.controller.v1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.interchain_accounts.controller.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.ibc.applications.interchain_accounts.controller.v1;

