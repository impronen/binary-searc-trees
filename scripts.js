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
console.log("So first off... here's the bloody tree for ya");
prettyPrint(TREE.tree);
console.log("Then we do a little insert... let's add 500, why not");
TREE.insert(500);
prettyPrint(TREE.tree);
console.log("We then do some deleting. We might as well be deleting 30");
TREE.delete(30);
console.log("Now it looks like this:");
prettyPrint(TREE.tree);
console.log("And now, some searching - let's look for 25");
let foundValue = TREE.find(25);
console.log(`Found it! The value is ${foundValue.data} (duh)`);
console.log("Now, lets try with an nonexistent value - like say 77");
let missingValue = TREE.find(77);
console.log(
  `Did we find anything with search of 77? the value returned was ${missingValue}, so... no`
);
let levelOrderResult = TREE.levelOrder();
console.log(`NEXT... Levelorder traversal. The result is: ${levelOrderResult}`);
let preOrderResult = TREE.preOrder();
console.log(
  `Aaand, then preorder traversal... the result is ${preOrderResult}`
);
let inOrderResult = TREE.inOrder();
console.log(`Now, lets do inOrder traversal... the result is ${inOrderResult}`);
let postOrderResult = TREE.postOrder();
console.log(
  `Now, lets do postOrder traversal... the result is ${postOrderResult}`
);
