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

               
                const classId = "dog"
                const nftId = "in01"
                const contractAddress = ""
                const tokenId = ""

                const receiver = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx";
                const sender = "uptick100s3yp8l3atuuvx98jmftttxzy4ee5mg2n79fx"

                let msg =  {
                    typeUrl:"/uptick.cw721.v1.MsgConvertNFT",
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

