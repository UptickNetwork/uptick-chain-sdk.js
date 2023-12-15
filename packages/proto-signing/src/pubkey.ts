/* eslint-disable @typescript-eslint/naming-convention */
import {
  encodeSecp256k1Pubkey,
  isMultisigThresholdPubkey,
  isSecp256k1Pubkey,
  MultisigThresholdPubkey,
  Pubkey,
  SinglePubkey
} from "@cosmjs/amino";
import { fromBase64 } from "@cosmjs/encoding";
import { Uint53 } from "@cosmjs/math";
import { LegacyAminoPubKey } from "cosmjs-types/cosmos/crypto/multisig/keys";
import { PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import { Any } from "cosmjs-types/google/protobuf/any";

export function encodePubkey(pubkey: Pubkey): Any {
  if (isSecp256k1Pubkey(pubkey)) {
    const pubkeyProto = PubKey.fromPartial({
      key: fromBase64(pubkey.value),
    });
    return Any.fromPartial({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: Uint8Array.from(PubKey.encode(pubkeyProto).finish()),
    });
  } else if (isMultisigThresholdPubkey(pubkey)) {
    const pubkeyProto = LegacyAminoPubKey.fromPartial({
      threshold: Uint53.fromString(pubkey.value.threshold).toNumber(),
      publicKeys: pubkey.value.pubkeys.map(encodePubkey),
    });
    return Any.fromPartial({
      typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
      value: Uint8Array.from(LegacyAminoPubKey.encode(pubkeyProto).finish()),
    });
  } else {
    throw new Error(`Pubkey type ${pubkey.type} not recognized`);
  }
}

function decodeSinglePubkey(pubkey: Any): SinglePubkey {
  switch (pubkey.typeUrl) {
    case "/ethermint.crypto.v1.ethsecp256k1.PubKey": 
    case "/cosmos.crypto.secp256k1.PubKey": {
      const { key } = PubKey.decode(pubkey.value);

      // console.log("xxl 00 decodeSinglePubkey start ... ");
      // console.log(key);

      let encodePubkey = encodeSecp256k1Pubkey(key);
      // console.log("xxl 00 encodePubkey : " + encodePubkey);

      // console.log("xxl 00 decodeSinglePubkey end ");

      // return encodeSecp256k1Pubkey(key);
      return encodePubkey;
      
    }
    default:
      throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized as single public key type`);
  }
}

export function decodePubkey(pubkey?: Any | null): Pubkey | null {


  if (!pubkey || !pubkey.value) {
    return null;
  }

  // console.log("xxl 00 pubkey.typeUr is 1: " + pubkey.typeUrl);
  // console.log("xxl 00 pubkey is ");
  // console.log(pubkey);

  switch (pubkey.typeUrl) {

    case "/ethermint.crypto.v1.ethsecp256k1.PubKey": 
    case "/cosmos.crypto.secp256k1.PubKey": {
      return decodeSinglePubkey(pubkey);
    }

    case "/cosmos.crypto.multisig.LegacyAminoPubKey": {
      const { threshold, publicKeys } = LegacyAminoPubKey.decode(pubkey.value);
      const out: MultisigThresholdPubkey = {
        type: "tendermint/PubKeyMultisigThreshold",
        value: {
          threshold: threshold.toString(),
          pubkeys: publicKeys.map(decodeSinglePubkey),
        },
      };
      return out;
    }
    default:
      throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized`);
  }
}
