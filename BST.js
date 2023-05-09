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
    // Value exists in the tree, no need to insert
    if (currentNode.data === value) return;

    // Recursive traversal based on whether the value is higher or lower
    if (currentNode.data < value) {
      currentNode.right = this.insert(value, currentNode.right);
    } else {
      currentNode.left = this.insert(value, currentNode.left);
    }
    return currentNode;
  }

  delete(value, currentNode = this.tree) {
    // Base case
    if (currentNode === null) return currentNode;
    if (value < currentNode.data) {
      // if value is smaller, we move down the left branch
      currentNode.left = this.delete(value, currentNode.left);
    } else if (value > currentNode.data) {
      // and if larger, right
      currentNode.right = this.delete(value, currentNode.right);
    } else {
      // we have a node with either no children or just one
      if (currentNode.left === null) {
        return currentNode.right;
      } else if (this.tree.right === null) {
        return this.tree.right;
      }
      // finding inorder successor or the smallest from the right tree
      currentNode.data = this.findMinNode(currentNode.right).data;
      // the inorder successor is deleted
      currentNode.right = this.delete(currentNode.data, currentNode.right);
    }
    return currentNode;
  }

  find(value, currentNode = this.tree) {
    //base case - if the node is empty or the data is found, the node is returned
    if (currentNode === null || currentNode.data === value) return currentNode;
    // Recursive search - tree is traversed based on whether the node value is greater or not
    if (currentNode.data > value) {
      return this.find(value, currentNode.left);
    } else {
      return this.find(value, currentNode.right);
    }
  }

  levelOrder(funcc) {
    // initialise the work queue by placing the original node there
    // result is used to push values after traversing
    let queue = [this.tree];
    let result = [];

    while (queue.length > 0) {
      const node = queue.shift();
      if (funcc && typeof funcc === "function") {
        node.data = funcc(node.data);
      } else {
        result.push(node.data);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (result.length > 0) return result;
  }

  // Root - left - right
  preOrder(currentNode = this.tree, result = []) {
    if (!currentNode) return;
    else if (currentNode) {
      result.push(currentNode.data);
      this.preOrder(currentNode.left, result);
      this.preOrder(currentNode.right, result);
    }
    return result;
  }

  // Left - Root - Right
  inOrder() {}

  // Left - Right - Root
  postOrder() {}

  // Helpers

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.right);
    }
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
