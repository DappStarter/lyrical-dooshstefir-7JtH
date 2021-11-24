require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth museum unknown inflict drum tackle slogan'; 
let testAccounts = [
"0xd454ca233426f7dd9cac4d88a4bf12adc033b6a376521801984569c3026c128c",
"0x1b024c888b81bcbff1f94e867c41290d53f96dfcec400227746158b601dc98b0",
"0x7482b4ef4baab0488c2f5eeb4e6cabb3e2e5b9e272e1c7508ab0ade31996386f",
"0xffb7e4be9c95c03127274375d473640b03d73e394dad6347a864b6593866ad3d",
"0xf103fa21dac37e0805a86449a7a61b83d62107f047f15fcd831a4a78c3c6d731",
"0xb3d15e2da57ea535f68ea1afa3d7ea3db6b942fbeee248a595123af755d8cb70",
"0x0177ad3be8a7250cb51f4b191d23d62ecc53cc2bbaa0026e66bf2e8e7da5b187",
"0xe10b97852c7a9924015d2fe21e16d3b13e34422c2043a2dc20985bf7e8fa8fd4",
"0x2e5e85340c47418380e08fa42e9a80cf3fb31b45dd23bbd0bea65379cb9ac0d9",
"0xe9143d885feb54f1c5585c7623a7406cb315dd6092df72d8160710510ae48824"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


