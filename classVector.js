class Vector {
  constructor(x, y) {
  this.x = x || 0;
  this.y = y || 0;
  }
  
  /* 
  * mult()
  * let v1 = new Vector(2,4);
  * let v2 = new Vector(2,2);
  * console.log(v1.mult(v2))
  */
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
export default Vector;
