// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	//chrome.alarms.create({delayInMinutes: 0.05});
	//chrome.alarms.create({when: Date.now()});
	//alert("Time's up! Let's click the submit button");
	console.log("set clock at:");

    var now = new Date();
    var day = now.getDate();
    // '+' casts the date to a number, like [object Date].getTime();
	//                        YYYY               MM              DD  HH MM SS MS
    //var timestamp = +new Date(now.getFullYear(), now.getMonth(), day, 24, 0, 0, 0);console.log(timestamp);
	//var timestamp = +new Date(now.getFullYear(), now.getMonth(), day, 23, 59, 59, 600);console.log(timestamp);
	// chrome.alarms.create('24PM', {
        // when: timestamp
    // });

	// var now1 = new Date.now();
	var here = Date.now();

	var t1 = here;
	var t2 = here+400;
	var t3 = here+700;
	console.log(t1);
	console.log(t2);
	console.log(t3);

	//use abcd and wxyz for save the comparing time
	chrome.alarms.create('a', {when: t1});//this is for click on tab0
	chrome.alarms.create('b', {when: t2});//this creates an alarm to click on tab1, after click on tab0 1s (1 second delay)
	chrome.alarms.create('c', {when: t3});//this creates an alarm to click on tab1, after click on tab0 1s (1 second delay)
	//chrome.alarms.create('d', {when: here+900});//this creates an alarm to click on tab1, after click on tab0 1s (1 second delay)

});
//NOTE: put the website at tab0 and tab1 and tab3 if needed, update to search for name of tab and relative position later
//eg: search for name of first website and then continue to update tab.index relative position

var gloTabs = null;
chrome.tabs.query({currentWindow: true}, function(tabs) { gloTabs = tabs});


chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === 'a') {//t0 means tab 0
  // chrome.tabs.query({currentWindow: true}, function(tabs) {
	// 		// console.log("tab length");console.log(tabs.length);
	// 		// console.log("tab id");console.log(tabs[1].url);
	// 		//console.log("tab indx");console.log(tabs[1].index);
	// 		chrome.tabs.update(tabs[0].id, {active: true, highlighted: true});
	// 	  chrome.tabs.sendMessage(tabs[0].id, {"msg": "p0"});
  // });
		chrome.tabs.update(gloTabs[0].id, {active: true});//, highlighted: true});
	  chrome.tabs.sendMessage(gloTabs[0].id, {"msg": "a"});
  }
	else if (alarm.name === 'b') {//
	  // console.log("send message to press button");
		chrome.tabs.update(gloTabs[1].id, {active: true});//, highlighted: true});
	  chrome.tabs.sendMessage(gloTabs[1].id, {"msg": "b"});
	}
	else if (alarm.name === 'c') {
	  // console.log("send message to press button");
		chrome.tabs.update(gloTabs[2].id, {active: true});//, highlighted: true});
	  chrome.tabs.sendMessage(gloTabs[2].id, {"msg": "c"});
	}

 // if (alarm.name === 'd') {
 //  // console.log("send message to press button");
 // chrome.tabs.update(gloTabs[3].id, {active: true});//, highlighted: true});
 //  chrome.tabs.sendMessage(gloTabs[3].id, {"msg": "w"});
 // }


});

// This block is new!
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     //if( request.msg === "swTa" ) {
// 				chrome.tabs.query({currentWindow: true}, function(tabs) {
// 						// console.log("switch active tab");
// 						chrome.tabs.update(tabs[3].id, {active: true, highlighted: true});
// 						//console.log(tabs.length);
// 						//console.log(tabs[0].url);
// 	  		});
//     //}
//   }
// );
