// JavaScript Document



var clickHandler  = {
	'onClickClose' : function(){
	window.parent.close();
	},
	'onShowAlert':function(){
		var value = document.getElementById("searchActionBar").value;
       alert("Search result : "+value);	
}
};


window.addEventListener('click',function(evt){
	if(clickHandler[evt.target.id]){
	  	clickHandler[evt.target.id].call(this,evt);
	}
});