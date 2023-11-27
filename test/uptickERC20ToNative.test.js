/* External Imports */
const chai = require('chai')
const { expect } = chai

const {
  DirectSecp256k1HdWallet,
} = require('../packages/proto-signing')

const { Hash, Mnemonic, PrivKeySecp256k1 } = require("@keplr-wallet/crypto");

const { Wallet } = require ('@ethersproject/wallet')

const {

  VAL_MNEMONIC_1,
  VAL_MNEMONIC_2,
  DEMO_MNEMONIC_1,
  DEMO_MNEMONIC_2,
  RLY_MNEMONIC_1,
  RLY_MNEMONIC_2,
  make60Path
} = require("./helper")


describe(`main process`, () => {

  let walletVal1;
  before(`init account info `, async () => {

    // Wallet.fromMnemonic

    // walletVal1 = await Wallet.fromMnemonic(VAL_MNEMONIC_1,
    //   {
    //     hdPaths: [make60Path()],
    //     prefix: "uptick",
    //   });

    // walletVal1 = await DirectSecp256k1HdWallet.fromMnemonic(VAL_MNEMONIC_1,
    //   {
    //     algo:"ethsecp256k1",
    //     hdPaths: [make60Path()],
    //     prefix: "uptick",
    //   });

    walletVal1 = await Mnemonic.generateWalletFromMnemonic(VAL_MNEMONIC_1);
    console.log(walletVal1);

  })

  it('regeister domain paid by usdt and get Domain address', async function () {
    console.log("2");
  })




})





