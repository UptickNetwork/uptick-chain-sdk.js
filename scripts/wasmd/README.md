# Local Stargate development network with CosmWasm support

## Starting the blockchain

Run the following:

```
cd scripts/wasmd
./start.sh && ./init.sh
```

## CLI

Docker-friendly access to `wasmd` is provided. Just use the `./cli.sh` script.
For example:

```
./cli.sh status
```

This should give you output similar to the following if your blockchain is
running:

```json
{
  "node_info": {
    "protocol_version": { "p2p": "7", "block": "10", "app": "0" },
    "id": "223aedddd9442bcf16641858ca85837f27997d0d",
    "listen_addr": "tcp://0.0.0.0:26656",
    "network": "testing",
    "version": "0.32.2",
    "channels": "4020212223303800",
    "moniker": "testing",
    "other": { "tx_index": "on", "rpc_address": "tcp://127.0.0.1:26657" }
  },
  "sync_info": {
    "latest_block_hash": "3E3BEBCFA4E47BC67C7DE44DD4E83D8D42235DE75DA942A6BECD1F0F5A6246E4",
    "latest_app_hash": "73A3641BDEFBB728B1B48FB87B510F3E76E3B4519BC4954C6E1060738FCE8B14",
    "latest_block_height": "1217",
    "latest_block_time": "2019-09-26T15:44:13.0111312Z",
    "catching_up": false
  },
  "validator_info": {
    "address": "3A7EBE1A9E333146AE5D9FCB765B88BDD4D2859A",
    "pub_key": {
      "type": "tendermint/PubKeyEd25519",
      "value": "3ZYx1HKwT/llXzYC2yVeWEiWHd6uBQ7Bi7jiDFczx28="
    },
    "voting_power": "100"
  }
}
```

## Adding the validator key to your keybase

The Cosmos test network is initialised with a validator (see
`.gaiad/config/genesis.json`). This validator has the following mnemonic:

```
economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone
```

To add the validator key to your local keybase run the following, choose an
encryption passphrase (e.g. `testing123`) and enter the above mnemonic when
prompted:

```
./cli.sh keys add validator --recover
```

You should get output matching the following:

```
- name: validator
  type: local
  address: cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6
  pubkey: cosmospub1addwnpepqd8sgxq7aw348ydctp3n5ajufgxp395hksxjzc6565yfp56scupfqhlgyg5
  mnemonic: ""
  threshold: 0
  pubkeys: []
```

## Preset accounts

1. **Faucet**<br>
   economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone<br>
   Address 0: wasm1pkptre7fdkl6gfrzlesjjvhxhlc3r4gm32kke3<br>
   Address 1: wasm10dyr9899g6t0pelew4nvf4j5c3jcgv0r5d3a5l<br>
   Address 2: wasm1xy4yqngt0nlkdcenxymg8tenrghmek4n3u2lwa<br>
   Address 3: wasm142u9fgcjdlycfcez3lw8x6x5h7rfjlnfaallkd<br>
   Address 4: wasm1hsm76p4ahyhl5yh3ve9ur49r5kemhp2r93f89d<br>
   Pubkey 0: A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ<br>
   Pubkey 1: AiDosfIbBi54XJ1QjCeApumcy/FjdtF+YhywPf3DKTx7<br>
   Pubkey 2: AzQg33JZqH7vSsm09esZY5bZvmzYwE/SY78cA0iLxpD7<br>
   Pubkey 3: A3gOAlB6aiRTCPvWMQg2+ZbGYNsLd8qlvV28m8p2UhY2<br>
   Pubkey 4: Aum2063ub/ErUnIUB36sK55LktGUStgcbSiaAnL1wadu
2. **Alice**: Test account for the cosmwasm package that can run in parallel with faucet without sequence conflicts<br>
   enlist hip relief stomach skate base shallow young switch frequent cry park<br>
   Address 0: wasm14qemq0vw6y3gc3u3e0aty2e764u4gs5lndxgyk<br>
   Address 1: wasm1hhg2rlu9jscacku2wwckws7932qqqu8xm5ca8y<br>
   Address 2: wasm1xv9tklw7d82sezh9haa573wufgy59vmwnxhnsl<br>
   Address 3: wasm17yg9mssjenmc3jkqth6ulcwj9cxujrxxg9nmzk<br>
   Address 4: wasm1f7j7ryulwjfe9ljplvhtcaxa6wqgula3nh873j<br>
   Pubkey 0: A9cXhWb8ZpqCzkA8dQCPV29KdeRLV3rUYxrkHudLbQtS<br>
   Pubkey 1: A4XluzvcUx0ViLF0DjYW5/noArGwpltDstoUUZo+g1b0<br>
   Pubkey 2: A5TKr1NKc/MKRJ7+EHDD9PlzmGaPD/di/6hzZyBwxoy5<br>
   Pubkey 3: A/HSABDUqMB2qDy+PA7fiuuuA+hfrco2VwwiThMiTzUx<br>
   Pubkey 4: A7usTiqgqfxL/WKhoephDUSCHBQlLagtwI/qTmEteTRM
