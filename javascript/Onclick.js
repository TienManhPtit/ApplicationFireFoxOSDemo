// JavaScript Document
//var onclick = new Onclick();
var arrAcc = [];
var arrPass = [];
var count = 0;

function init() 
{
	
         if(arrAcc.length==0){
		arrAcc[0] = ("nomovok");
		arrPass[0] = ("nomovok");  
		count = 0;
		 }
}

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
	'buttonLogin' : function(){
		init();
	  var valueUsername,valuePass;
	  
		valueUsername = document.getElementById("username").value;	
		//arrAcc.pop();
		
		valuePass =document.getElementById("pass").value;
		if(arrAcc.length==0)
		window.parent.alert("Username or password Wrong!!");
		else
		for(var i = 0 ; i < arrAcc.length ; i++){	
		if(valueUsername == arrAcc[i].toString() && valuePass == arrPass[i].toString()){
			 window.open("index2.html");
			 break;
		}
		else
		if(i == arrAcc.length-1)
		  window.parent.alert("Username or password Wrong!!");
		}
	},
	'buttonBack' : function(){
	  window.open("index1.html");
	  
	},
	'buttonRegister': function(){
	  var register = document.getElementById("registerForm");	
	  if(register.style.display == "block") {
    		register.style.display = "none";
  	}
	else {
		register.style.display = "block";
	}
	},
	'buttonClear':function(){
		var reusername = document.getElementById("reusername");	
		var repass = document.getElementById("repass");	
		var repass1 = document.getElementById("repass1");	
		
		
		
		reusername.value = "";
		repass.value = "";
		repass1.value = "";
	},
	'buttonCreat':function(){
		init();
		var reusername = document.getElementById("reusername");	
		var repass = document.getElementById("repass");	
		var repass1 = document.getElementById("repass1");	
		
		if(repass.value == repass1.value){
		    	 window.parent.alert("Success!!");
				 count++;
				 arrAcc[count] = ""+reusername.value;
				 arrPass[count] = ""+repass.value;
		}
		else
					window.parent.alert("Password not match!");
	}
};

document.body.addEventListener('click',function(evt){
if(clickHandler[evt.target.id])
         clickHandler[evt.target.id || evt.target.dataset.fb].call(this,evt);
});