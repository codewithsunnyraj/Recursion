function power(n) {
  if (n == 0) {
    return 1;
  }

  return 2 * power(n - 1);
}

let value = power(10);
console.log(value);
