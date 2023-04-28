#!/usr/bin/env node
const BST = require("./BST");

function runIt() {
  let arr = [1, 5, 10, 3, 5, 10, 11, 25, 8, 11, 11, 7];
  const readyArray = new BST(arr);
  console.log(readyArray);
}

runIt();
