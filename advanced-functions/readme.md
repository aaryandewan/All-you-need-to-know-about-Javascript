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





