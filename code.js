const crypto = require("crypto");
const bip39 = require("bip39");
const hdkey = require("hdkey");

// Generate 24 bytes of entropy


// Generate the mnemonic words from the entropy



// const hdkey = require("hdkey");
const createHash = require("create-hash");
const ethereumjs = require("ethereumjs-util");
 async function find(){
    const entropy = crypto.randomBytes(16);
const mnemonic1 = bip39.entropyToMnemonic(entropy);

document.getElementById("mnemonic").innerHTML = mnemonic1;
const seed1 = await mnemonicToSeed(mnemonic1);

const root1 = hdkey.fromMasterSeed(seed1);

const addrNode11 = root1.derive("m/44'/60'/0'/0/0");
let privateKey = addrNode11._privateKey.toString("hex");

document.getElementById("privateKey").innerHTML = privateKey;

const pubKey11 = ethereumjs.privateToPublic(addrNode11._privateKey);


const address11 =
  "0x" + ethereumjs.pubToAddress(pubKey11, true).toString("hex");
  document.getElementById("publicKey").innerHTML=address11 ;


console.log("Address 1.1: ", address11);


function mnemonicToSeed(mnemonic) {
  return new Promise((resolve, reject) => {
    const mnemonicBuffer = Buffer.from(mnemonic, "utf8");
    const seed = createHash("sha512").update(mnemonicBuffer).digest();
    resolve(seed);
  });

}
}
  document.getElementById('genkey').addEventListener('click',find);