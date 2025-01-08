let num: number = 6423.1932;
let number: number = 255.1;
let numbers: number = 0.0000232;

//Methods of type number:

// 1. Number.isNaN(variableName)
// It returns true or flase
//true if it is NaN (Not a Number), false otherwise
console.log("Not a Number method example");
console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN(num));   // false


// 2. Number.isFinite(number)
// It returns true or flase
//true if it is a finite number, false otherwise
console.log("Finite number method example");
console.log(Number.isFinite(num));  // true
console.log(Number.isFinite(Infinity));  // false


// 3. Number.isInteger(number)
// It returns true or flase
//true if it is an integer, false otherwise
console.log("Integer number method example");
console.log(Number.isInteger(num));  // false
console.log(Number.isInteger(6));  // true


// 4 Number.parseInt()
// It parses a string argument and returns an integer of the specified radix
console.log("Parse Int method example");
console.log(Number.parseInt("901.23")); //901
console.log(Number.parseInt("0101", 2)); //5


// 5 Number.parseFloat()
// It parses a string argument and returns a floating point number
console.log("Parse Float method example");
console.log(Number.parseFloat("2.102abc")) //2.102
console.log(Number.parseFloat("423.21")) //423.21


// 6 Number.toString()
// It returns a string representing the specified number
console.log("To String method example");
console.log(num.toString()); // 6423.1932
console.log(number.toString(16)); //ff


//7 Number.toFixed()
// It formats a number using fixed-point notation
// It returns a string
console.log("To Fixed method example");
console.log(num.toFixed(2)); //6423.19
console.log(number.toFixed(3)); //255.000


// Number.toExpotential()
// It returns a string representing the number in exponential notation
console.log("To Exponential method example");
console.log(num.toExponential(2));  //6.42e+3
console.log(numbers.toExponential(4)); //2.3200e-5



//Number.toPrecision()
// It returns a string representing the number to a specified precision
console.log("To Precision method example");
console.log(number.toPrecision(1)); //6420
console.log(numbers.toPrecision(5)); //2.32e-5


//Number.valueOf()
// It returns the primitive value of the specified object
console.log("Value Of method example");
console.log(num.valueOf()); //6423.1932


//Number.isSafeInteger()
// It returns true or false
//true if it is a safe integer, false otherwise
console.log("Safe Integer method example");
console.log(Number.isSafeInteger(num)); //false


//Number.MAX_VALUE
// It returns the largest number possible in JavaScript
console.log("Max Value method example");
console.log(Number.MAX_VALUE); //1.7976931348623157e+308


//Number.MIN_VALUE
// It returns the smallest number possible in JavaScript
console.log("Min Value method example");
console.log(Number.MIN_VALUE); //5e-324


//Number.Negative_Infinity
// It represents negative infinity
console.log("Negative Infinity method example");
console.log(Number.NEGATIVE_INFINITY); //-Infinity

export {}; // to avoid TS error: Cannot redeclare block-scoped variable 'num_methods'.ts(2451)


//The Number object in TypeScript provides useful methods for type checking (isNaN, isFinite, isInteger), parsing (parseInt, parseFloat), formatting (toString, toFixed, toPrecision, etc.), and constants (MAX_VALUE, MIN_VALUE, etc.).