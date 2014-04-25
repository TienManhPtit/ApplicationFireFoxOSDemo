// JavaScript Document

var clickHandler  = {
	'onClickClose' : function(){
	window.parent.close();	
	}
	
};


window.addEventListener('click',function(evt){
	if(clickHandler[evt.target.id]){
	  	clickHandler[evt.target.id].call(this,evt);
	}
});