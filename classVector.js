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
  mult(v) {
    if(x instanceof Vector) {
    console.log("instanceof")
    this.x *= v.x;
    this.y *= v.y;
    return this;
  } else {
    this.x *= v;
    this.y *= v;
    return this;
  }  
  }
}
export default Vector;
