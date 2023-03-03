let contract = {};

async function erc20Token() {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // console.log(provider);

  // MetaMask requires requesting permission to connect users accounts
  await provider.send("eth_requestAccounts", []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();
  let addressOfUser = await signer.getAddress();

  const resourceAddress = "0x3F02AB5070a36958BA968EbcAB438B220ccC7E78";
  const response = await fetch("./contractABI.json");
  const basicMarketPlaceArtifact = await response.json();
  console.log(basicMarketPlaceArtifact);
  let getJson = function () {
    contract = new ethers.Contract(
      resourceAddress,
      basicMarketPlaceArtifact.abi,
      signer
    );
  };
  getJson();
  console.log(contract);
  contract.getOwner().then((add)=>{
    document.getElementById('contractOwner').innerHTML = add;
  })
document.getElementById('getOwnership').addEventListener('click',()=>{
    contract.transferOwnership(addressOfUser);
     contract.getOwner().then((add) => {
       document.getElementById("contractOwner").innerHTML = add;
     });
});
document.getElementById('mint').addEventListener('click',()=>{
    contract.mint(100);
});
document.getElementById('totalSupply').addEventListener('click',()=>{
contract.totalCoinSupply().then((val) => {
    document.getElementById("totalCoin").innerHTML = val.toString();
});
});
  
}
erc20Token();