/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let Collection_of_nft = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, rarity, creator, dateCreated) {
    let nft = {
        name: name,
        rarity: rarity,
        creator: creator,
        dateCreated: dateCreated
    };
    Collection_of_nft.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    Collection_of_nft.forEach(function(nft) {
        console.log("Name: " + nft.name);
        console.log("Rarity: " + nft.rarity);
        console.log("Creator: " + nft.creator);
        console.log("Date Created: " + nft.dateCreated);
        console.log("-----------------------------");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    // Return the length of the NFT collection
    return Collection_of_nft.length;
}

// call your functions below this line
mintNFT("Lion", "Very Rare", "Ritesh", "2024-01-25");
mintNFT("Monkey", "Common", "Madhav", "2023-04-07");
mintNFT("Horse", "Rare", "Aditya", "2024-02-10");

listNFTs();
console.log("Total NFTs minted: " + getTotalSupply());
