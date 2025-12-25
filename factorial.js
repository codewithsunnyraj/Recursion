// Factorial of number n
function fact(n) {
  if (n == 1 || n == 0) {
    return 1;
  }
  return n * fact(n - 1);
}

let value = fact(5);
console.log(value);
