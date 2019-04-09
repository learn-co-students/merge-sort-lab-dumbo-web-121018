const findMinAndRemoveSorted = array => {
  return array.splice(0, 1)
}

const merge  = (arr1, arr2) => {
  let sorted = [];
  while(arr1.length != 0 && arr2.length != 0) {
    if(arr1[0] > arr2[0]) {
      sorted.push(arr2.splice(0, 1)[0])
    } else {
      sorted.push(arr1.splice(0, 1)[0])
    }
  }
  return sorted.concat(arr1).concat(arr2)
}

const mergeSort = array => {
  let mid = array.length / 2;
  let first = array.slice(0, mid);
  let second = array.slice(mid, array.length);
  if(array.length > 1) {
    return merge(mergeSort(first), mergeSort(second));
  }
  return array;
}
