var ccan; //circuits canvas
var tcan; //tools canvas
var ccon; //circuits context
var tcon; //tools context

window.onload = function(){
	//create canvas
	ccan = document.getElementById('circuits');
	tcan = document.getElementById('tools');
	//get context
	ccon = ccan.getContext('2d');
	tcon = tcan.getContext('2d');
	var or = new Image();
	or.src = "or.png";
	or.onload = function(){
		tcon.drawImage(or, 10, 60);
	}
};

