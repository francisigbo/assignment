const price = 21234.969;
console.log(Math.floor(price));
console.log(Math.floor(price));
console.log(Math.round(price));
console.log(Math.abs(-49999));
console.log(Math.pow(4, 2));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

// NOTE: CREATE A GUESSING GAME WITH MATH.RANDOM


console.log(Math.min(1,4,5,6,8));
console.log(Math.max(1,4,5,6,8));


// Come back and format properly 
// function biggerNum(a, b){
//    if(a > b){
//         return `${a} is greater than ${b}`;
//     }else if(b > a){
//         return `${b} is grater than ${a}`;
//     }else if(a === b){
//         return `${a}  and ${b} are equal`;
//     }else{
//         return "invalid command";
//     }
//    
// }

// console.log(biggerNum(-23, 23))
// console.log(biggerNum(23, 23))
// console.log(biggerNum(2, 5))
// console.log(biggerNum(10, 4))
// console.log(biggerNum(100, 23))
// console.log(biggerNum(56, 34))
// console.log(biggerNum(11, 5))
// console.log(biggerNum(12, 23))
// console.log(biggerNum(234, 286763))
// console.log(biggerNum(5, 4545))

function greater2(value){
    return Math.pow(value, value);
}

console.log(greater2(10))
console.log(greater2(2))
console.log(greater2(3))



