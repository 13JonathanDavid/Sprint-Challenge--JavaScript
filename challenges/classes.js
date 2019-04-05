// 1. Copy and paste your prototype in here and refactor into class syntax.
class Cuboid {
	constructor(length, width, height) {
		this._length = length;
		this._width = width;
		this._height = height;
	}
	
	set length(i){
		if(typeof(i)==="number")this._length=i;
		else throw 'Cube set to non number';
	}
	set width(i){
		if(typeof(i)==="number")this._width=i;
		else throw 'Cube set to non number';
	}
	set height(i){
		if(typeof(i)==="number")this._height=i;
		else throw 'Cube set to non number';
	}
	volume() {return (this._length * this._width * this._height);}
	surfaceArea(){return 2*(this._length*this._width + this._length*this._height + this._width*this._height);}
}

var cuboid  = new Cuboid(4,5,5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Test your volume and surfaceArea methods by uncommenting the logs below:

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube extends Cuboid{
	constructor (a){
		super(a,a,a);
	}
	volume() {
		return this._length**3;
	}
	surfaceArea() {
		return 6* this._length**2;
	}
	
	set length(i){
		if(typeof(i)==="number")this._width=this._height=this._length=i;
		else throw 'Cube set to non number';
	}
	set width(i){
		if(typeof(i)==="number")this._width=this._height=this._length=i;
		else throw 'Cube set to non number';
	}
	set height(i){
		if(typeof(i)==="number")this._width=this._height=this._length=i;
		else throw 'Cube set to non number';
	}
}
cube = new Cube(5);
 console.log(cube.volume()); // 125
 console.log(cube.surfaceArea()); // 150
