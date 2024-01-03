
//**Challenge 13**
//Problem Statement: Implement a memoization function.
//Description: Write a function that takes a function as its argument and returns a memoized version of the function.
//Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.

function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = func.apply(this, args);
        }
        return cache[key];
    };
}
function multiply(a, b) {
    console.log("Performing expensive calculation...");
    return a * b;
}
const memoizedAdd = memoize(multiply);


console.log(memoizedMultiply(3, 4)); 
console.log(memoizedMultiply(5, 6)); 

