// let anrry = [];
// let  n;
// while (true) {
//     n = Number(prompt(`Input: `));
//     if(Number.isInteger(n) && n > 0) {
//         break;
//     }
// }

// for (let i = 0; i < n; i++) {
//     anrry.push(Number(prompt(`Input element: ${i + 1}`)))
// }
// console.log(anrry);

function createRandomArray(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

let n = Number(prompt(`Input n: `));
let arr = createRandomArray(n);
console.log(arr);

let reverseArr = arr.slice().reverse();
console.log(reverseArr);

arr = arr.sort((a, b) => a - b);
console.log(arr);

let sum = arr.reduce((res, cur) => {return res + cur}, 0);
console.log(sum);

let input = Number(prompt(`Input find: `));
let indexArr  = [];
for(let index in arr) {
    if(input === arr[index]) {
        indexArr.push(index);
    }
}
console.log(indexArr);