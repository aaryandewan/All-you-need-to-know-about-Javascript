# Basics
##  `use strict` 
You have to use this directive at the top of your JS file. If you want your code to run the "modern" way, you can and should use this directive. If you're using classes, modules etc, you don't need to enable `use strict` as it is enabled automatically. 

## 'null' vs 'undefined'
null literall means nothing i.e the value of that variable is nothing. undefined on the other hand means that that variable is declared but it's value is not defined.

```
let value;
console.log(value); //logs undefined
```

```
let value = null;
console.log(value); //logs null
```

## Different datatypes in Javascript
-- number
-- bigint
-- string
-- null
-- undefined
-- boolean
-- symbol
-- Object (only non primitive data type in JS)

(primitive: a number can store a number. a string can store a string. So they are primitives. An Object however can store various kinds of data so it is a non primitive)

_You might feel that the 3 topics below aren't that important, but trust me, they are. Go through each of the three topics below slowly and try to grasp them._
# Type Conversions
We'll be talking about primitives here (you know, `Strings`, `Numbers` etc). 
Let's say you have a variable called `name` and you want to see what it's type is, you can use the `typeof` operator.

```
let name = "aaryan";
console.log(typeof name); // string
```
### Numerical Conversions
Now what if we want to convert a String to a Number? or vice versa? or to a Boolean? 
There are several ways to do this, the easiest one being: 
```
let strAge = "22";
let age = Number(strAge);
console.log(age); // 22
console.log(typeof age) //Number
```
This sort of numeric conversion happens automatically in functions or mathematical expressions. For example, if you try to multiply `"2"` and `"3"`, JS first converts thse Strings to Numbers (because LOL, you cannot multiply two strings) and then returns the result. 

``` 
let result = "2" * "3";
console.log(result); // 6
console.log(typeof result);// Number
```

Now this is cool, but what if you try out this insanity?
`Number("aaryan");`
Will this throw an error? No! In JS, you have normal integers, Infinity, and NaN. So this will a `NaN`.

The following table tells you what happens when you try to convert something into a Number.
| Value | Becomes... |
| ------ | ------ |
| `undefined` | `NaN` |
| `null` | `0` |
| `true and false` | `1` and `0` |
| `string` | Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is `0`. Otherwise, the number is “read” from the string. An error gives NaN. |

### Boolean Conversions
This one is pretty intuitive. 
```
Boolean(null); // false
Boolean(undefined); //false
Boolean(123); //true
Boolean(0); // false
Boolean("0"); //true (because any non empty string is translated to true!)
Boolean(" "); //true (same reason as above)
Boolean(""); // false (empty string, should be false!)
```

# Mathematical Operators
Okay so first of all we must know what is an operator and an operand. In the expression `2 + 3`, 2 and 3 are operands and `+` is an operator. 
Operators can be binary or unary. 
*Binary operators*: as in the above example. It's an operator which operatos on two operands. 
*Unary operators*: Operators which operator only on one operand. Like `++`, `--` etc.

## String concatenation with binary operator +
This is where things get interesting. 





