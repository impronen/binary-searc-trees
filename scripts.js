#!/usr/bin/env node
const BST = require("./BST");

function runIt() {
  let arr = [1, 5, 10, 3, 5, 75, 10, 11, 25, 8, 11, 30, 11, 7];
  const tree = new BST(arr);
  return tree;
}

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

const TREE = runIt();
/* console.log(TREE); */
prettyPrint(TREE.tree);
console.log("We do a little insert");
TREE.insert(500);
prettyPrint(TREE.tree);
console.log("We then do some deleting, by deleting 30");
TREE.delete(30);
prettyPrint(TREE.tree);
console.log("And now, some searching");
let foundValue = TREE.find(25);
console.log(
  `and the value of the node found in the search is ${foundValue.data}`
);
console.log("lets try with an nonexistent valyu");
let missingValue = TREE.find(77);
console.log(
  `did we find anyhting with search of 77? the value returned was ${missingValue}, so no we did not`
);
