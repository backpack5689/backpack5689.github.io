//Define vars to hold time data
let ms = 0;
let s = 0;
let m = 0;

//Define timer function
function stopwatch(){
    ms++;
    if(ms / 1000 === 1){
        ms = 0;
        s++;
    }
    if(s / 60 === 1){
        s = 0;
        m++;
    }

    document.getElementById("timerDisplay").innerHTML = m + ":" + s + ":" + ms
}

window.setInterval(stopwatch, 1);

EventSource.onKeyDown(Timer.start())
EventSource.onKeyRelease(Timer.stop())