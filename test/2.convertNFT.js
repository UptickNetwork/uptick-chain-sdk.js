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

               
                const classId = "uptick-733CC2C716d495dCd84b737928AA98350CD91afe"
                const nftId = "uptick4"
                const contractAddress = ""
                const tokenId = ""

                const receiver = "0x7bE11204fF8f57ce30C53CB695Ad66112b9Cd368";
                const sender = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx"

                let msg =  {
                    typeUrl:"/uptick.erc721.v1.MsgConvertNFT",
                    value:[ classId,nftId,receiver,sender,contractAddress,tokenId]
                }
            
                const result = await sendMsgsTx(wallet,accounts[0].address, [msg], "1000000", "0x1234");
                console.log(result);

            }catch(error){
                console.error(error)
            }
        });



    });


});


//   // nft classID to cnvert to ERC721
//   string class_id = 1;
//   // nftID to cnvert to ERC721
//   string cosmos_token_ids = 2;
//   // recipient hex address to receive ERC721 token
//   string evm_receiver = 3;
//   // cosmos bech32 address from the owner of the given Cosmos coins
//   string cosmos_sender = 4;
//   // ERC721 token contract address registered in a token pair
//   string evm_contract_address = 5;
//   // ERC721 token id registered in a token pair
//   string evm_token_ids = 6;