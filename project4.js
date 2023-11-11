//variables for buttons 
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// varibles for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for setInterval and timerStatus
let timerInterval = null;
let timerStatus = "stopped";

//stopWatch function
function stopWatch(){

    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    
        if(minutes / 60 === 1){
           minutes = 0;
           hours++;
        }
    }

    if(seconds < 10 ){
        leadingSeconds = "0" + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }
    if(minutes < 10 ){
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }
    if(hours < 10 ){
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }

    let displaytimer = document.getElementById("timer").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds ; 
}


startStopBtn.addEventListener("click", function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStopBtn").innerHTML = '<i class="bi bi-pause-fill" id="pause"></i>';
        timerStatus = "started";
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById("startStopBtn").innerHTML = '<i class="bi bi-play-fill" id="play"></i>';
        timerStatus = "stopped";
    }
})
 
resetBtn.addEventListener("click", function(){
    
    seconds = 0;
    minutes = 0;
    hours = 0;

    window.clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "00:00:00";


})