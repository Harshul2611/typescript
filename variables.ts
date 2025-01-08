let greetings: string = "Hello World";  //type name alsways in lowercase 
let num =6;

//greetings = 6;  TS error: Type '6' is not assignable to type 'string'.ts(2322)

greetings.toLowerCase();

//num.toUpperCase()  TS error: Property 'toUpperCase' does not exist on type 'number'.ts(2339)

console.log(greetings);

// Type Boolean

let isLoggenIn: boolean = true;


export {}; // to avoid TS error: Cannot redeclare block-scoped variable 'greetings'.ts(2451)


//For running typescript code: tsc variables.ts && node variables.js
//This will generate a variables.js file and run it using node