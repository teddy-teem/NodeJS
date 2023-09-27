// // 1. destructuring an object with our defined name properties

// // 1. swap value
// let a = 10;
// let b= 20;
// // [a,b]=[b,a]
// b=a+(a=b)-b;

// // a=b;
// // b=a+b;
// // a=a-b;

// console.log(a, b);

// // 2. both array are equal ?

// const isEqualArray = (a, b) =>{
//     return a.lenght === b.lenght && a.every((v,i) => v===b[i]);
// }
// a=[1,2,3], b=[1,2,4];
// console.log(isEqualArray(a,b));

// // 3. suffle an array
// a = [1,2,3,4,5,6,7,8];
// console.log(a.sort(()=> Math.random() - 0.5))

// // 4. sort working
// let fruits = ["mango", "orange", "apple", "banana"];
// let numbers = [2,5,1,4,8,3,4,6];
// // console.log(fruits.sort());
// console.log(numbers.sort());
// console.log(numbers.sort((a,b) => b-a));

//synchronously print 1,2,3 ....n after each value's second;

const timer = (i) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(i);
    }, i)
  );

const start = async (n) => {
    console.log("===Starting=====")
  for (let i = 0; i < n; i++) {
    const res = await timer(i);
    console.log(res);
  }
  console.log("===Starting=====")

};

start(4);
