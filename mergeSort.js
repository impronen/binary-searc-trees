class mergeSort {
  splitter(array) {
    if (array.length === 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(mid, array.length);

    return merger(splitter(left), splitter(right));
  }
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
}

function removeDuplicates(array) {
  let choppedArray = [];
  array.forEach((element) => {
    if (!choppedArray.includes(element)) {
      choppedArray.push(element);
    }
  });
  return choppedArray;
}

export { mergeSort, removeDuplicates };
