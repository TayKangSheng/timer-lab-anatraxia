// your code here:
function timer () {
// Create Javascript selectors that target each of the timer buttons.
  var resetButton, startButton, pauseButton, timerH1, timerId, seconds
  function init () {
    resetButton = document.getElementById('reset')
    startButton = document.getElementById('start')
    pauseButton = document.getElementById('pause')
    timerH1 = document.getElementById('timer')
    timerId = 0
    seconds = 0

    // Create click handlers (empty, for now) for each of the timer buttons.
    resetButton.addEventListener('click', resetTimer)
    startButton.addEventListener('click', startTimer)
    pauseButton.addEventListener('click', pauseTimer)
  }

// Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().

// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
  function updateTime () {
    seconds += 1
    timerH1.innerHTML = 'Time Elapsed: ' + seconds
  }
// Inside your click handler for the start button...
// Replace "Stop Watch" in the HTML with the content of the seconds variable.
// Use setInterval() to increment the timer by 1 every second.
  function startTimer () {
    timerH1.innerHTML = 'Time Elapsed: ' + seconds
    timerId = setInterval(updateTime, 1000)
  }

// Inside your click handler for the pause button...
// Stop -- but do not reset! -- the timer using clearInterval().
// Once again, inside your click handler for the start button...
// Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
  function pauseTimer () {
    clearInterval(timerId)
  }
// Inside your click handler for the reset button...
// Stop the timer using clearInterval().
// Reset the timer.
// Replace the time in your HTML with the original "Stop Watch" text.
  function resetTimer () {
    clearInterval(timerId)
    seconds = 0
    timerH1.innerHTML = 'Stop Watch'
  }
// Bonus
//
// Reformat your timer so that everything in your timers.js file -- variables and functions -- are part of a global object. It would look something like...
  return {
    init: init
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var testTimer = timer()
  testTimer.init()
})
