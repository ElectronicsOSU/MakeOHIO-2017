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
	//resize canvases whenever window changes
	window.addEventListener('resize', resizeCanvas, false);
	window.addEventListener('orientationchange', resizeCanvas, false);
	resizeCanvas();
	var and = new Image();
	and.src = "and.png";
	var or = new Image();
	or.src = "or.png";
	tcon.drawImage(and, 10, 10);
	tcon.drawImage(or, 10, 60);
};

//resize on event
function resizeCanvas(){
	ccan.width = window.innerWidth * .65;
	ccan.height = window.innerHeight * .8;
	tcan.width = window.innerWidth * .25;
	tcan.height = window.innerHeight * .8;
}
