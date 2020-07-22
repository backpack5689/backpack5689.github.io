//Using this tutorial: <https://youtu.be/jRhB1IG7uAw>
function stopwatch(){
    var time = 0;
    var interval;
    var offset;
    this.isOn = false;

    function update(){
        time += delta();
        var formattedTime = timeFormatter(time);
    };
    function delta(){
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    };
    function timeFormatter(timems){
        var t = new Date(timems);
        var minutes = t.getMinutes().toString();
        var seconds = t.getSeconds().toString();
        var mili = t.getMilliseconds().toString();

        if(minutes.length < 2)
        {
            minutes = '0'  + minutes;
        }
        if(seconds.length < 2)
        {
            seconds = '0'  + seconds;
        }
        while(mili.length < 3)
        {
            mili = '0' + mili;
        }

        return minutes + " : " + seconds + " . " + mili;
    };


    this.start = function(){
        if(!this.isOn){
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function(){
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function()
    {
        time = 0;
        update();
    }
}

var watch = new stopwatch();