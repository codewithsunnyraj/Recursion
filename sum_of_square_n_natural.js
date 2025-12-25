function sum_of_square(n) {
  if (n == 1) {
    return 1;
  }

  return Math.pow(n, 2) + sum_of_square(n - 1);
  //   return n ** 2 + sum_of_square(n - 1);
}

let value = sum_of_square(5);
console.log(value);

//  ++++++++++++++++++++++++   STEP 2 ++++++++++++++++++++++++++++++++++++++++
// function sum(n){

//     //According To Formula
//     let calculate = (n*(n+1)*(2*n+1))/6
//     console.log(calculate);

// }

// sum(4);

// function sum_of_square(n) {
//   let power = 2;
//   if (n == 1) {
//     return 1;
//   }
//   let store;
//   return store + Math.pow(power, sum_of_square(n - 1));
// }
