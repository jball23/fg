const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddresses = [
  "0x7dd04732AA15db1746aA4014E8314bd1e12F9851",
]

// leaves, merkleTree, and rootHash are all determined prior to claim. The project
// would have some form of whitelist process where whitelisted addresses are collected
// and known beforehand.

// Creates a new array 'leafNodes' by hashing all indexes of the 'whitelistAddresses'
// using keccak256. Then creates a new Merkle Tree object using keccak256 as the
// desired hashing algorithm.
const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

// Gets the root hash of the merkle tree in hex format.
const rootHash = merkleTree.getRoot();

console.log(rootHash)

// console.log('Whitelist Merkle Tree\n', merkleTree.toString());

// Client-side, you would use the 'msg.sender' address to query an API that returns
// the merkle proof required to derive the root hash of the Merkle Tree.
const claimingAddress = leafNodes[0];

// 'getHexProof' will return the neighbor leaf and all parent node hashes that will
// be required to derive the Merkle Trees root hash.
const hexProof = merkleTree.getHexProof(claimingAddress);
