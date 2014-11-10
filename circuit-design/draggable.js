var dragging_area = new Kinetic.Stage({
	container: 'tools',
	width: 200,
	height: 600,
});

var layer = new Kinetic.Layer();

var and = new Image();
and.onload = function() {
  var image = new Kinetic.Image({
    x: 10,
    y: 10,
    image: and,
    width: 48,
    height: 35
  });
};
and.src = 'and.png';

and.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});
and.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

layer.add(and);
dragging_area.add(layer);