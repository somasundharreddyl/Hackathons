//**Challenge 8**  
 //Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.  
 //Sample array : [1, 2, 3] and subset length is 2  
 //Expected output : [[2, 1], [3, 1], [3, 2]]

function subSets(arr,length){
    const result = [];
    function generateCombinations(start, currentCombination) {
        if (currentCombination.length === length) {
            result.push([...currentCombination]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            currentCombination.push(arr[i]);
            generateCombinations(i + 1, currentCombination);
            currentCombination.pop();
        }
}
generateCombinations(0, []);
return result;
}


let arr = [1,2,3];
 let length=2;
console.log(subSets(arr,length));
