const TimersList = () => {
  const msDelay = 33;

  function startCountdown() {
    // timer logic modified from:
    // https://www.w3schools.com/howto/howto_js_countdown.asp
    // set date to countdown to
    // get current date/time
    const countdownDate = new Date();
    // add min & sec to it
    countdownDate.setMinutes(countdownDate.getMinutes() + 5);
    countdownDate.setSeconds(countdownDate.getSeconds() + 10);

    const countdownIntervalId = setInterval(() => {
      const timer = document.getElementById("countdown-timer");
      // get today's date and time
      let now = new Date();
      // find distance between now and countdown date
      let distance = countdownDate - now;
      displayTimer(distance, timer);
      // countdown finished
      if (distance < 0) {
        clearInterval(countdownIntervalId);
        timer.innerHTML = "EXPIRED";
      }
    }, msDelay);

    return countdownIntervalId;
  }

  function startTimer() {
    let msCount = 0;
    const timerIntervalId = setInterval(() => {
      const timer = document.getElementById("timer");
      msCount += msDelay;
      displayTimer(msCount, timer);
    }, msDelay);

    return timerIntervalId;
  }

  function displayTimer(milliseconds, element) {
    const msDate = new Date(milliseconds);
    // get minutes, seconds, milliseconds
    let minutes = msDate.getMinutes();
    let seconds = msDate.getSeconds();
    let ms = msDate.getMilliseconds();
    // add leading zeros & display
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    ms = ms.toString().padStart(3, "0");
    element.innerHTML = `${minutes}:${seconds}:${ms}`;
  }

  function stopTimers() {
    if (countdownIntervalId) {
      clearInterval(countdownIntervalId);
    }
    if (timerIntervalId) {
      clearInterval(timerIntervalId);
    }
  }

  return <div></div>;
};

export default TimersList;
