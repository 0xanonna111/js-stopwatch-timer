let seconds = 0;
let interval = null;

function updateDisplay() {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  document.getElementById("display").innerText =
    `${String(hrs).padStart(2, "0")}:` +
    `${String(mins).padStart(2, "0")}:` +
    `${String(secs).padStart(2, "0")}`;
}

function start() {
  if (interval) return;
  interval = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  pause();
  seconds = 0;
  updateDisplay();
}
