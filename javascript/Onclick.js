// JavaScript Document


function notification(){
	var win;
		win = window.parent;
		
		var mozNotification;
		
		mozNotification = !win ? window.navigator.mozNotification : win.navigator.mozNotification;
		
		var notification  = mozNotification.createNotification('Test Notification',
			'Hello Notification',
			null
		);
		
		notification.show();
		notification.onClick  = function(){
		  window.alert("You Clicked Notification");	
		};
		notification.onClose  = function(){
		  window.alert("You Clicked Notification");	
		};
}


var clickHandler = {
	'button1' : function(){
		window.parent.alert("Hello Alert");
	},
	
	'button2' : function(){
	   window.parent.alert(prompt("Type text",'initial value'));	
	},
	
	'buttonNotify' : notification,
	
	'buttonBack' : function(){
		window.location.hash = '';
	},
};

document.body.addEventListener('click',function(evt){
if(clickHandler[evt.target.id])
         clickHandler[evt.target.id || evt.target.dataset.fb].call(this,evt);
});