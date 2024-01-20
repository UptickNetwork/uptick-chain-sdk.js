const {
    getWallet,
    rpcEndpoint,
    sendMsgsTx
} = require("./helper");

describe('transfer',  ()=> {

    beforeEach(function () {

    });

    describe('sendTokens()', async () => {
        it('sendTokens', async () => {

            try{

                const wallet = await getWallet();
                const accounts = await wallet.getAccounts();

               
                // const contractAddress = "uptick14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s59l95g"
                // const tokenId = "in01"
                // const classId = ""
                // const nftId = ""
                // const receiver = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx";
                // const sender = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx"


                const contractAddress = "uptick14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s59l95g"
                const tokenId = "in01"
                const sourcePort = "nft-transfer"
                const sourceChannel = "channel-0"
                const classId = ""
                const nftId = ""
                const sender = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx"
                const receiver = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx";
                const timeHeigth = 0;
                const timespan = (Date.now() + 60000) * 1000000;
                const memo = "abc";


                let msg =  {
                    typeUrl:"/uptick.cw721.v1.MsgTransferCW721",
                    value:[ contractAddress,tokenId,sourcePort,sourceChannel,classId,nftId,sender,receiver,timeHeigth,timespan,memo]
                }
            
                const result = await sendMsgsTx(wallet,accounts[0].address, [msg], "1000000", "0x1234");
                console.log(result);

            }catch(error){
                console.error(error)
            }
        });



    });


});

//     option (gogoproto.equal) = false;
//     option (gogoproto.goproto_getters) = false;
  
//     string cw_contract_address = 1;
//     // tokenID to convert
//     string cw_token_ids = 2;
  
//     // the port on which the packet will be sent
//     string source_port = 3;
//     // the channel by which the packet will be sent
//     string source_channel = 4;
//     // the class_id of tokens to be transferred
//     string class_id = 5;
//     // the non fungible tokens to be transferred
//     string cosmos_token_ids = 6;
//     // the sender address
//     string cw_sender = 7;
//     // the recipient address on the destination chain
//     string cosmos_receiver = 8;
//     // Timeout height relative to the current block height.
//     // The timeout is disabled when set to 0.
//     uint64 timeout_height = 9;
//     // Timeout timestamp in absolute nanoseconds since unix epoch.
//     // The timeout is disabled when set to 0.
//     uint64 timeout_timestamp = 10;
//     // optional memo
//     string memo = 11;
