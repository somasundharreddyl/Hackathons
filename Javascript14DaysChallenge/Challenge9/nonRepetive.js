

//**Challenge 9**  
//Write a JavaScript function to find the first not repeated character.  
//Sample arguments : 'abacddbec'  
//Expected output : 'e'

let str='abacddbec';

function firstNonRepetition(str){
    
    let strCount=[];
    for(const element of str){
      strCount[element]=(strCount[element] || 0)+1;
    }

    for(const element of str){
      if(strCount[element]===1){
        return element;
      }
    }
}

let result=firstNonRepetition(str);
console.log('First NON-Repetative Character : ',result);

