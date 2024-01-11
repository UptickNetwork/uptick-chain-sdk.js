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

                const contractAddress = "0x733CC2C716d495dCd84b737928AA98350CD91afe"
                const tokenId = "4"
                const receiver = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx";
                const sender = "0x7bE11204fF8f57ce30C53CB695Ad66112b9Cd368"
                const classId = ""
                const nftId = ""

                let msg =  {
                    typeUrl:"/uptick.erc721.v1.MsgConvertERC721",
                    value:[ contractAddress,tokenId,receiver,sender, classId,nftId]
                }
            
                const result = await sendMsgsTx(wallet,accounts[0].address, [msg], "1000000", "0x1234");
                console.log(result);

            }catch(error){
                console.error(error)
            }
        });



    });


});


// string evm_contract_address = 1;
// // tokenID to convert
// string evm_token_ids = 2;
// // bech32 address to receive native Cosmos coins
// string cosmos_receiver = 3;
// // sender hex address from the owner of the given ERC721 tokens
// string evm_sender = 4;
// // nft classID to cnvert to ERC721
// string class_id = 5;

// // nftID to cnvert to ERC721
// string cosmos_token_ids = 6;