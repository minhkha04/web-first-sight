let numbers = [5, 4, 5, 7];
let sum1 = 0;
for (let element of numbers) {
    sum1 += element;
}
console.log(sum1);

let sum2 = numbers.reduce((res, cur) => {return res + cur});
console.log(sum2); 