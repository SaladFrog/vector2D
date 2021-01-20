class Vector {
  constructor(x, y) {
  this.x = x || 0;
  this.y = y || 0;
  }
  
  mult(x, y) {
    if(x instanceof Vector) {
    console.log("instanceof")
    this.x *= x.x;
    this.y *= x.y;
    return this;
  }  
    
  const Vcomp = [...arguments]
  if(Vcomp.every(element => Number.isFinite(element))) {
    console.log('isfinite')
    if(arguments.length === 1) {
      console.log("arg 1")
       this.x *= x;
       this.y *= x;
    }
    if(arguments.length === 2) {
      console.log("arg 2")
      this.x *= x;
      this.y *= y;
    }
  }
  return this;
  }
}

let v1 = new Vector(1,1);
let v2 = new Vector(1,2);
//let v = {x: 1, y: 5};
//let num = 5;

console.log(v2.mult(v2))




