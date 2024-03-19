import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino, StdFee } from "@cosmjs/amino";
import { fromBase64 } from "@cosmjs/encoding";
import { Int53, Uint53 } from "@cosmjs/math";

//xxl swift package
import {
  EncodeObject,
  encodePubkey,
  GeneratedType,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject,
} from "@uptickjs/proto-signing";

//xxl swift local
// import {
//   EncodeObject,
//   encodePubkey,
//   GeneratedType,
//   isOfflineDirectSigner,
//   makeAuthInfoBytes,
//   makeSignDoc,
//   OfflineSigner,
//   Registry,
//   TxBodyEncodeObject,
// } from "../../proto-signing";

import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { assert, assertDefined } from "@cosmjs/utils";
import { MsgExec, MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { MsgMultiSend, MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { VoteOption, WeightedVoteOption } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
} from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { MsgDeposit, MsgSubmitProposal, MsgVote } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import {
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import {
  MsgAcknowledgement,
  MsgChannelCloseConfirm,
  MsgChannelCloseInit,
  MsgChannelOpenAck,
  MsgChannelOpenConfirm,
  MsgChannelOpenInit,
  MsgChannelOpenTry,
  MsgRecvPacket,
  MsgTimeout,
  MsgTimeoutOnClose,
} from "cosmjs-types/ibc/core/channel/v1/tx";
import { Height } from "cosmjs-types/ibc/core/client/v1/client";
import {
  MsgCreateClient,
  MsgSubmitMisbehaviour,
  MsgUpdateClient,
  MsgUpgradeClient,
} from "cosmjs-types/ibc/core/client/v1/tx";
import {
  MsgConnectionOpenAck,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
} from "cosmjs-types/ibc/core/connection/v1/tx";

//xxl ## import 
//const nft_tx_pb= require( './proto-types/uptick/collection/v1/tx_pb');
//const nft_tx_pb = require( '../../proto-types/uptick/collection/v1/tx_pb');
const nft_tx_pb = require("@uptickjs/proto-types/src/uptick/collection/v1/tx_pb");

//xxl ## add erc20 convert msg 0622
const erc20_tx_pb = require("@uptickjs/proto-types/src/uptick/erc20/v1/tx_pb");

//xxl 02 local
// const erc721_tx_pb = require("../../proto-types/src/uptick/erc721/v1/tx_pb")
//xxl 02 npm
const erc721_tx_pb = require("@uptickjs/proto-types/src/uptick/erc721/v1/tx_pb")

//xxl 02 local
// const nft_transfer_tx_pb = require("../../proto-types/src/ibc/applications/nft_transfer/v1/tx_pb")
//xxl 02 npm
const nft_transfer_tx_pb = require("@uptickjs/proto-types/src/ibc/applications/nft_transfer/v1/tx_pb")

//xxl 03
const cw721_tx_pb = require("@uptickjs/proto-types/src/uptick/cw721/v1/tx_pb")


import Long from "long";

import { AminoTypes } from "./aminotypes";
import {
  MsgDelegateEncodeObject,
  MsgSendEncodeObject,
  MsgTransferEncodeObject,
  MsgUndelegateEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
  MsgVoteEncodeObject,
} from "./encodeobjects";
import { calculateFee, GasPrice } from "./fee";
import { DeliverTxResponse, StargateClient } from "./stargateclient";

export const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmos.authz.v1beta1.MsgExec", MsgExec],
  ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],
  ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],
  ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
  ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
  ["/cosmos.base.v1beta1.Coin", Coin],
  ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool],
  ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress],
  ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward],
  ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission],
  ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance],
  ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance],
  ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit],
  ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.gov.v1beta1.MsgVote", MsgVote],
  ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
  ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
  ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
  ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
  ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate],
  ["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer],
  ["/ibc.core.channel.v1.MsgAcknowledgement", MsgAcknowledgement],
  ["/ibc.core.channel.v1.MsgChannelCloseConfirm", MsgChannelCloseConfirm],
  ["/ibc.core.channel.v1.MsgChannelCloseInit", MsgChannelCloseInit],
  ["/ibc.core.channel.v1.MsgChannelOpenAck", MsgChannelOpenAck],
  ["/ibc.core.channel.v1.MsgChannelOpenConfirm", MsgChannelOpenConfirm],
  ["/ibc.core.channel.v1.MsgChannelOpenInit", MsgChannelOpenInit],
  ["/ibc.core.channel.v1.MsgChannelOpenTry", MsgChannelOpenTry],
  ["/ibc.core.channel.v1.MsgRecvPacket", MsgRecvPacket],
  ["/ibc.core.channel.v1.MsgTimeout", MsgTimeout],
  ["/ibc.core.channel.v1.MsgTimeoutOnClose", MsgTimeoutOnClose],
  ["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient],
  ["/ibc.core.client.v1.MsgSubmitMisbehaviour", MsgSubmitMisbehaviour],
  ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient],
  ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient],
  ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck],
  ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", MsgConnectionOpenConfirm],
  ["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit],
  ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry],

  //xxl 01 list 
  ["/uptick.collection.v1.MsgIssueDenom", nft_tx_pb.MsgIssueDenom],
  ["/uptick.collection.v1.MsgMintNFT", nft_tx_pb.MsgMintNFT],
  ["/uptick.collection.v1.MsgTransferNFT", nft_tx_pb.MsgTransferNFT],
  ["/uptick.collection.v1.MsgTransferDenom", nft_tx_pb.MsgTransferDenom],

  ["/uptick.erc20.v1.MsgConvertERC20", erc20_tx_pb.MsgConvertERC20],
  ["/uptick.erc20.v1.MsgConvertCoin", erc20_tx_pb.MsgConvertCoin],
  ["/uptick.erc20.v1.MsgTransferERC20", erc20_tx_pb.MsgTransferERC20],

  //xxl 02 list 
  ["/uptick.erc721.v1.MsgConvertERC721", erc721_tx_pb.MsgConvertERC721],
  ["/uptick.erc721.v1.MsgConvertNFT", erc721_tx_pb.MsgConvertNFT],
  ["/uptick.erc721.v1.MsgTransferERC721", erc721_tx_pb.MsgTransferERC721],

  //xxl 03 list 
  ["/ibc.applications.nft_transfer.v1.MsgTransfer", nft_transfer_tx_pb.MsgTransfer],

  //xxl 04 list 
  ["/uptick.cw721.v1.MsgConvertCW721", cw721_tx_pb.MsgConvertCW721],
  ["/uptick.cw721.v1.MsgConvertNFT", cw721_tx_pb.MsgConvertNFT],
  ["/uptick.cw721.v1.MsgTransferCW721", cw721_tx_pb.MsgTransferCW721],

];

