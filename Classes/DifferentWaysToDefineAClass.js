//Define a range class which includes a range [from...to]

//Way 1. Pretty old way to make them.
// function range(from, to) {
//   let r = Object.create(range.methods);
//   r.from = from;
//   r.to = to;

//   return r;
// }

// range.methods = {
//   includes(x) {
//     return this.from <= x && x <= this.to;
//   },
//   toString() {
//     return "(" + this.from + "..." + this.to + ")";
//   },
//   //The below generator function makes it iterable
//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },
// };

// let myRange = range(1, 10);
// console.log(myRange.includes(5));
// console.log(myRange.toString());

// for (let x of myRange) {
//   console.log(x);
// }

//Method 2. Uses the prototype property of a function.

// function range(from, to) {
//   this.from = from;
//   this.to = to;
// }

// range.prototype = {
//   includes(x) {
//     return this.from <= x && x <= this.to;
//   },
//   toString() {
//     return "(" + this.from + "..." + this.to + ")";
//   },
//   [Symbol.iterator]: function* () {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },
// };

// let range2 = new range(10, 20);
// console.log(range2.includes(15));
// console.log(range2.toString());
// for (let x of range2) {
//   console.log(x);
// }

//Method 3. Modern way which uses the constructor.
