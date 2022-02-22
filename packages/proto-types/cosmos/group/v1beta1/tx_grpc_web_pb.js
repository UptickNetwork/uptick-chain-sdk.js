/**
 * @fileoverview gRPC-Web generated client stub for cosmos.group.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var cosmos_group_v1beta1_types_pb = require('../../../cosmos/group/v1beta1/types_pb.js')

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.group = {};
proto.cosmos.group.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.group.v1beta1.MsgClient =
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
proto.cosmos.group.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.group.v1beta1.MsgCreateGroup,
 *   !proto.cosmos.group.v1beta1.MsgCreateGroupResponse>}
 */
const methodDescriptor_Msg_CreateGroup = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/CreateGroup',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgCreateGroup,
  proto.cosmos.group.v1beta1.MsgCreateGroupResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgCreateGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgCreateGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgCreateGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgCreateGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgCreateGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.createGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroup,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgCreateGroup} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgCreateGroupResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.createGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupMembers,
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupMembersResponse>}
 */
const methodDescriptor_Msg_UpdateGroupMembers = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/UpdateGroupMembers',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgUpdateGroupMembers,
  proto.cosmos.group.v1beta1.MsgUpdateGroupMembersResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupMembers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgUpdateGroupMembersResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupMembers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgUpdateGroupMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgUpdateGroupMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.updateGroupMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupMembers',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupMembers,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupMembers} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgUpdateGroupMembersResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.updateGroupMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupMembers',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupAdmin,
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupAdminResponse>}
 */
const methodDescriptor_Msg_UpdateGroupAdmin = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/UpdateGroupAdmin',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgUpdateGroupAdmin,
  proto.cosmos.group.v1beta1.MsgUpdateGroupAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupAdmin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgUpdateGroupAdminResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupAdmin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgUpdateGroupAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgUpdateGroupAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.updateGroupAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupAdmin',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupAdmin,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupAdmin} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgUpdateGroupAdminResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.updateGroupAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupAdmin',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupMetadata,
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupMetadataResponse>}
 */
const methodDescriptor_Msg_UpdateGroupMetadata = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/UpdateGroupMetadata',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgUpdateGroupMetadata,
  proto.cosmos.group.v1beta1.MsgUpdateGroupMetadataResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupMetadata} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgUpdateGroupMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupMetadata} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgUpdateGroupMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgUpdateGroupMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.updateGroupMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupMetadata',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupMetadata,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupMetadata} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgUpdateGroupMetadataResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.updateGroupMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupMetadata',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgCreateGroupPolicy,
 *   !proto.cosmos.group.v1beta1.MsgCreateGroupPolicyResponse>}
 */
const methodDescriptor_Msg_CreateGroupPolicy = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/CreateGroupPolicy',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgCreateGroupPolicy,
  proto.cosmos.group.v1beta1.MsgCreateGroupPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgCreateGroupPolicy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgCreateGroupPolicyResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgCreateGroupPolicy} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgCreateGroupPolicyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgCreateGroupPolicyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.createGroupPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/CreateGroupPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroupPolicy,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgCreateGroupPolicy} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgCreateGroupPolicyResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.createGroupPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/CreateGroupPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroupPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdmin,
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdminResponse>}
 */
const methodDescriptor_Msg_UpdateGroupPolicyAdmin = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyAdmin',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdmin,
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdmin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdminResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdmin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.updateGroupPolicyAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyAdmin',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyAdmin,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdmin} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyAdminResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.updateGroupPolicyAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyAdmin',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicy,
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicyResponse>}
 */
const methodDescriptor_Msg_UpdateGroupPolicyDecisionPolicy = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyDecisionPolicy',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicy,
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicyResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicy} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.updateGroupPolicyDecisionPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyDecisionPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyDecisionPolicy,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicy} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyDecisionPolicyResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.updateGroupPolicyDecisionPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyDecisionPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyDecisionPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadata,
 *   !proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadataResponse>}
 */
const methodDescriptor_Msg_UpdateGroupPolicyMetadata = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyMetadata',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadata,
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadataResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadata} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadata} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.updateGroupPolicyMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyMetadata',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyMetadata,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadata} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgUpdateGroupPolicyMetadataResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.updateGroupPolicyMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/UpdateGroupPolicyMetadata',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgSubmitProposal,
 *   !proto.cosmos.group.v1beta1.MsgSubmitProposalResponse>}
 */
const methodDescriptor_Msg_SubmitProposal = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/SubmitProposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgSubmitProposal,
  proto.cosmos.group.v1beta1.MsgSubmitProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgSubmitProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgSubmitProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgSubmitProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgSubmitProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgSubmitProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.submitProposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/SubmitProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitProposal,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgSubmitProposal} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgSubmitProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.submitProposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/SubmitProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitProposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgWithdrawProposal,
 *   !proto.cosmos.group.v1beta1.MsgWithdrawProposalResponse>}
 */
const methodDescriptor_Msg_WithdrawProposal = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/WithdrawProposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgWithdrawProposal,
  proto.cosmos.group.v1beta1.MsgWithdrawProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgWithdrawProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgWithdrawProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgWithdrawProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgWithdrawProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgWithdrawProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.withdrawProposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/WithdrawProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawProposal,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgWithdrawProposal} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgWithdrawProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.withdrawProposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/WithdrawProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawProposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgVote,
 *   !proto.cosmos.group.v1beta1.MsgVoteResponse>}
 */
const methodDescriptor_Msg_Vote = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/Vote',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgVote,
  proto.cosmos.group.v1beta1.MsgVoteResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgVote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgVoteResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgVote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgVoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgVoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.vote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/Vote',
      request,
      metadata || {},
      methodDescriptor_Msg_Vote,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgVote} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgVoteResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.vote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/Vote',
      request,
      metadata || {},
      methodDescriptor_Msg_Vote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1beta1.MsgExec,
 *   !proto.cosmos.group.v1beta1.MsgExecResponse>}
 */
const methodDescriptor_Msg_Exec = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1beta1.Msg/Exec',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1beta1.MsgExec,
  proto.cosmos.group.v1beta1.MsgExecResponse,
  /**
   * @param {!proto.cosmos.group.v1beta1.MsgExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1beta1.MsgExecResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1beta1.MsgExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cosmos.group.v1beta1.MsgExecResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1beta1.MsgExecResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1beta1.MsgClient.prototype.exec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/Exec',
      request,
      metadata || {},
      methodDescriptor_Msg_Exec,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1beta1.MsgExec} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1beta1.MsgExecResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1beta1.MsgPromiseClient.prototype.exec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1beta1.Msg/Exec',
      request,
      metadata || {},
      methodDescriptor_Msg_Exec);
};


module.exports = proto.cosmos.group.v1beta1;

