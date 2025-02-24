
//timer start when page loads

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;
        document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
        if (--timer < 0) clearInterval(this);
    }, 1000);
}

window.onload = function () {
    startTimer(10 * 60 + 1);
};