3. **Bob**: Test account (unused for now)<br>
   remain fragile remove stamp quiz bus country dress critic mammal office need<br>
   Address 0: wasm1lvrwcvrqlc5ktzp2c4t22xgkx29q3y83426at5<br>
   Address 1: wasm1vkv9sfwaak76weyamqx0flmng2vuquxqjq3flu<br>
   Address 2: wasm106jwym4s9aujcmes26myzzwqsccw09sd3nap5h<br>
   Address 3: wasm1c7wpeen2uv8thayf7g8q2rgpm29clj0dzlu7t9<br>
   Address 4: wasm1mjxpv9ft30wer7ma7kwfxhm42l379xuttrjcl3<br>
   Pubkey 0: A0d/GxY+UALE+miWJP0qyq4/EayG1G6tsg24v+cbD6By<br>
   Pubkey 1: Agqd6njsVEQD1CR+F2aqEb8hil5NXZ06mjKgetaNC12t<br>
   Pubkey 2: A6e9ElvKaM0DKWh1bIdK3bgB14dyEDgIXYMA0Lbs1GoQ<br>
   Pubkey 3: AkAK5PQaucieWMb0+tTRY01feYI+upRnoNK556eD0Ibb<br>
   Pubkey 4: A5HMVEAJsupdQWItbZv5Z1xZifDixQi6tjU/hJpZY1bF
4. **Unused**: for testing account state; this account never changes balances or sequences<br>
   oyster design unusual machine spread century engine gravity focus cave carry slot<br>
   ArkCaFUJ/IH+vKBmNRCdUVl3mCAhbopk9jjW4Ko4OfRQ<br>
   wasm1cjsxept9rkggzxztslae9ndgpdyt240842kpxh
5. **Guest**: account for manual testing<br>
   degree tackle suggest window test behind mesh extra cover prepare oak script<br>
   Am/+YV0LaeqQPu7BDJuDHV7J8y68ptkGs10YS+9s71Nq<br>
   wasm17d0jcz59jf68g52vq38tuuncmwwjk42us8fnse
6. **Ledger**: accounts for Ledger based demos and tests<br>
   example indicate trick cereal hub fix civil host kiss version bird dash<br>
   Address 0: wasm1p6xs63q4g7np99ttv5nd3yzkt8n4qxa45jkgsk<br>
   Address 1: wasm1meeu3jl268txxytwmmrsljk8rawh6n2mhwp76p<br>
   Address 2: wasm1cak6lnpfxs035xd88sq8e4zujsm8g2g953hfan<br>
   Address 3: wasm1x3x8kyypx8z6q7fx3gw65x29mhl5gg8qtf4xkg<br>
   Address 4: wasm18c27m2rj4lg74md03ujralvt562c097nd7scqw<br>
   Address 5: wasm1q2y53e6x7s5mlddtd2qkcjr3nwr4dszvs4js2q<br>
   Address 6: wasm1paa2gstlk7c98n27dw2g6tp6fyqvf32m3x04t6<br>
   Address 7: wasm1rvxjd8k6xvssz2eerfzemvat35pttfgrsz43tx<br>
   Address 8: wasm12zejt8d9xl70jd2333p4p265m2nr9h8g6pgmly<br>
   Address 9: wasm1exctm2036jtwyc9v3ftqfzmgnv9tdhj2sskt4u<br>
   Address 10: wasm1f3pws3ztnp3s4nn5zxqdrl9vlqv5avkq3rjfe7<br>
   Pubkey 0: A66JoCNaNSXDsyj4qW7JgqXPTz5rOnfE6EKEArf4jJEK<br>
   Pubkey 1: AtvmGuZvEN3NwL05BQdxl3XygUf+Vl/930fhFMt1HTyU<br>
   Pubkey 2: A58dfmfVoKoTCteEzTHBC0OLJIBgzejGDVVEb8YW9vtJ<br>
   Pubkey 3: A1wA01EixwcWJkdhI69ckGuQDX0NimhLCYdrQCegkOJF<br>
   Pubkey 4: A9juq+VbP26qtVh71ANlwwJQ+ABTWIyHEKYrVwjmbYE6<br>
   Pubkey 5: Ar4VUqiRYl75+TF3AExX8at3deeLj2O9mNMtBq2aVpym<br>
   Pubkey 6: Ak/JoSXzu6+Rp2W0wT6CqfZfzlDOwebl7xVF/zmKX99Y<br>
   Pubkey 7: AtmLZZGHeCiNuroPAzBK2NKeXKT68SwioLj4I8Oj35Mn<br>
   Pubkey 8: AuaUr9GEMUBKeZrJD/dv9QL/zJmMxX7OA/sjRrvBFXS2<br>
   Pubkey 9: AiV5uMzvzoD7hlF+GhYuRCnf8tP+0AlPMbtfVoYv3InI<br>
   Pubkey 10: A2ZnLEcbpyjS30H5UF1vezq29aBcT9oo5EARATIW9Cpj
