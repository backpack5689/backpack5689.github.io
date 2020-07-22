//Using this tutorial: <https://youtu.be/jRhB1IG7uAw>
function stopwatch(elem){
    //Private Variables
    var time = 0;
    var interval;
    var offset;
    
    //Public Variables
    this.isOn = false;

    //Private Functions
    function update() {
        if(this.isOn){
            time += delta();
        }
        var formattedTime = format(time);
        elem.textContent = formattedTime;
    }
    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed
    }
    function format(rawTime) {
        var dTime = new Date(rawTime);
        var minutes = dTime.getMinutes().toString();
        var seconds = dTime.getSeconds().toString();
        var milliseconds = dTime.getMilliseconds().toString();
        if(minutes.length < 2){
            minutes = '0' + minutes;
        }
        if(seconds.length < 2){
            seconds = '0' + seconds;
        }
        while(milliseconds.length < 3)
        {
            milliseconds = '0' + milliseconds;
        }
        return minutes + " : " + seconds + " . " + milliseconds;
    }

    //Public Functions
    this.start = function() {
        if(!this.isOn){
            interval = setInterval(update.bind(this), 25);
            offset = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function() {
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = null;
        }
    };
    this.reset = function() {
        time = 0;
        update();
    };
}
