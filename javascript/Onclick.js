// JavaScript Document
'use strict';
var clickHandler = {
	'button1' : function(){
		window.parent.alert("Hello Alert");
	},
	
	'button2' : function(){
	   window.parent.alert(prompt("Type text",'initial value'));	
	},
	'buttonNotify' : function(){
		var Notification;
		
		Notification = window.Notification;
		
		var notification  = new Notification('Test Notification',{
			body: 'Hello Notification'
		});
		
	}
};

document.body.addEventListener('click',function(evt){
if(clickHandler[evt.target.id])
         clickHandler[evt.target.id].call(this,evt);
});


function myFunction()
{
document.body.getElementsByClassName("demo").innerHTML  = "Love Me? OK?";
}