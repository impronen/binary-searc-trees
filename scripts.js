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
TREE.insert(500);
prettyPrint(TREE.tree);
