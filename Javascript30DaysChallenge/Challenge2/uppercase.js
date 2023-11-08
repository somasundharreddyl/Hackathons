//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
//Input : 'the quick brown fox' 
//Output: "The Quick Brown Fox'

let str='the quick brown fox';

let capitalizeSentence=function(str){
    let words=str.split(" ");
    let capitalizeWords=words.map(function(element){
     return  element.charAt(0).toUpperCase() + element.slice(1) 
});
    return capitalizeWords.join(' ');  
}

console.log(capitalizeSentence(str));