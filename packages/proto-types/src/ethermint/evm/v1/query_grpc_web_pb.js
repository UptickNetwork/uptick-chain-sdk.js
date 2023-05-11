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

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var ethermint_evm_v1_evm_pb = require('../../../ethermint/evm/v1/evm_pb.js')

var ethermint_evm_v1_tx_pb = require('../../../ethermint/evm/v1/tx_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.ethermint = {};
proto.ethermint.evm = {};
proto.ethermint.evm.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ethermint.evm.v1.QueryClient =
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
proto.ethermint.evm.v1.QueryPromiseClient =
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
 *   !proto.ethermint.evm.v1.QueryAccountRequest,
 *   !proto.ethermint.evm.v1.QueryAccountResponse>}
 */
const methodDescriptor_Query_Account = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/Account',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryAccountRequest,
  proto.ethermint.evm.v1.QueryAccountResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryAccountResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.account =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Account',
      request,
      metadata || {},
      methodDescriptor_Query_Account,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryAccountResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.account =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Account',
      request,
      metadata || {},
      methodDescriptor_Query_Account);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.QueryCosmosAccountRequest,
 *   !proto.ethermint.evm.v1.QueryCosmosAccountResponse>}
 */
const methodDescriptor_Query_CosmosAccount = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/CosmosAccount',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryCosmosAccountRequest,
  proto.ethermint.evm.v1.QueryCosmosAccountResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryCosmosAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryCosmosAccountResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryCosmosAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryCosmosAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryCosmosAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.cosmosAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/CosmosAccount',
      request,
      metadata || {},
      methodDescriptor_Query_CosmosAccount,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryCosmosAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryCosmosAccountResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.cosmosAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/CosmosAccount',
      request,
      metadata || {},
      methodDescriptor_Query_CosmosAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.QueryValidatorAccountRequest,
 *   !proto.ethermint.evm.v1.QueryValidatorAccountResponse>}
 */
const methodDescriptor_Query_ValidatorAccount = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/ValidatorAccount',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryValidatorAccountRequest,
  proto.ethermint.evm.v1.QueryValidatorAccountResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryValidatorAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryValidatorAccountResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryValidatorAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryValidatorAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryValidatorAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.validatorAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/ValidatorAccount',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorAccount,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryValidatorAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryValidatorAccountResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.validatorAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/ValidatorAccount',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.QueryBalanceRequest,
 *   !proto.ethermint.evm.v1.QueryBalanceResponse>}
 */
const methodDescriptor_Query_Balance = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/Balance',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryBalanceRequest,
  proto.ethermint.evm.v1.QueryBalanceResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.balance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Balance',
      request,
      metadata || {},
      methodDescriptor_Query_Balance,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.balance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Balance',
      request,
      metadata || {},
      methodDescriptor_Query_Balance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.QueryStorageRequest,
 *   !proto.ethermint.evm.v1.QueryStorageResponse>}
 */
const methodDescriptor_Query_Storage = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/Storage',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryStorageRequest,
  proto.ethermint.evm.v1.QueryStorageResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryStorageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryStorageResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryStorageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryStorageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryStorageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.storage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Storage',
      request,
      metadata || {},
      methodDescriptor_Query_Storage,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryStorageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryStorageResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.storage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Storage',
      request,
      metadata || {},
      methodDescriptor_Query_Storage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.QueryCodeRequest,
 *   !proto.ethermint.evm.v1.QueryCodeResponse>}
 */
const methodDescriptor_Query_Code = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/Code',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryCodeRequest,
  proto.ethermint.evm.v1.QueryCodeResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryCodeResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.code =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Code',
      request,
      metadata || {},
      methodDescriptor_Query_Code,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryCodeResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.code =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Code',
      request,
      metadata || {},
      methodDescriptor_Query_Code);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.QueryParamsRequest,
 *   !proto.ethermint.evm.v1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryParamsRequest,
  proto.ethermint.evm.v1.QueryParamsResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.EthCallRequest,
 *   !proto.ethermint.evm.v1.MsgEthereumTxResponse>}
 */
const methodDescriptor_Query_EthCall = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/EthCall',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.EthCallRequest,
  ethermint_evm_v1_tx_pb.MsgEthereumTxResponse,
  /**
   * @param {!proto.ethermint.evm.v1.EthCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ethermint_evm_v1_tx_pb.MsgEthereumTxResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.EthCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.MsgEthereumTxResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.MsgEthereumTxResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.ethCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/EthCall',
      request,
      metadata || {},
      methodDescriptor_Query_EthCall,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.EthCallRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.MsgEthereumTxResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.ethCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/EthCall',
      request,
      metadata || {},
      methodDescriptor_Query_EthCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.EthCallRequest,
 *   !proto.ethermint.evm.v1.EstimateGasResponse>}
 */
const methodDescriptor_Query_EstimateGas = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/EstimateGas',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.EthCallRequest,
  proto.ethermint.evm.v1.EstimateGasResponse,
  /**
   * @param {!proto.ethermint.evm.v1.EthCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.EstimateGasResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.EthCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.EstimateGasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.EstimateGasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.estimateGas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/EstimateGas',
      request,
      metadata || {},
      methodDescriptor_Query_EstimateGas,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.EthCallRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.EstimateGasResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.estimateGas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/EstimateGas',
      request,
      metadata || {},
      methodDescriptor_Query_EstimateGas);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.QueryTraceTxRequest,
 *   !proto.ethermint.evm.v1.QueryTraceTxResponse>}
 */
const methodDescriptor_Query_TraceTx = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/TraceTx',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryTraceTxRequest,
  proto.ethermint.evm.v1.QueryTraceTxResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryTraceTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryTraceTxResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryTraceTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryTraceTxResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryTraceTxResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.traceTx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/TraceTx',
      request,
      metadata || {},
      methodDescriptor_Query_TraceTx,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryTraceTxRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryTraceTxResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.traceTx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/TraceTx',
      request,
      metadata || {},
      methodDescriptor_Query_TraceTx);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ethermint.evm.v1.QueryTraceBlockRequest,
 *   !proto.ethermint.evm.v1.QueryTraceBlockResponse>}
 */
const methodDescriptor_Query_TraceBlock = new grpc.web.MethodDescriptor(
  '/ethermint.evm.v1.Query/TraceBlock',
  grpc.web.MethodType.UNARY,
  proto.ethermint.evm.v1.QueryTraceBlockRequest,
  proto.ethermint.evm.v1.QueryTraceBlockResponse,
  /**
   * @param {!proto.ethermint.evm.v1.QueryTraceBlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ethermint.evm.v1.QueryTraceBlockResponse.deserializeBinary
);


/**
 * @param {!proto.ethermint.evm.v1.QueryTraceBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ethermint.evm.v1.QueryTraceBlockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ethermint.evm.v1.QueryTraceBlockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ethermint.evm.v1.QueryClient.prototype.traceBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ethermint.evm.v1.Query/TraceBlock',
      request,
      metadata || {},
      methodDescriptor_Query_TraceBlock,
      callback);
};


/**
 * @param {!proto.ethermint.evm.v1.QueryTraceBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ethermint.evm.v1.QueryTraceBlockResponse>}
 *     Promise that resolves to the response
 */
proto.ethermint.evm.v1.QueryPromiseClient.prototype.traceBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ethermint.evm.v1.Query/TraceBlock',
      request,
      metadata || {},
      methodDescriptor_Query_TraceBlock);
};


module.exports = proto.ethermint.evm.v1;

