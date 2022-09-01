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


