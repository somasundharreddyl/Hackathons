

// **Challenge 7**  
//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function pairs(num1,num2){
    return num1===50 || num2===50 || (num1+num2)===50;
}

console.log(pairs(50,25));