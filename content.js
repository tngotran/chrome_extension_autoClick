// content.js
// console.log("button click1");
var UCH = false;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log("button click2");
    if( request.msg === "a" || request.msg === "b" || request.msg === "c") {
    //  console.log(Date.now());
    		$(document).ready(function(){
    		  setTimeout(function(){
    		   $("#ico-form").find(":submit").click();
    		   //console.log("button click0");
    			},0);
    		});
    }
    if(UCH && request.msg === "c") chrome.runtime.sendMessage({"msg": "swTa"});//switch to UCH tab if that day is UCH open ICO day
  }
);

// i = 0;
// while (i < 3 && flag == true) {

    // chrome.tabs.query({index: 3, active: true, currentWindow: true}, function(tabs) {
	// console.log(tabs.length);




	// if(i>4) break;

// }
