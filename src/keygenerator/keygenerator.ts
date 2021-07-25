import * as elliptic from "elliptic";

const EC = elliptic.ec;
const ec = new EC("secp256k1");

interface Keygenerator {
  key: elliptic.ec.KeyPair;
}

class Keygenerator {
  // Generate a new key pair and convert them to hex-strings
  constructor() {
    this.key = ec.genKeyPair();
  }

  public publicKey(): string {
    return this.key.getPublic("hex");
  }

  public privateKey(): string {
    return this.key.getPrivate("hex");
  }
}

export default Keygenerator;
