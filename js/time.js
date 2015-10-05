var DEFAULT_MINUTE = 30
var m = DEFAULT_MINUTE; // minutes left
var s = 0; // seconds left
var onPause = 1;
var t; // timer

$(document).ready(function(){
    reset();
});

function toggle() {
    if (onPause) {
        if (document.getElementById("timebtn").innerHTML == "Start")
            reset();
        onPause = 0;
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
    cusMin = document.getElementById("xxxxx").value;
    if (cusMin) m = cusMin;
    else m = 30;
    s = 0;
    onPause = 1;
    document.getElementById("timebtn").innerHTML = "Start";
    document.getElementById("time").innerHTML = m + ":" + s;
    if (m < 10) document.getElementById("time").innerHTML =
        '0' + document.getElementById("time").innerHTML;
    if (s < 10) document.getElementById("time").innerHTML += '0';
    pause();
}

function countDown() {
    if (s > 0 || m > 0) {
        if (s > 0) {
            s--;
        }
        else {
            s = 59;
            m--;
        }
        document.getElementById("time").innerHTML = m + ":" + s;
        if (m < 10) document.getElementById("time").innerHTML =
            '0' + document.getElementById("time").innerHTML;
        if (s < 10) document.getElementById("time").innerHTML += '0';
        t = setTimeout("countDown()", 1000);
    }

    // timeout
    else {
        toggle();
        // TODO continue counting
    }
}

function pause() {
    clearTimeout(t);
}
