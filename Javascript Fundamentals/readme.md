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

For mathematical comparisons, `null` gets converted to 0 and `undefined` gets converted to `NaN`

Check out this weird result: 
```
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
``` 
First of all, as we learned that `null` gets converted int 0 when dealing with mathematical comparisons. 
In Line 1, 0 > 0 should give us false! (OK)
In Line 2, as per the rule defined above that "`null` and `undefined` are equal to **only** each other and no one else", we should get a flase (OK)
In Line 3, 0 >= 0 which is true and that's what we get! (OK!!!!)

And of course, if you try any of the above stuff with `undefined` you will always get a `false` as it gets converted to a `NaN`.
```
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```


# Logical Operators
Trust me, this is not what it is like in C++/C/Java. 
There are 4 types of operators. 
&&(AND)
||(OR)
!(NOT)
&&(Nullish coalescing)

Their result unlike other languages can be of *any* type, not necessarily boolean.

## The OR Operator ||
In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

In Javascript, **the OR operator finds the first truthy value**
> `result = value1 || value2 || value3;`

The OR || operator does the following:
Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the **original value of that operand** (NOT the boolean value of that operand).
If all operands have been evaluated (i.e. all were false), returns the last operand.

**In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.**

##### Example
A Classic example is to get the first truthy value in a list of values:
```
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
```

## AND Operator &&
Exactly opposite to the OR operator. **It returns the first falsy value**.

> `result = value1 && value2 && value3;`

The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand (**NOT THE BOOLEAN VALUE OF THAT OPERAND**).
If all operands have been evaluated (i.e. all were truthy), returns the last operand.

**In other words, AND returns the first falsy value or the last value if none were found.**

## NOT Operaotor !
Converts the operand to its boolean value. You can use the NOT operator twice to convert anything to its Boolean value. 
`!!3` // true;

## Nullish Coalescing Operator &&
This is a new addition to the JS language. A value is defined when it is neither `null` nor `undefined`. 

**?? returns the first argument if it’s not null/undefined. Otherwise, the second one.**
Example: 
```
let user1;
let user2 = "Aaryan";
alert(user1 ?? "Anonymous"); // Anonymous (user1 not defined)
alert(user2 ?? "Anonymous"); // Aaryan as user 2 is defined
```
So, we can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.

#### Difference between ?? and || 
|| returns the first truthy value
?? returns the first defined value

In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

Consider this example:
```
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

In the above case, it might have happened that the `height` was actually meant to be 0 but there's a bug that's crept in which is making our `height = 100` in the first line.  

# Javascript functions
Big daddy topic right over here. Kinda like the beginning of JS. 

To read the basics, go over here: https://javascript.info/function-basics

The most important line that you need to keep in your mind at all times when you're dealing with functions is that **a function is a value**. If you do `let a = 123`, then `a` variable has a value 123. Similarly, a function is a value, which can be passed around in other functions and we can do almost everything with it that we can do with normal values. 

There are two ways to define a function. 
1) Function Declaration
```
function sayHi() {
  alert( "Hello" );
}
```

2) Function expression
```
let sayHi = function() {
  alert( "Hello" );
};
```
1 is trivial. In 2, you are making a function and then storing that function in a variable called `sayHi`. `sayHi` is a variable. It's not the function. The function is stored in that variable. To call the function, you need to append `()` to the end of the variable itself to call the function which it is holding. 
You can even console log the function and it will show you the entire function!

## Callback Functions
These are functions which you pass onto other functions as parameters. 
The simplest example can be:
```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

You can make it even smaller by using _Anonymous Functions_. 
```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

## Important difference between Function Declarations and Function Expressions
**A Function Expression is created when the execution reaches it and is usable only from that moment.**
**A Function Declaration can be called earlier than it is defined.**
**In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it**


# Arrow Functions
They're basically syntax sugar. 
Read the basics here: https://javascript.info/arrow-functions-basics

A common problem/doubt that I had was when to use `(` and `{` in the function. Turns out that you use '(' if you want to return something from the function and you use `{` if you want a multiline function. 

```
let square1 = num => (num * num); //works fine
let square2 = num => {num * num}; // gives an error as expected as { doesn't mean that it will return that value, you have to put that return statement.
let square3 = num => {return num * num}; // works fine
```
