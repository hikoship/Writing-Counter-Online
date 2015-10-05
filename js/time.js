var onPause = 1;
var interval, terminal;
var date = new Date();
var i;

$(document).ready(function(){
    reset();
});

function toggle() {
    if (onPause) {
        if (document.getElementById("timebtn").innerHTML == "Start")
            reset();
        onPause = 0;
        date = new Date();
        terminal = interval + Math.floor(date.getTime() / 1000);
        document.getElementById("timebtn").innerHTML = "Pause";
        countDown();
    }
    else {
        onPause = 1;
        document.getElementById("timebtn").innerHTML = "Resume";
        pause();
    }
}

function reset() {
    cusMin = parseInt(document.getElementById("xxxxx").value);
    if (cusMin) interval = cusMin * 60;
    else interval = 30 * 60;
    onPause = 1;
    document.getElementById("timebtn").innerHTML = "Start";
    display(interval);
    date = new Date();
    terminal = interval + Math.floor(date.getTime() / 1000);
    pause();
}

function countDown() {
    i = setInterval(function () {
        date = new Date();
        if (terminal >= Math.floor(date.getTime() / 1000)) {
            interval = terminal - Math.floor(date.getTime() / 1000);
            display(interval);
        }

        else toggle();

    }, 1000);

}

function pause() {
    clearInterval(i);
}

function display(t) {
    var m = Math.floor(t / 60);
    var s = t % 60;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    document.getElementById("time").innerHTML = m + ":" + s;
}
