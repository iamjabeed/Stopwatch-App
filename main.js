const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let hour = 00;
let minute = 00;
let second = 00;
let ms = 00;
let timeIntevel;

startBtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});
stopBtn.addEventListener("click", function () {
  timer = false;
});
resetBtn.addEventListener("click", function () {
    timer = false;
    ms=0;
    hour = 0;
    minute = 0;
    second = 0;
    document.querySelector(".ms").innerText = "00";
    document.querySelector(".seconds").innerText = "00";
    document.querySelector(".minutes").innerText = "00";
    document.querySelector(".hours").innerText = "00";
  });

function stopWatch() {
  if (timer) {
    ms++;
    if (ms == 100) {
      second++;
      ms = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }
    let msStr = ms;
    let secondStr = second;
    let minuteStr = minute;
    let hourStr = hour;

    if (msStr < 10) {
      msStr = "0" + msStr;
    }
    if (secondStr < 10) {
      secondStr = "0" + secondStr;
    }
    if (minuteStr < 10) {
      minuteStr = "0" + minuteStr;
    }
    if (hourStr < 10) {
      hourStr = "0" + hourStr;
    }
    document.querySelector(".ms").innerText = msStr;
    document.querySelector(".seconds").innerText = secondStr;
    document.querySelector(".minutes").innerText = minuteStr;
    document.querySelector(".hours").innerText = hourStr;
    setTimeout(stopWatch, 10);
  }
}
