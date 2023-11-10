

//Write a JavaScript exercise to get the filename extension

let input='challenge5.js';

function getExtension(input){

    if(input.lastIndexOf('.')!==-1){
     return input.slice(input.lastIndexOf('.')+1);
    }else{
        return 'Invalid FileExtension';
    }

}

console.log(getExtension(input));