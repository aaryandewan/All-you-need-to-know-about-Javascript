# Objects
This is where the "real" Javascript starts. 

There are two ways to create an object:
```
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

A simple example is:
```
let user = {
    name: "aaryan", 
    age: 22
};
```

To get the properties of the object `user`, you have two ways: 
```
console.log(user["name"]); //aaryan
console.log(user.name); //aaryan
```

To delete a property, use the keyword `delete`
```
delete user.name
```

And if you want to have keys which have multiple words with spaces between them, you **need** to use the string way to naming keys. Becayse `user.full name` isn't valid syntax. 


#### Example
```
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

function makeUser2(name, age) {
  return {
    [name]: name,
    [age]: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
let user2 = makeUser2("Aaryan", 22);
console.log(user);
console.log(user2)
```

When you run the above script, you get:
`{
    name: "John",
    age: 30
}`
`{aaryan: "aaryan", 22 : "22"}`

So when you're making an object and you are thinking whether to use `[variable]` or `variable` as the key value in the object, just remember that when you use `variable`, that exact name will act as the key, but if you use `[variable]` then whatever is stored inside that `variable` will be made the key!

#### Property name limitations
A variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction:
```
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6
```

### In Operator
The cool thing about objects in JS is that if you try to access their properties and they don't exist, you will not get an error, you will just get an undefined value. 

If you want to check if there exists a property in an object, you can use the `in` operator. 
```
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

There is one catch where this can fail (which never really arises in the real world scenario as we use `null` for unknown values)

```
let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!
```

### The For In Loop
This is different from the normal for loop. When you use a For In Loop, you iterate over all the properties of that object. The order can be different in which you have listed the properties themselves. 

```
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

Now there's a small thing you need to remember. If your keys are numbers, then when you use a for in loop, you will get the output in the sorted order. 
But if you don't have the keys as strings, you will get the output in order of the creation time. 

```
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```





