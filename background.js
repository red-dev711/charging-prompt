// let tabId;

// chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
//   tabId = tab[0].id;
//   title = tab[0].title;
//   url = tab[0].url;
//   chrome.idle.setDetectionInterval(15);

//   chrome.idle.onStateChanged.addListener(function (newState) {
//     if (newState == "idle") {
//       console.log(newState);
//       console.log(tabId, title, url);
//       // chrome.tabs.sendMessage(tabId, { state: newState }, function (response) {
//       //   console.log(chrome.runtime.lastError);
//       // });
//     }
//   });
// });
// tabID will have the id value only after this callback function is executed (and callback functions are not executed immediately) so if we want to use this tabId value somewhere then we have to include that inside this callback function.

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
