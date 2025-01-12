"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers = [2, 67, 91, 20, 9];
var fruits = ["Apple", "Banana", "Orange"];
var vegetables = ["Cauliflower", "Potato", "Ginger"];
//push method
console.log("\nPush Method to add onr or new element to end of array");
var arrLength = numbers.push(88);
console.log(numbers);
console.log(arrLength);
//pop method
console.log("\nPop method to remove last element from array");
var popElement = numbers.pop();
console.log(numbers);
console.log(popElement);
//shift method
console.log("\nShift method to remove first element in array");
var element = fruits.shift();
console.log(fruits);
console.log(element);
//unshift method
console.log("\nUnshift method adds one or more new element at first place");
var lengths = fruits.unshift("Apple");
console.log(lengths);
console.log(fruits);
//concat method
console.log("\n Concat method is used to merge two or more arrays");
var add = vegetables.concat(fruits);
console.log(add);
//Join method
console.log("\n Join method is used to seperate array elements with a specified seperator");
var sepeartor = add.join('  ');
console.log(sepeartor);
//Slice method
console.log("\nUsed to fetch specific part of an array");
var specificPortion = numbers.slice(2, 4); //not print last specified index element i.e numbers[4]
console.log(specificPortion);
//forEach method
console.log("\nExecute a function one for each array element");
add.forEach(function (item, index) {
    console.log("".concat(index, " : ").concat(item));
});
//filter()
console.log("\nCreates a new array with all elements that pass the test implemented by the provided function.");
var filteredData = fruits.filter(function (x) {
    x.startsWith('b');
});
var filteredDatas = numbers.filter(function (x) {
    x * 2;
});
console.log(filteredData);
console.log(filteredDatas);
