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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_applications_fee_v1_fee_pb = require('../../../../ibc/applications/fee/v1/fee_pb.js')

var ibc_applications_fee_v1_genesis_pb = require('../../../../ibc/applications/fee/v1/genesis_pb.js')

var ibc_core_channel_v1_channel_pb = require('../../../../ibc/core/channel/v1/channel_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.applications = {};
proto.ibc.applications.fee = {};
proto.ibc.applications.fee.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.applications.fee.v1.QueryClient =
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
proto.ibc.applications.fee.v1.QueryPromiseClient =
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
 *   !proto.ibc.applications.fee.v1.QueryIncentivizedPacketsRequest,
 *   !proto.ibc.applications.fee.v1.QueryIncentivizedPacketsResponse>}
 */
const methodDescriptor_Query_IncentivizedPackets = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/IncentivizedPackets',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketsRequest,
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketsResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryIncentivizedPacketsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.incentivizedPackets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPackets',
      request,
      metadata || {},
      methodDescriptor_Query_IncentivizedPackets,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.incentivizedPackets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPackets',
      request,
      metadata || {},
      methodDescriptor_Query_IncentivizedPackets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryIncentivizedPacketRequest,
 *   !proto.ibc.applications.fee.v1.QueryIncentivizedPacketResponse>}
 */
const methodDescriptor_Query_IncentivizedPacket = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/IncentivizedPacket',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketRequest,
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryIncentivizedPacketResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryIncentivizedPacketResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.incentivizedPacket =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPacket',
      request,
      metadata || {},
      methodDescriptor_Query_IncentivizedPacket,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryIncentivizedPacketResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.incentivizedPacket =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPacket',
      request,
      metadata || {},
      methodDescriptor_Query_IncentivizedPacket);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest,
 *   !proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse>}
 */
const methodDescriptor_Query_IncentivizedPacketsForChannel = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest,
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.incentivizedPacketsForChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel',
      request,
      metadata || {},
      methodDescriptor_Query_IncentivizedPacketsForChannel,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.incentivizedPacketsForChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel',
      request,
      metadata || {},
      methodDescriptor_Query_IncentivizedPacketsForChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryTotalRecvFeesRequest,
 *   !proto.ibc.applications.fee.v1.QueryTotalRecvFeesResponse>}
 */
const methodDescriptor_Query_TotalRecvFees = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/TotalRecvFees',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryTotalRecvFeesRequest,
  proto.ibc.applications.fee.v1.QueryTotalRecvFeesResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryTotalRecvFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryTotalRecvFeesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryTotalRecvFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryTotalRecvFeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryTotalRecvFeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.totalRecvFees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalRecvFees',
      request,
      metadata || {},
      methodDescriptor_Query_TotalRecvFees,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryTotalRecvFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryTotalRecvFeesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.totalRecvFees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalRecvFees',
      request,
      metadata || {},
      methodDescriptor_Query_TotalRecvFees);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryTotalAckFeesRequest,
 *   !proto.ibc.applications.fee.v1.QueryTotalAckFeesResponse>}
 */
const methodDescriptor_Query_TotalAckFees = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/TotalAckFees',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryTotalAckFeesRequest,
  proto.ibc.applications.fee.v1.QueryTotalAckFeesResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryTotalAckFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryTotalAckFeesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryTotalAckFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryTotalAckFeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryTotalAckFeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.totalAckFees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalAckFees',
      request,
      metadata || {},
      methodDescriptor_Query_TotalAckFees,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryTotalAckFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryTotalAckFeesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.totalAckFees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalAckFees',
      request,
      metadata || {},
      methodDescriptor_Query_TotalAckFees);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest,
 *   !proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse>}
 */
const methodDescriptor_Query_TotalTimeoutFees = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/TotalTimeoutFees',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest,
  proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.totalTimeoutFees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalTimeoutFees',
      request,
      metadata || {},
      methodDescriptor_Query_TotalTimeoutFees,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.totalTimeoutFees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalTimeoutFees',
      request,
      metadata || {},
      methodDescriptor_Query_TotalTimeoutFees);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryPayeeRequest,
 *   !proto.ibc.applications.fee.v1.QueryPayeeResponse>}
 */
const methodDescriptor_Query_Payee = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/Payee',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryPayeeRequest,
  proto.ibc.applications.fee.v1.QueryPayeeResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryPayeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryPayeeResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryPayeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryPayeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryPayeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.payee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/Payee',
      request,
      metadata || {},
      methodDescriptor_Query_Payee,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryPayeeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryPayeeResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.payee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/Payee',
      request,
      metadata || {},
      methodDescriptor_Query_Payee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryCounterpartyPayeeRequest,
 *   !proto.ibc.applications.fee.v1.QueryCounterpartyPayeeResponse>}
 */
const methodDescriptor_Query_CounterpartyPayee = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/CounterpartyPayee',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryCounterpartyPayeeRequest,
  proto.ibc.applications.fee.v1.QueryCounterpartyPayeeResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryCounterpartyPayeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryCounterpartyPayeeResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryCounterpartyPayeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryCounterpartyPayeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryCounterpartyPayeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.counterpartyPayee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/CounterpartyPayee',
      request,
      metadata || {},
      methodDescriptor_Query_CounterpartyPayee,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryCounterpartyPayeeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryCounterpartyPayeeResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.counterpartyPayee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/CounterpartyPayee',
      request,
      metadata || {},
      methodDescriptor_Query_CounterpartyPayee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest,
 *   !proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse>}
 */
const methodDescriptor_Query_FeeEnabledChannels = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/FeeEnabledChannels',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest,
  proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.feeEnabledChannels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/FeeEnabledChannels',
      request,
      metadata || {},
      methodDescriptor_Query_FeeEnabledChannels,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.feeEnabledChannels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/FeeEnabledChannels',
      request,
      metadata || {},
      methodDescriptor_Query_FeeEnabledChannels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.fee.v1.QueryFeeEnabledChannelRequest,
 *   !proto.ibc.applications.fee.v1.QueryFeeEnabledChannelResponse>}
 */
const methodDescriptor_Query_FeeEnabledChannel = new grpc.web.MethodDescriptor(
  '/ibc.applications.fee.v1.Query/FeeEnabledChannel',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.fee.v1.QueryFeeEnabledChannelRequest,
  proto.ibc.applications.fee.v1.QueryFeeEnabledChannelResponse,
  /**
   * @param {!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.fee.v1.QueryFeeEnabledChannelResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ibc.applications.fee.v1.QueryFeeEnabledChannelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.fee.v1.QueryClient.prototype.feeEnabledChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/FeeEnabledChannel',
      request,
      metadata || {},
      methodDescriptor_Query_FeeEnabledChannel,
      callback);
};


/**
 * @param {!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.fee.v1.QueryFeeEnabledChannelResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.fee.v1.QueryPromiseClient.prototype.feeEnabledChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.fee.v1.Query/FeeEnabledChannel',
      request,
      metadata || {},
      methodDescriptor_Query_FeeEnabledChannel);
};


module.exports = proto.ibc.applications.fee.v1;

