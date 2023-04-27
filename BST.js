#!/usr/bin/env node
import mergeSort from "./mergeSort";

console.log("this shit runs");

// use merge sort first to make an ordered array
// possibly divide the "helper" classes etc to different files and import them to this
// remove dublicate values
// feed ordered array to tree creator
// attach insert / delete methods to BST

class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}
let root = null;
/* A function that constructs Balanced Binary Search Tree 
 from a sorted array */
function sortedArrayToBST(arr, start, end) {
  /* Base Case */
  if (start > end) {
    return null;
  }
  /* Get the middle element and make it root */
  let mid = parseInt((start + end) / 2);
  let node = new Node(arr[mid]);
  /* Recursively construct the left subtree and make it
     left child of root */
  node.left = sortedArrayToBST(arr, start, mid - 1);
  /* Recursively construct the right subtree and make it
     right child of root */
  node.right = sortedArrayToBST(arr, mid + 1, end);
  return node;
}
/* A utility function to print preorder traversal of BST */
function preOrder(node) {
  if (node == null) {
    return;
  }
  preOrder(node.left);
  preOrder(node.right);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
root = sortedArrayToBST(arr, 0, arr.length - 1);

// Supplied function to print the tree to console
const prettyPrint = (node, prefix = "", isLeft = true) => {
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
};
prettyPrint(root);

/* console.log(root); */
