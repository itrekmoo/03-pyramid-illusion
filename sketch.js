// sketch for animating perspective of 2d triangle to simulate a pyramid
// inspired by underside of bridge: graffiti in Minniapolis seen from bus

let pyr; // pyramid object variable
let start;
let starty;
let len; // variable to hold length of lines / responsive to canvas

function setup() {
	var myCanvas = createCanvas(windowWidth * 0.8, windowWidth * 0.4);
// Move the canvas so it's inside a div.
  myCanvas.parent('sketch');

//	createCanvas(800,300);
	background(150, 123, 182);
	startx = width/2;
	starty = height - (height * 0.8);
//	pyr = new Pyramid(startx, starty, len);
	len = floor(windowWidth/6);
	print('len: ', len);
	pyr = new Pyramid(startx, starty, len);

}

function draw() {
	background(150, 123, 182);
	pyr.draw();
	pyr.update();
}

class Pyramid {

// data
constructor(_startx, _starty, _len) {


	this.ax = _startx; 
	this.ay = _starty; 
	this.len = _len;
	this.bx = this.ax - this.len; 
	this.by = this.ay + this.len; 
	this.cx = this.ax + this.len;
	this.cy = this.ay + this.len;
	// this.bx = this.ax - 100; 
	// this.by = this.ay + 100; 
	// this.cx = this.ax + 100;
	// this.cy = this.ay + 100;

	this.dx = this.bx;
	this.dy = this.by; // start off overlapping left side

		this.diff = this.cx-this.bx; // right corner's x minus left corner's x

}

// functionality
draw() {
	stroke(255);
	strokeWeight(2);

// draw the triangle
	line(this.ax, this.ay, this.bx, this.by); // apex to bottom left
	line(this.ax, this.ay, this.cx, this.cy); // apex to bottom right

	line(this.bx, this.by, this.dx, this.dy); // base of pyramid
	line(this.cx, this.cy, this.dx, this.dy); // base of pyramid	
}

update() {
// animate line thru triangle

	stroke(200);
	stroke(255);
	strokeWeight(2);
	line(this.ax, this.ay, this.dx, this.dy);
	this.dx += 0.25; // draw progresive set of lines left to right
	if (this.dx > this.cx) { // check if lines meet right edge triange; then reset
		this.dx = this.bx;
		background(150, 123, 182);
	}

	 if (this.dx < (this.bx + this.diff/2)) {
		this.dy += 0.075;
	} else if (this.dx > (this.bx + this.diff/2))	 {
		this.dy -= 0.075;
	}
	// print("cx", this.cx);
	// print("bx", this.bx);
	//print("diff ", this.diff);
	 
}
}