require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note oven essay inflict narrow fresh tent'; 
let testAccounts = [
"0xe8cdf1c9e510e4f92bbb5154c505f27662e46ae180d831a5a99f7ee12b1125b8",
"0x6ce78c0e538164c23ded5d145de10967ffee9b7e62e37e19c1738aec0d7e4fcb",
"0xf9004e8c1a21ded35debcae63492af93836c85f7230856e5e6a3d004b8727ba5",
"0x4cfa1a44fc3a5a458ff39303e7efc6105e424a06c5bcdea4234a4ad219768ef6",
"0x5a7104e711ec7928675321a448b2f452e4b42fd0df621904a366b37552f8eb8b",
"0x8f444e0a808259ccde20bd775c2894a0b69b2530c12a39388c30f3f8c96943ca",
"0x343e829173f319eb4b38cd974b023eac64139f714dfff98552cbaa7b0d6ff7e2",
"0xfde3fa5d1044dbcff815bebcbdb6a7875aabeb9c7a16b88fbd97210c72db9cde",
"0x85164fda5eb90b494826eac5756d8a42ea97a13cf45d92f970a9ef82636a8550",
"0x43f4cf4f4925b355acc8168bf88fd1e59ab93f3f19168c4ec507c7b550121acf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
