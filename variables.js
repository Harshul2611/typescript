"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello World"; //type name alsways in lowercase 
var num = 6;
//greetings = 6;  TS error: Type '6' is not assignable to type 'string'.ts(2322)
greetings.toLowerCase();
//num.toUpperCase()  TS error: Property 'toUpperCase' does not exist on type 'number'.ts(2339)
console.log(greetings);
//For running typescript code: tsc variables.ts && node variables.js
//This will generate a variables.js file and run it using node
