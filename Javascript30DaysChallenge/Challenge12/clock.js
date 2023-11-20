//Challenge 12
//Write a JavaScript program to create a clock.
//Note: The output will come every second.
//Expected Console Output:
//"14:37:42"
//"14:37:43"
//"14:37:44"

function clockTicking(){

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    console.log(time);
    
    }

setInterval(clockTicking,1000);

