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

               
                const contractAddress = "uptick14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s59l95g"
                const tokenId = "in01"
                const classId = ""
                const nftId = ""
                const receiver = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx";
                const sender = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx"

                let msg =  {
                    typeUrl:"/uptick.cw721.v1.MsgConvertCW721",
                    value:[ contractAddress,tokenId,receiver,sender,classId,nftId]
                }
            
                const result = await sendMsgsTx(wallet,accounts[0].address, [msg], "1000000", "0x1234");
                console.log(result);

            }catch(error){
                console.error(error)
            }
        });



    });


});


// // MsgConvertCW721 defines a Msg to convert a CW721 token to a native Cosmos
// // nft.
// message MsgConvertCW721 {
//     // CW721 token contract address registered in a token pair
//     string contract_address = 1;
//     // tokenID to convert
//     string token_ids = 2;
//     // bech32 address to receive native Cosmos coins
//     string receiver = 3;
//     // sender hex address from the owner of the given CW721 tokens
//     string sender = 4;
//     // nft classID to cnvert to CW721
//     string class_id = 5;
//     // nftID to cnvert to CW721
//     string nft_ids = 6;
//   }