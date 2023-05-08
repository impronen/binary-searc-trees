#!/usr/bin/env node

// use merge sort first to make an ordered array
// helper functions do merge sort and duplicate removal inside BST class
// feed ordered array to tree creator
// attach insert / delete methods to BST

class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(array) {
    const unordered = this.removeDuplicates(array);
    const ordered = this.splitter(unordered);
    this.tree = this.buildTree(ordered);
  }

  buildTree(arr) {
    if (arr.length === 0) {
      return null;
    }
    let mid = Math.floor(arr.length / 2);
    let node = new Node(arr[mid]);

    node.left = this.buildTree(arr.slice(0, mid));
    node.right = this.buildTree(arr.slice(mid + 1));
    return node;
  }

  // Methods to manipulate tree

  insert(value, currentNode = this.tree) {
    // Base case - empty tree
    if (currentNode === null) {
      return new Node(value);
    }
    if (currentNode.data === value) return;

    if (currentNode.data < value) {
      currentNode.right = this.insert(value, currentNode.right);
    } else {
      currentNode.left = this.insert(value, currentNode.left);
    }
    return currentNode;
  }

  delete(value, currentNode = this.tree) {
    if (currentNode === null) return currentNode;
    if (value < currentNode.data) {
      currentNode.left = this.delete(value, currentNode.left);
    } else if (value > currentNode.data) {
      currentNode.right = this.delete(value, currentNode.right);
    } else {
      if (currentNode.left === null) {
        return currentNode.right;
      } else if (this.tree.right === null) {
        return this.tree.left;
      }
      currentNode.data = this.minValue(currentNode.right);
      currentNode.data = this.delete(value, currentNode.right);
    }
    return currentNode;
  }

  // Helpers

  minValue(root) {
    console.log(`i'm running says minValue and ${root.valu} was passed in`);
    let min = root.data;
    while (root.left != null) {
      min = root.left.data;
    }
    return min;
  }

  removeDuplicates(array) {
    let choppedArray = [];
    array.forEach((element) => {
      if (!choppedArray.includes(element)) {
        choppedArray.push(element);
      }
    });
    return choppedArray;
  }

  // Merge sort

  merger(leftArray, rightArray) {
    const resultArray = [];

    let leftC = 0;
    let rightC = 0;

    while (leftC < leftArray.length && rightC < rightArray.length) {
      if (leftArray[leftC] < rightArray[rightC]) {
        resultArray.push(leftArray[leftC++]);
      } else {
        resultArray.push(rightArray[rightC++]);
      }
    }
    while (leftC < leftArray.length) {
      resultArray.push(leftArray[leftC++]);
    }
    while (rightC < rightArray.length) {
      resultArray.push(rightArray[rightC++]);
    }
    return resultArray;
  }
  splitter(array) {
    if (array.length === 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    return this.merger(this.splitter(left), this.splitter(right));
  }
}

module.exports = BST;
