function count(arr, n) {
  if (n == -1) {
    return;
  }

  let increase = 0;
  count(arr, n - 1);
  return increase++;
}

let name = "sunny";
let arr = name.split("");
let n = arr.length - 1;
count(arr, n);
