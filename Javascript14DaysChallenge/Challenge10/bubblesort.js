//**Challenge 10**  
//Write a JavaScript function to apply the Bubble Sort algorithm.  
//"Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".  
//Sample array: \[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213\]  
//Expected output: \[3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1\]



let arr=[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
     for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        }
     }
    } 
}

bubbleSort(arr);

console.log(arr);

