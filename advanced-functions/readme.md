# Rest Parameters and Spread Syntax

So if you want to make a function that can add two numbers, it's pretty simple like: 
```
function sum(a, b) {
  return a + b;
}
```

Now how do you generalise it to multiple inputs? You use *rest parameters*. 
```
function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

All the arguments that you pass into `sumAll` will be converted into an array called `args`. Then you're simply iterating through it and you can get the total Sum. 

Another example: 
```
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");
```

# Spread Syntax
Let's say that you want to find out the max number out of many of the numbers that you have. You can use the inbuilt `max` function. 
```
alert( Math.max(3, 5, 1) ); // 5
```

Now what if you want to pass an array into the `Math.max()` and you want to "spead" all those array elements into the `max` function and get the maximum element. 

You can use the `spead` operator. 
```
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
```

You can combine the spread operator with normal values:
```
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25
```

## Copying an Array or an Object. 
Earlier I told you about different ways to copy objects (`Object.assign`), there's a more simpler and more used way to copy arrays and objects using the `spread` operator. 
If you want to copy an array: 

```
let arr = [1, 2, 3];

let arrCopy = [...arr];
```

If you want to copy and object: 
```
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj };
```


# Closure
An important thing to rememebr is that a variable declared inside a code block `{...}` is only visible inside that code block. 

To understanc closures, check out this example: 

```
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
```


## Lexical Environment
Every function, every code block, eveything! has a lexical scope in JS. A lexical scope consists of two parts: 
1) Environment Record: an object that stores all local variables as its properties (and some other information like the value of this).

2) A reference to the outer lexical environment, the one associated with the outer code.


**A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.**

So when we search for a variable, the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.


To really understand them, go here: https://javascript.info/closure


# SetTimeout
It simply runs the function which you passed after a particular amount of time has lapsed. 
```
setTimeout(() => alert('Hello'), 1000);
```

### Cancelling with clearTimeout
```
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)
```

# SetInterval
It runs after the time has lapsed. Then runs again and again. Not like `SetTimeout` which only runs once. 

You can make a SetInterval by nesting two SetTimeouts:
```
let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

There's an important difference between `setInterval` and nested `setTimeout`s. 
https://javascript.info/settimeout-setinterval#nested-settimeout

### Zero Delay SetTimeout
There’s a special use case: setTimeout(func, 0), or just setTimeout(func).

This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.

Example: 
```
setTimeout(() => alert("World"));

alert("Hello");
```
This will alert `Hello World` not the opposite. 








