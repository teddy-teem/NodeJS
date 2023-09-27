
console.log("-----------1---------")
// 1. Remove falsy value from array
const miscellaneous = ['jahid', NaN, null, "hasan", false, 'hello', undefined];
const myArray = miscellaneous.filter(Boolean);
console.log(myArray);


console.log("-----------3----------");
// 3. resize array 
const animals = ["dog", "cat", "cow", 'horse', 'lion'];
console.log(animals.length, animals)
animals.length=3;
console.log(animals.length, animals)

console.log("-----------4----------");
// flatt a multidimantional array 
const a = [["jahid", "hasan"], "hasan", "jahid"];
console.log(a.flat()); //wil flat single level
const family =  [[["jahid", "hasan"], "jahid's family"], [[[['a'], 'b','c'],'d']],'e','f']
 console.log(family.flat(Infinity)) // will flat any level


console.log("-----------6----------");
//replace all occurances of string
const quote = "React is a JS framework & this framework is the most popular front-end framework right now";
console.log(quote.replace("framework", "library")) // will re
console.log(quote.replace(/framework/g, "library"))

console.log("-----------7----------");
//performance of a task

const startTime = performance.now();
for(let i =0; i<=400000000; i++) {
    
};
const endTime = performance.now();

console.log("======", endTime-startTime);