function createDefaultRegistry(): Registry {
  return new Registry(defaultRegistryTypes);
}

/**
 * Signing information for a single signer that is not included in the transaction.
 *
 * @see https://github.com/cosmos/cosmos-sdk/blob/v0.42.2/x/auth/signing/sign_mode_handler.go#L23-L37
 */
export interface SignerData {
  readonly accountNumber: number;
  readonly sequence: number;
  readonly chainId: string;
}

/** Use for testing only */
export interface PrivateSigningStargateClient {
  readonly registry: Registry;
}

export interface SigningStargateClientOptions {
  readonly registry?: Registry;
  readonly aminoTypes?: AminoTypes;
  readonly prefix?: string;
  readonly broadcastTimeoutMs?: number;
  readonly broadcastPollIntervalMs?: number;
  readonly gasPrice?: GasPrice;
}

export class SigningStargateClient extends StargateClient {
  public readonly registry: Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  private readonly signer: OfflineSigner;
  private readonly aminoTypes: AminoTypes;
  private readonly gasPrice: GasPrice | undefined;

  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<SigningStargateClient> {
    const tmClient = await Tendermint37Client.connect(endpoint);
    return new SigningStargateClient(tmClient, signer, options);
  }

  /**
   * Creates a client in offline mode.
   *
   * This should only be used in niche cases where you know exactly what you're doing,
   * e.g. when building an offline signing application.
   *
   * When you try to use online functionality with such a signer, an
   * exception will be raised.
   */
  public static async offline(
    signer: OfflineSigner,
    options: SigningStargateClientOptions = {},
  ): Promise<SigningStargateClient> {
    return new SigningStargateClient(undefined, signer, options);
  }

