var default_minute = 30, default_second = 0;
var m = default_minute, s = default_second; // minute and second
var onPause = 1;
var t; // timer

$(document).ready(function(){
    reset();
});

function toggle() {
    if (onPause) {
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
    m = 30;
    s = 0;
    onPause = 1;
    document.getElementById("timebtn").innerHTML = "Start";
    document.getElementById("time").innerHTML = m + ":" + s;
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
