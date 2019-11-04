'use strict';

function triggerNotification(event){
	let opt = {
		  type: "basic",
		  title: "New Ticket",
		  message: "There is a new ticket in the queue!",
		  iconUrl: "icon48.png",
		  requireInteration: true
		}

	chrome.notifications.create('notify223123', opt, function(id) { 
		console.log("Last error:", chrome.runtime.lastError);
	});
}
