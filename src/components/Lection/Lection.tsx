function reverse<K>(items: K[]): K[] {
  return items.reverse();
}

let numbers = reverse([1, 2, 3]);
console.log(numbers);
let strings = reverse(["a", "b", "c"]);
console.log(strings);
