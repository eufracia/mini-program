function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const result = [];

for (let n = 100; n >= 1; n--) {
  if (isPrime(n)) continue;

  if (n % 15 === 0) {
    result.push("FooBar");
  } else if (n % 3 === 0) {
    result.push("Foo");
  } else if (n % 5 === 0) {
    result.push("Bar");
  } else {
    result.push(n.toString());
  }
}

console.log(result.join(", "));
