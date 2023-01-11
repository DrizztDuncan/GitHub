const sum = [1, 3, 5, 7].reduce((acc, cur) => acc + cur, 0);

function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    total += arr[i];
  }
  return total;
}

console.log("sum: ", sum([1, 3, 5, 7]));
