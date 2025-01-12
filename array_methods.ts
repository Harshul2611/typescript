let numbers: number[] = [2,67,91,20,9];
let fruits: string[] = ["Apple","Banana","Orange"];
let vegetables: string[] = ["Cauliflower","Potato","Ginger"];

//push method
console.log("\nPush Method to add onr or new element to end of array");
const arrLength = numbers.push(88);
console.log(numbers);
console.log(arrLength);


//pop method
console.log("\nPop method to remove last element from array")
const popElement = numbers.pop();
console.log(numbers);
console.log(popElement);


//shift method
console.log("\nShift method to remove first element in array")
const element = fruits.shift();
console.log(fruits);
console.log(element);


//unshift method
console.log("\nUnshift method adds one or more new element at first place")
let lengths = fruits.unshift("Apple");
console.log(lengths);
console.log(fruits);


//concat method
console.log("\n Concat method is used to merge two or more arrays");
let add = vegetables.concat(fruits);
console.log(add);


//Join method
console.log("\n Join method is used to seperate array elements with a specified seperator");
let sepeartor = add.join('  ');
console.log(sepeartor);


//Slice method
console.log("\nUsed to fetch specific part of an array")
let specificPortion = numbers.slice(2,4); //not print last specified index element i.e numbers[4]
console.log(specificPortion);


//forEach method
console.log("\nExecute a function one for each array element");
add.forEach((item,index)=>{
    console.log(`${index} : ${item}`);
})


//filter()
console.log("\nCreates a new array with all elements that pass the test implemented by the provided function.");
let filteredData = fruits.filter(x=>{
    x.startsWith('b');
})
let filteredDatas = numbers.filter(x=>{
    x * 2;
})
console.log(filteredData);
console.log(filteredDatas);


export {}