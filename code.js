function divideAndConquerSum(arr) {
// base case for empty array
if (arr.length === 0){
 return 0;   
}
// base case for array with one element
if (arr.length === 1){
 return arr[0];  
}
// base case for array with two elements 
if (arr.length === 2){
return arr[0] + arr[1];
}

let third = Math.floor(arr.length / 3)
let third1 = arr.slice(0, third)
let third2 = arr.slice(third, 2 * third)
let third3 = arr.slice(2 * third)

var sum1 =  divideAndConquerSum(third1)
var sum2 = divideAndConquerSum(third2)
var sum3 = divideAndConquerSum(third3)

return sum1 + sum2 + sum3 

}
