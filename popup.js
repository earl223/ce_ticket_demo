'use strict';

// Setup functions

function triggerNotification(event){
	var opt = {
		  type: "basic",
		  title: "New Ticket",
		  message: "There is a new ticket in the queue!",
		  iconUrl: "icon48.png",
		  requireInteraction: true
		}

	chrome.notifications.create('21312312', opt);
}

// Setup listeners
document.getElementById('trigger_notification').addEventListener('click', triggerNotification);
