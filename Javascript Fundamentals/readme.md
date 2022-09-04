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
If the binary + operator is used between two strings, it concatenates them. 
```
let result = "2" + "3";
console.log(result); // "5"
```

We learned above that this does **NOT** happen if you use any other operator like `*` or `/` etc. 
```
let result = "10" / "5";
console.log(result); // 2
```

> Only + operator concatenates the strings (and not addds the numbers represented) but all other operators will perform mathematical operations on the string 

Also, if one of the operands is not a string, it gets converted into one:
```
console.log(32 + "  4"); //"32  4"
console.log(2 + 2 + '1');// '41' as the compiler reads the whole thing from left to right
```

## Unary + operator
It does numeric conversion i.e it does the same thing as `Number(...)`
So if it is applied to any `Number`, it doesn't do anything but if it is applied to any other data type, it converts it into a `Number`. 
```
let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings
alert( +apples + +oranges ); // 5
alert( Number(apples) + Number(oranges) ); // 5 (same as above, but longer)
```

## Assignment operator
Now this is really cool. I've been coding all my college life but somehow I didn't really realise this fact that the `=` is an operator **AND** it returns _something_.

`name = "aaryan"` writes "aaryan" into `name` and then returns "aaryan"!

```
let a = 1;
let b = 2;

let c = 3 - (a = b + 1); (c = 3 - (3)) ===> c = 0;

alert( a ); // 3
alert( c ); // 0
```

You can chain assignments like: 
```
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

## The Comma operator
The comma operator allows us to evaluate several expressions, dividing them with a comma `,`. Each of them is evaluated but only the result of the last one is returned.

```
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
```

# JavaScript Comparisons
When strings are compared in JS, they are compared lexicographically. 
1. Compare the first character of both strings.
2 .If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

## Comparisons of different types 
Whenever you compare something with a number, JS convertes that thing to a Number itself and them compares them. 

```
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert( true == 1 ); // true
alert( false == 0 ); // true
```

Now this might seem weird but its totally normal:
```
let a = "0";
let b = 0;
console.log(a == b);// true even if you tried to convert them to their respective booleans, you'd get different answers!
```

But sometimes, you REALLY need to check id two things are REALLY equal. You can use the strict equality check `===`. This does not perform type conversion before comparing two strings. 
```
console.log(false == 0); //true
console.log(false == '0'); //true
console.log(false === 0); false
```

## Comparison with null and undefined
This is a little tricky.

## Comparison with null and undefined
This is a little tricky. There are two answers to "what happens when you try to comapare stuff with null and undefined? "
    
#### For a strict check
```
console.log(undefined === null); //false
```
    
#### For a non strict check
They are equal to **only** each other and no one else
```
console.log(undefined == null); //true;
console.log(null == false);// false
console.log(null = ""); //false
```


    
    
    
