//Challenge 1 : Write a JavaScript function that reverses a number.
//Input : 32243
//Output: 34223


function reverseNumber(x){
let res=0;
while(x>0){
    let rem=x%10;
    res=rem+(res*10);
    x=Math.floor(x/10);
}
return res;
}
let num=32243;
console.log(reverseNumber(num));