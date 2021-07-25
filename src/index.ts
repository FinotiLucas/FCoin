import Blockchain from "./classes/blockchain";
import Transaction from "./classes/transaction";

import * as elliptic from "elliptic";
import Keygenerator from "./keygenerator/keygenerator";

const EC = elliptic.ec;
const ec = new EC("secp256k1");
const fCoin = new Blockchain();

for (let i = 0; i < 100; i++) {
  // Your private key goes here
  const privateKey = new Keygenerator();
  const myKey = ec.keyFromPrivate(privateKey.privateKey());
  // From that we can calculate your public key (which doubles as your wallet address)
  const myWalletAddress = myKey.getPublic("hex");

  // Create new instance of Blockchain class

  // Create a transaction & sign it with your key
  const tx1 = new Transaction(myWalletAddress, "address2", 55);
  tx1.signTransaction(myKey);
  fCoin.addTransaction(tx1);
  fCoin.minePendingTransactions(myWalletAddress);
}

console.log(fCoin.chain);
