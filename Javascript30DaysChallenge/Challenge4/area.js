
//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.



let area =(a,b,c)=>{
    let s=(a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
}

let a=5,b=6,c=7;
console.log(area(a,b,c));