  protected constructor(
    tmClient: Tendermint37Client | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
  ) {
    super(tmClient);
    // TODO: do we really want to set a default here? Ideally we could get it from the signer such that users only have to set it once.
    const prefix = options.prefix ?? "cosmos";
    const { registry = createDefaultRegistry(), aminoTypes = new AminoTypes({ prefix }) } = options;
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.gasPrice = options.gasPrice;
  }

  public async simulate(
    signerAddress: string,
    messages: readonly EncodeObject[],
    memo: string | undefined,
  ): Promise<number> {
    const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodeSecp256k1Pubkey(accountFromSigner.pubkey);
    const { sequence } = await this.getSequence(signerAddress);
    const { gasInfo } = await this.forceGetQueryClient().tx.simulate(anyMsgs, memo, pubkey, sequence);
    assertDefined(gasInfo);
    return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
  }

  public async sendTokens(
    senderAddress: string,
    recipientAddress: string,
    amount: readonly Coin[],
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
    const sendMsg: MsgSendEncodeObject = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: senderAddress,
        toAddress: recipientAddress,
        amount: [...amount],
      },
    };
    return this.signAndBroadcast(senderAddress, [sendMsg], fee, memo);
  }

  //xxl #### public async sendMsgsTx
  public async sendMsgsTx(
    senderAddress: string,
    sendMsgs:[MsgSendEncodeObject],
    fee: StdFee | "auto" | number,
    memo = "",
  ){
    console.log("xxl test ");
    return this.signAndBroadcast(senderAddress,sendMsgs, fee, memo);
  }

  public async delegateTokens(
    delegatorAddress: string,
    validatorAddress: string,
    amount: Coin,
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
    const delegateMsg: MsgDelegateEncodeObject = {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
        amount: amount,
      }),
    };


    return this.signAndBroadcast(delegatorAddress, [delegateMsg], fee, memo);
  }
  public async reDelegateTokens(
    delegatorAddress: string,
    validatorSrcAddress: string,
	validatorDstAddress: string,
    amount: Coin,
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
    const reDelegateMsg: EncodeObject = {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorSrcAddress: validatorSrcAddress,
		validatorDstAddress: validatorDstAddress,
        amount: amount,
      }),
    };
  
		
		
  
    return this.signAndBroadcast(delegatorAddress, [reDelegateMsg], fee, memo);
  }


  public async undelegateTokens(
    delegatorAddress: string,
    validatorAddress: string,
    amount: Coin,
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
    const undelegateMsg: MsgUndelegateEncodeObject = {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
        amount: amount,
      }),
    };
    return this.signAndBroadcast(delegatorAddress, [undelegateMsg], fee, memo);
  }

  public async withdrawRewards(
    delegatorAddress: string,
    validatorAddress: string,
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
    const withdrawMsg: MsgWithdrawDelegatorRewardEncodeObject = {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
      }),
    };
    return this.signAndBroadcast(delegatorAddress, [withdrawMsg], fee, memo);
  }
  public async withdrawRewardsAll(
    delegatorAddress: string,
    validatorAddressList: string[],
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
	  
	  let withdrawMsgs:MsgWithdrawDelegatorRewardEncodeObject[]=[];
	  validatorAddressList.forEach(validatorAddress=>{
		  const withdrawMsg: MsgWithdrawDelegatorRewardEncodeObject = {
		    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
		    value: MsgWithdrawDelegatorReward.fromPartial({
		      delegatorAddress: delegatorAddress,
		      validatorAddress: validatorAddress,
		    }),
		  };
		  withdrawMsgs.push(withdrawMsg);
	  })

    return this.signAndBroadcast(delegatorAddress, withdrawMsgs, fee, memo);
  }


  public async vote(
    voterAddress: string,
    proposalId: Long,
	option:VoteOption,
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
	  
	  // VOTE_OPTION_UNSPECIFIED = 0,
	  // VOTE_OPTION_YES = 1,
	  // VOTE_OPTION_ABSTAIN = 2,
	  // VOTE_OPTION_NO = 3,
	  // VOTE_OPTION_NO_WITH_VETO = 4,
	  // UNRECOGNIZED = -1
    const voteMsg: MsgVoteEncodeObject = {
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: MsgVote.fromPartial({
        proposalId: proposalId,
         voter: voterAddress,
		 option:option
      }),
    };

	
    return this.signAndBroadcast(voterAddress, [voteMsg], fee, memo);
  }
  

  public async sendIbcTokens(
    senderAddress: string,
    recipientAddress: string,
    transferAmount: Coin,
    sourcePort: string,
    sourceChannel: string,
    timeoutHeight: Height | undefined,
    /** timeout in seconds */
    timeoutTimestamp: number | undefined,
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
    const timeoutTimestampNanoseconds = timeoutTimestamp
      ? Long.fromNumber(timeoutTimestamp).multiply(1_000_000_000)
      : undefined;
    const transferMsg: MsgTransferEncodeObject = {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.fromPartial({
        sourcePort: sourcePort,
        sourceChannel: sourceChannel,
        sender: senderAddress,
        receiver: recipientAddress,
        token: transferAmount,
        timeoutHeight: timeoutHeight,
        timeoutTimestamp: timeoutTimestampNanoseconds,
      }),
    };
    return this.signAndBroadcast(senderAddress, [transferMsg], fee, memo);
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number,
    memo = "",
  ): Promise<DeliverTxResponse> {
    let usedFee: StdFee;
    if (fee == "auto" || typeof fee === "number") {
      assertDefined(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
      const gasEstimation = await this.simulate(signerAddress, messages, memo);
      const muliplier = typeof fee === "number" ? fee : 1.3;
      usedFee = calculateFee(Math.round(gasEstimation * muliplier), this.gasPrice);
    } else {
      usedFee = fee;
    }
    const txRaw = await this.sign(signerAddress, messages, usedFee, memo);

    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
  }

  /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData,
  ): Promise<TxRaw> {

    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const { accountNumber, sequence } = await this.getSequence(signerAddress);
      const chainId = await this.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId,
      };
    }

    return isOfflineDirectSigner(this.signer)
      ? this.signDirect(signerAddress, messages, fee, memo, signerData)
      : this.signAmino(signerAddress, messages, fee, memo, signerData);
  }

  private async signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
  ): Promise<TxRaw> {
    assert(!isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const { signature, signed } = await this.signer.signAmino(signerAddress, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence: signedSequence }],
      signed.fee.amount,
      signedGasLimit,
      signMode,
    );
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  private async signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
  ): Promise<TxRaw> {
    assert(isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    if(accountFromSigner.address.indexOf("uptick") != -1){
      pubkey.typeUrl = "/ethermint.crypto.v1.ethsecp256k1.PubKey";
    }
    else{
      pubkey.typeUrl = "/cosmos.crypto.secp256k1.PubKey";
    }

    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo,
      },
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes([{ pubkey, sequence }], fee.amount, gasLimit);
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
    const { signature, signed } = await this.signer.signDirect(signerAddress, signDoc);
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }
}
