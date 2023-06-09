#!/usr/bin/env node
const BST = require("./BST");

function runIt() {
  let arr = [1, 5, 10, 3, 5, 75, 10, 11, 25, 8, 11, 30, 11, 7];
  const tree = new BST(arr);
  return tree;
}

function unbalanceTheTree() {
  const unbalancedArray = [];
  const numberOfNodes = Math.floor(Math.random() * 15) + 20;
  for (let i = 0; i < numberOfNodes; i++) {
    unbalancedArray.push(Math.floor(Math.random() * 4999) + 1999);
  }
  return unbalancedArray;
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
console.log("Right.. let's cause some chaos and unbalance this tree");
unbalanceTheTree().forEach((number) => {
  TREE.insert(number);
});
console.log("DOING CHAOS THINGS");
prettyPrint(TREE.tree);
console.log(
  "is it balance? doesn't look like it but let's test anyway..... aand the result is",
  TREE.isBalanced()
);
console.log("(ノಠ益ಠ)ノ彡┻━┻");
console.log(".....");
console.log("ghaa, some rebalancing then...");
console.log("....puitting the table back ┳━┳ ヽ(ಠل͜ಠ)ﾉ");
TREE.reBalance();
console.log("Done... let's see how it looks");
prettyPrint(TREE.tree);
console.log("NICE (▰˘◡˘▰)");
console.log("And for the last trick, lets do some traversals on our new tree");
console.log("level order", TREE.levelOrder());
console.log("in order", TREE.inOrder());
console.log("pre order", TREE.preOrder());
console.log("post order", TREE.postOrder());
console.log("looking good (-■_■)");
