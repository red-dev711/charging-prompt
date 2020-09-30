// Removed all the unnecessary comments

chrome.idle.setDetectionInterval(15*60);

chrome.idle.onStateChanged.addListener(function(newState) {
  if(newState == "idle") {
    alert("You've been idle for too long...check if the laptop is still charging.");
  }
  else if(newState == "locked") {
    alert("You laptop locked out...Just check if the laptop is still charging or not.");
  }
  else if(newState == "active") {
    alert("Before going any further, check if the laptop is charging.");
  }
});
