// Define an array to hold NFT objects
let Collection_of_nft = [];

// Function to mint a new NFT and store its metadata
function mintNFT(name, rarity, creator, dateCreated) {
    // Create a new NFT object
    let nft = {
        name: name,
        rarity: rarity,
        creator: creator,
        dateCreated: dateCreated
    };
    // Store the new NFT object in the collection
    Collection_of_nft.push(nft);
}

// Function to list all NFTs' metadata
function listNFTs() {
    // Loop through each NFT in the collection
    Collection_of_nft.forEach(function(nft) {
        // Print metadata for each NFT
        console.log("Name: " + nft.name);
        console.log("Rarity: " + nft.rarity);
        console.log("Creator: " + nft.creator);
        console.log("Date Created: " + nft.dateCreated);
        console.log("-----------------------------");
    });
}

// Function to get the total number of minted NFTs
function getTotalSupply() {
    // Return the length of the NFT collection
    return Collection_of_nft.length;
}

// Demonstrate functionality by minting some NFTs and listing them
mintNFT("Lion", "Very Rare", "Ritesh", "2024-01-25");
mintNFT("Monkey", "Common", "Madhav", "2023-04-07");
mintNFT("Horse", "Rare", "Aditya", "2024-02-10");

// List all minted NFTs
listNFTs();
// Print the total number of minted NFTs
console.log("Total NFTs minted: " + getTotalSupply());
