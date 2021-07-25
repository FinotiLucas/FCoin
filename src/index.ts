import Blockchain from "./classes/blockchain";
import Transaction from "./classes/transaction";

import * as elliptic from "elliptic";
import Keygenerator from "./keygenerator/keygenerator";

const EC = elliptic.ec;
const ec = new EC("secp256k1");
const fCoin = new Blockchain();

for (let i = 0; i < 100; i++) {
  const privateKey = new Keygenerator();
  const myKey = ec.keyFromPrivate(privateKey.privateKey());
  const myWalletAddress = myKey.getPublic("hex");
  const value: number = Math.floor(Math.random() * 1000000 + 1);

  const tx1 = new Transaction(
    myWalletAddress,
    ec.genKeyPair().getPublic("hex"),
    value
  );

  tx1.signTransaction(myKey);

  for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
    fCoin.addTransaction(tx1);
  }

  fCoin.minePendingTransactions(myWalletAddress);
}

console.log(fCoin.chain);
