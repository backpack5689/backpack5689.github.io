var timer = document.getElementById("timerDisplay");
var scrambleText = document.getElementById("scrambleDisplay");
var watch = new stopwatch(timer);
var halt = 0;
var keyDown = false;
var hold = 0;
var threshold = 25;
var scramble = new Scrambo();
scrambleText.textContent = scramble.get();
//"Next Scramble" Button Listener


//Timer Event Listeners
document.body.addEventListener('keydown', function(key) {
    if(key.which === 32){
        hold++;
        console.log(hold);
        if (!keyDown) {
            keyDown = true;
            if(watch.isOn){
                watch.stop();
                halt = 1;
                scrambleText.textContent = scramble.get();
            }
        }
        else if(hold >= threshold){
            watch.reset();
        }
    }
});
document.body.addEventListener('keyup', function(key){
    if(key.which === 32){
        console.log(hold);
        if(halt === 0 && hold >= threshold){
            watch.start();
        }
        else{
            console.log("Removing value for hold");
            halt = 0;
            hold = 0;
        }
        keyDown = false;
    }
});