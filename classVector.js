class Vector {
  constructor(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  }
  
  /* 
  * mult()
  * let v1 = new Vector(2,4);
  * let v2 = new Vector(2,2);
  * console.log(v1.mult(v2))
  */
  mult(v) {
    if(v instanceof Vector) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }
    this.x *= v;
    this.y *= v;
    this.z *= v;
    return this;
  }
}

export default Vector;
