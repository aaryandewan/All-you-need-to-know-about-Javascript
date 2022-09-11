//This defines a complex number class.

class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  returnRealPart() {
    return this.real;
  }

  plus(anotherComplexNumber) {
    return new ComplexNumber(
      this.real + anotherComplexNumber.real,
      this.imaginary + anotherComplexNumber.imaginary
    );
  }
  minus(anotherComplexNumber) {
    return new ComplexNumber(
      this.real - anotherComplexNumber.real,
      this.imaginary - anotherComplexNumber.imaginary
    );
  }
  times(anotherComplexNumber) {
    return new ComplexNumber(
      this.real * anotherComplexNumber.real -
        this.imaginary * anotherComplexNumber.imaginary,
      this.real * anotherComplexNumber.imaginary +
        this.imaginary * anotherComplexNumber.real
    );
  }

  static addTwoComplexNumbers(a, b) {
    return a.plus(b);
  }

  get realPart() {
    return this.real;
  }
  get imaginaryPart() {
    return this.imaginary;
  }
  get magnitude() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

let ONE = new ComplexNumber(1, 0);
console.log(ONE.returnRealPart());
let RANDOM = new ComplexNumber(5, 6);

// let s = ComplexNumber.plus(ONE, RANDOM); throws error

let s = ONE.plus(RANDOM);

//////////////////////////////////////////

let xx = ComplexNumber.addTwoComplexNumbers(ONE, RANDOM);
console.log(xx.imaginary);
