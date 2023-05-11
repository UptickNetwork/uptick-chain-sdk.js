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


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.uptick = {};
proto.uptick.erc721 = {};
proto.uptick.erc721.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.uptick.erc721.v1.MsgClient =
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
proto.uptick.erc721.v1.MsgPromiseClient =
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
 *   !proto.uptick.erc721.v1.MsgConvertNFT,
 *   !proto.uptick.erc721.v1.MsgConvertNFTResponse>}
 */
const methodDescriptor_Msg_ConvertNFT = new grpc.web.MethodDescriptor(
  '/uptick.erc721.v1.Msg/ConvertNFT',
  grpc.web.MethodType.UNARY,
  proto.uptick.erc721.v1.MsgConvertNFT,
  proto.uptick.erc721.v1.MsgConvertNFTResponse,
  /**
   * @param {!proto.uptick.erc721.v1.MsgConvertNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.erc721.v1.MsgConvertNFTResponse.deserializeBinary
);


/**
 * @param {!proto.uptick.erc721.v1.MsgConvertNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.erc721.v1.MsgConvertNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.erc721.v1.MsgConvertNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.erc721.v1.MsgClient.prototype.convertNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.erc721.v1.Msg/ConvertNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_ConvertNFT,
      callback);
};


/**
 * @param {!proto.uptick.erc721.v1.MsgConvertNFT} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.erc721.v1.MsgConvertNFTResponse>}
 *     Promise that resolves to the response
 */
proto.uptick.erc721.v1.MsgPromiseClient.prototype.convertNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.erc721.v1.Msg/ConvertNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_ConvertNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.uptick.erc721.v1.MsgConvertERC721,
 *   !proto.uptick.erc721.v1.MsgConvertERC721Response>}
 */
const methodDescriptor_Msg_ConvertERC721 = new grpc.web.MethodDescriptor(
  '/uptick.erc721.v1.Msg/ConvertERC721',
  grpc.web.MethodType.UNARY,
  proto.uptick.erc721.v1.MsgConvertERC721,
  proto.uptick.erc721.v1.MsgConvertERC721Response,
  /**
   * @param {!proto.uptick.erc721.v1.MsgConvertERC721} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.uptick.erc721.v1.MsgConvertERC721Response.deserializeBinary
);


/**
 * @param {!proto.uptick.erc721.v1.MsgConvertERC721} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.uptick.erc721.v1.MsgConvertERC721Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.uptick.erc721.v1.MsgConvertERC721Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.uptick.erc721.v1.MsgClient.prototype.convertERC721 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/uptick.erc721.v1.Msg/ConvertERC721',
      request,
      metadata || {},
      methodDescriptor_Msg_ConvertERC721,
      callback);
};


/**
 * @param {!proto.uptick.erc721.v1.MsgConvertERC721} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.uptick.erc721.v1.MsgConvertERC721Response>}
 *     Promise that resolves to the response
 */
proto.uptick.erc721.v1.MsgPromiseClient.prototype.convertERC721 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/uptick.erc721.v1.Msg/ConvertERC721',
      request,
      metadata || {},
      methodDescriptor_Msg_ConvertERC721);
};


module.exports = proto.uptick.erc721.v1;

