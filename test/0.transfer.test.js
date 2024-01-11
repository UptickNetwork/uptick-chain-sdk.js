const {
    getWallet,rpcEndpoint,SigningStargateClient
} = require("./helper");

describe('transfer',  ()=> {

    beforeEach(function () {

    });

    describe('sendTokens()', async () => {
        it('sendTokens', async () => {

            try{

                const wallet = await getWallet();
                const accounts = await wallet.getAccounts();

                const client = await SigningStargateClient.connectWithSigner(
                    rpcEndpoint,
                    wallet
                )
                
                const recipient = "uptick10xj8tc3vx3eqd7mhffmgruakvjckw0nepklgw9";
                const amount = {
                    denom: "auptick",
                    amount: "1000000000000000000",
                };
                const fee = {
                    amount: [
                        {
                            denom: "auptick",
                            amount: "100000000000000000",
                        },
                    ],
                    gas: "6000000", // 180k
                };

                const result = await client.sendTokens(accounts[0].address, recipient, [amount],fee, "");
                console.log(result)

            }catch(error){
                console.error(error)
            }
        });



    });


});

