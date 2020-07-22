var timer = document.getElementById("timerDisplay");
var watch = new stopwatch();
if(!watch.isOn)
{
    document.onkeydown = watch.reset();
    document.onkeyup = watch.start();
}
else
{
    document.onkeypress(watch.stop());
}