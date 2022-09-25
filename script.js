let countDownDate = 0;

if (localStorage.getItem("HGDUOSF")) {
  countDownDate = addHours(0, new Date(localStorage.getItem("HGDUOSF")));
  start();
} else {
  countDownDate = addHours(0.75, new Date());
  start();
}

function start() {
  localStorage.setItem("HGDUOSF", countDownDate);
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML =
      minutes.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ":" +
      seconds.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    document.getElementById("restart-btn").classList.remove("hide");
    if (distance <= 0) {
      clearInterval(x);
      restart();
    }
  });
}

function restart() {
  localStorage.clear();
  window.location.reload();
}

function addHours(numOfHours, date) {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  return date;
}
