function sum(array, index) {
  if (index == -1) {
    return 0;
  }

  return array[index] + sum(array, index - 1);
}

let array = [3, 4, 5, 8, 2];
let index = array.length - 1;

let sum_of_array = sum(array, index);
console.log(sum_of_array);
