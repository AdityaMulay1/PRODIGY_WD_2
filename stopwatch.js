let timer;
let isRunning = false;
let lapCount = 1;
let milliseconds = 0;

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateDisplay, 10); // Update every 10 milliseconds
        document.getElementById('startBtn').innerText = 'Pause';
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById('startBtn').innerText = 'Resume';
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    document.getElementById('display').innerText = '00:00:00.000';
    document.getElementById('startBtn').innerText = 'Start';
    document.getElementById('lapList').innerHTML = '';
    isRunning = false;
    lapCount = 1;
    milliseconds = 0;
}

function recordLap() {
    const currentTime = document.getElementById('display').innerText;
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCount}: ${currentTime}`;
    document.getElementById('lapList').appendChild(lapItem);
    lapCount++;
}

function updateDisplay() {
    milliseconds += 10;

    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let ms = milliseconds % 1000;

    const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}.${ms}`;
    document.getElementById('display').innerText = formattedTime;
}

function padNumber(num) {
    return num < 10 ? `0${num}` : num;
}
