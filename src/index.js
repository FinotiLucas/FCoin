const { Blockchain } = require('./classes/blockchain');
const { Transaction } = require('./classes/transaction');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const myKey = ec.keyFromPrivate('2d338a28a1abbe1927ee018b848ea0936bac3efd46c5ca157e5ab5e1561e3a81');

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const fCoin = new Blockchain();

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 55);
tx1.signTransaction(myKey);
fCoin.addTransaction(tx1);

// Mine block
console.log('\n Starting the miner...');

fCoin.minePendingTransactions(myWalletAddress);

//console.log('\n you have', fCoin.getBalanceOfAddress(myWalletAddress));

console.log(fCoin.chain);