/**
 * @fileoverview gRPC-Web generated client stub for cosmos.gov.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_gov_v1beta2_gov_pb = require('../../../cosmos/gov/v1beta2/gov_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.gov = {};
proto.cosmos.gov.v1beta2 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.gov.v1beta2.MsgClient =
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
proto.cosmos.gov.v1beta2.MsgPromiseClient =
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
 *   !proto.cosmos.gov.v1beta2.MsgSubmitProposal,
 *   !proto.cosmos.gov.v1beta2.MsgSubmitProposalResponse>}
 */
const methodDescriptor_Msg_SubmitProposal = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta2.Msg/SubmitProposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta2.MsgSubmitProposal,
  proto.cosmos.gov.v1beta2.MsgSubmitProposalResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta2.MsgSubmitProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta2.MsgSubmitProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgSubmitProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.gov.v1beta2.MsgSubmitProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta2.MsgSubmitProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta2.MsgClient.prototype.submitProposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/SubmitProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitProposal,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgSubmitProposal} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta2.MsgSubmitProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta2.MsgPromiseClient.prototype.submitProposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/SubmitProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitProposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta2.MsgExecLegacyContent,
 *   !proto.cosmos.gov.v1beta2.MsgExecLegacyContentResponse>}
 */
const methodDescriptor_Msg_ExecLegacyContent = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta2.Msg/ExecLegacyContent',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta2.MsgExecLegacyContent,
  proto.cosmos.gov.v1beta2.MsgExecLegacyContentResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta2.MsgExecLegacyContent} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta2.MsgExecLegacyContentResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgExecLegacyContent} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.gov.v1beta2.MsgExecLegacyContentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta2.MsgExecLegacyContentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta2.MsgClient.prototype.execLegacyContent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/ExecLegacyContent',
      request,
      metadata || {},
      methodDescriptor_Msg_ExecLegacyContent,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgExecLegacyContent} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta2.MsgExecLegacyContentResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta2.MsgPromiseClient.prototype.execLegacyContent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/ExecLegacyContent',
      request,
      metadata || {},
      methodDescriptor_Msg_ExecLegacyContent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta2.MsgVote,
 *   !proto.cosmos.gov.v1beta2.MsgVoteResponse>}
 */
const methodDescriptor_Msg_Vote = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta2.Msg/Vote',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta2.MsgVote,
  proto.cosmos.gov.v1beta2.MsgVoteResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta2.MsgVote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta2.MsgVoteResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgVote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.gov.v1beta2.MsgVoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta2.MsgVoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta2.MsgClient.prototype.vote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/Vote',
      request,
      metadata || {},
      methodDescriptor_Msg_Vote,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgVote} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta2.MsgVoteResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta2.MsgPromiseClient.prototype.vote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/Vote',
      request,
      metadata || {},
      methodDescriptor_Msg_Vote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta2.MsgVoteWeighted,
 *   !proto.cosmos.gov.v1beta2.MsgVoteWeightedResponse>}
 */
const methodDescriptor_Msg_VoteWeighted = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta2.Msg/VoteWeighted',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta2.MsgVoteWeighted,
  proto.cosmos.gov.v1beta2.MsgVoteWeightedResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta2.MsgVoteWeighted} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta2.MsgVoteWeightedResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgVoteWeighted} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.gov.v1beta2.MsgVoteWeightedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta2.MsgVoteWeightedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta2.MsgClient.prototype.voteWeighted =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/VoteWeighted',
      request,
      metadata || {},
      methodDescriptor_Msg_VoteWeighted,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgVoteWeighted} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta2.MsgVoteWeightedResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta2.MsgPromiseClient.prototype.voteWeighted =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/VoteWeighted',
      request,
      metadata || {},
      methodDescriptor_Msg_VoteWeighted);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta2.MsgDeposit,
 *   !proto.cosmos.gov.v1beta2.MsgDepositResponse>}
 */
const methodDescriptor_Msg_Deposit = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta2.Msg/Deposit',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta2.MsgDeposit,
  proto.cosmos.gov.v1beta2.MsgDepositResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta2.MsgDeposit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta2.MsgDepositResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgDeposit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.gov.v1beta2.MsgDepositResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta2.MsgDepositResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta2.MsgClient.prototype.deposit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/Deposit',
      request,
      metadata || {},
      methodDescriptor_Msg_Deposit,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta2.MsgDeposit} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta2.MsgDepositResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta2.MsgPromiseClient.prototype.deposit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta2.Msg/Deposit',
      request,
      metadata || {},
      methodDescriptor_Msg_Deposit);
};


module.exports = proto.cosmos.gov.v1beta2;

