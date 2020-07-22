var timer = document.getElementById("timerDisplay");

if(!watch.isOn)
{
    document.onkeydown(watch.reset());
    document.onkeyup(watch.start());
}
else
{
    document.onkeypress(watch.stop());
}