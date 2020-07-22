var timer = document.getElementById("timerDisplay");
var watch = new stopwatch(timer);
var halt = 1;
document.body.addEventListener('keydown', function(key) {
    if(key.which === 32){
        if(watch.isOn){
            watch.stop();
            halt = 1;
        }
        else{
            watch.reset();
        }
    }
});
document.body.addEventListener('keyup', function(key){
    if(key.which === 32){
        if(halt === 0){
            watch.start();
        }
        else{
            halt = 0;
        }
    }
})