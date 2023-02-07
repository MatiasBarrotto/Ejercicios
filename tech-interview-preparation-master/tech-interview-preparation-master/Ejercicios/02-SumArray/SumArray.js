function SumArray (arr, n) {
  // Your code here:
  for (let i = 0; i <  Array.length; i++) {   // i j
    for (let j = 0; j < Array.length; j++) { // [2,4,5,9]
      if(arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;
}

module.exports = SumArray
