/**
When the actual link (https://learn-web3-dao-nft-collection-five.vercel.app/api/) 
to our website that stores the api folder is visited
 by opensea or other market places, the link having being stored in the contract,
 this time with the token id added to it is returned in this manner
 https://learn-web3-dao-nft-collection-five.vercel.app/api/1 "1" being the tokenID This token.js file
 code will extract the ID from the url and create a json object for it, which is returned to 
 the market place. 

 So, the marketplace reads tokenURI as https://learn-web3-dao-nft-collection-five.vercel.app/api/1 , 
 the front end the returns a metadata in json format as a result of these code lines 
 written to fetch the ID, create a json object from it and return to the front end.
 
 In the case of IPFS, the tokenURI will be a link to the "folder+tokenID" containing all the JSON objects of each NFT
 
 */
export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://raw.githubusercontent.com/Packagefather/LearnWeb3DAO/main/NFT-Collection/my-app/public/cryptodevs/";
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "Crypto Dev #" + tokenId,
      description: "Crypto Dev is a collection of developers in crypto",
      image: image_url + tokenId + ".svg",
    });
  }