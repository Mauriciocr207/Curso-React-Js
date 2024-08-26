/**
 * Arrays
 */

const arr = new Array();

let arrModified = [...arr, 5];
arrModified.push(5);


const arr3 = arrModified.map(num => num*2);

console.log(arr, arrModified, arr3);