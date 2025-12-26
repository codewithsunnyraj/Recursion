function print(array, count, index) {
  if (count == index) {
    return;
  }
  console.log(array[index]);
  print(array, count, index + 1);
}
let array = [3, 7, 6, 2, 8];
let count = array.length ;
let index = 0;
print(array, count, index);
