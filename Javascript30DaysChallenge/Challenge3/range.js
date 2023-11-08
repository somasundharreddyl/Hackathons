

//Write a JavaScript program to check whether two given integer values are in the range (50,99) (inclusive). 
//Return true if either of them falls within the range.


function range(a,b){
    return ((a>=50 && a<=99) || (b>=50 && b<=99)) 
}

console.log(range(48,100));
console.log(range(85,105));
console.log(range(75,76));