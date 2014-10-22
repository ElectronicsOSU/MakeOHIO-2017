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
	var and = new Image();
	and.src = "and.png";
	var or = new Image();
	or.src = "or.png";
	and.onload = function(){
		tcon.drawImage(and, 10, 10);
	}
	or.onload = function(){
		tcon.drawImage(or, 10, 60);
	}
};

//resize on event
function resizeCanvas(){
	ccan.width = 800;
	ccan.height = 600;
	tcan.width = 200;
	tcan.height = 600;
}

