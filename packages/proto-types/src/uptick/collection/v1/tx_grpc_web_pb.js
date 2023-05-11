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
const proto = {};
proto.uptick = {};
proto.uptick.collection = {};
proto.uptick.collection.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.uptick.collection.v1.MsgClient =
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
proto.uptick.collection.v1.MsgPromiseClient =
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
 *   !proto.uptick.collection.v1.MsgIssueDenom,
 *   !proto.uptick.collection.v1.MsgIssueDenomResponse>}
 */
const methodDescriptor_Msg_IssueDenom = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Msg/IssueDenom',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.MsgIssueDenom,
  proto.uptick.collection.v1.MsgIssueDenomResponse,
  /**
   * @param {!proto.uptick.collection.v1.MsgIssueDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.MsgIssueDenomResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.MsgIssueDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.MsgIssueDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.MsgIssueDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.MsgClient.prototype.issueDenom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Msg/IssueDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueDenom,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.MsgIssueDenom} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.MsgIssueDenomResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.MsgPromiseClient.prototype.issueDenom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Msg/IssueDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueDenom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.MsgMintNFT,
 *   !proto.uptick.collection.v1.MsgMintNFTResponse>}
 */
const methodDescriptor_Msg_MintNFT = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Msg/MintNFT',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.MsgMintNFT,
  proto.uptick.collection.v1.MsgMintNFTResponse,
  /**
   * @param {!proto.uptick.collection.v1.MsgMintNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.MsgMintNFTResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.MsgMintNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.MsgMintNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.MsgMintNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.MsgClient.prototype.mintNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Msg/MintNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_MintNFT,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.MsgMintNFT} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.MsgMintNFTResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.MsgPromiseClient.prototype.mintNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Msg/MintNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_MintNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.MsgEditNFT,
 *   !proto.uptick.collection.v1.MsgEditNFTResponse>}
 */
const methodDescriptor_Msg_EditNFT = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Msg/EditNFT',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.MsgEditNFT,
  proto.uptick.collection.v1.MsgEditNFTResponse,
  /**
   * @param {!proto.uptick.collection.v1.MsgEditNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.MsgEditNFTResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.MsgEditNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.MsgEditNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.MsgEditNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.MsgClient.prototype.editNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Msg/EditNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_EditNFT,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.MsgEditNFT} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.MsgEditNFTResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.MsgPromiseClient.prototype.editNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Msg/EditNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_EditNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.MsgTransferNFT,
 *   !proto.uptick.collection.v1.MsgTransferNFTResponse>}
 */
const methodDescriptor_Msg_TransferNFT = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Msg/TransferNFT',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.MsgTransferNFT,
  proto.uptick.collection.v1.MsgTransferNFTResponse,
  /**
   * @param {!proto.uptick.collection.v1.MsgTransferNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.MsgTransferNFTResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.MsgTransferNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.MsgTransferNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.MsgTransferNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.MsgClient.prototype.transferNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Msg/TransferNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferNFT,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.MsgTransferNFT} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.MsgTransferNFTResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.MsgPromiseClient.prototype.transferNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Msg/TransferNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.MsgBurnNFT,
 *   !proto.uptick.collection.v1.MsgBurnNFTResponse>}
 */
const methodDescriptor_Msg_BurnNFT = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Msg/BurnNFT',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.MsgBurnNFT,
  proto.uptick.collection.v1.MsgBurnNFTResponse,
  /**
   * @param {!proto.uptick.collection.v1.MsgBurnNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.MsgBurnNFTResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.MsgBurnNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.MsgBurnNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.MsgBurnNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.MsgClient.prototype.burnNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Msg/BurnNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnNFT,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.MsgBurnNFT} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.MsgBurnNFTResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.MsgPromiseClient.prototype.burnNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Msg/BurnNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.collection.v1.MsgTransferDenom,
 *   !proto.uptick.collection.v1.MsgTransferDenomResponse>}
 */
const methodDescriptor_Msg_TransferDenom = new grpc.web.MethodDescriptor(
  '/uptick.collection.v1.Msg/TransferDenom',
  grpc.web.MethodType.UNARY,
  proto.uptick.collection.v1.MsgTransferDenom,
  proto.uptick.collection.v1.MsgTransferDenomResponse,
  /**
   * @param {!proto.uptick.collection.v1.MsgTransferDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.collection.v1.MsgTransferDenomResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.collection.v1.MsgTransferDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.collection.v1.MsgTransferDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.collection.v1.MsgTransferDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.collection.v1.MsgClient.prototype.transferDenom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.collection.v1.Msg/TransferDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferDenom,
      callback);
};


/**
 * @param {!proto.uptick.collection.v1.MsgTransferDenom} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.collection.v1.MsgTransferDenomResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.collection.v1.MsgPromiseClient.prototype.transferDenom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.collection.v1.Msg/TransferDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferDenom);
};


module.exports = proto.uptick.collection.v1;

