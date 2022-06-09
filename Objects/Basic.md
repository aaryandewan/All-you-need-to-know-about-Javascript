//objects are mutable and manipulated by reference rather than by value. If the variable x refers to an object and the code let y = x; is executed, the variable y holds a reference to the same object, not a copy of that object. Any modifications made to the object through the variable y are also visible through the variable x.

#Creating an object

Objects can be created with object literals, with the new keyword, and with the Object.create() function.

##Object Literal
The easiest way to create an object is to include an object literal in your JavaScript code. In its simplest form, an object literal is a comma-separated list of colonseparated name:value pairs, enclosed within curly braces.
An object literal is an expression that creates and initializes a new and distinct object each time it is evaluated. The value of each property is evaluated each time the literal is evaluated. This means that a single object literal can create many new objects if it appears within the body of a loop or in a function that is called repeatedly,



#Creating Objects with new

