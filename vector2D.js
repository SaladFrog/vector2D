class Vector {
    constructor(x,y) {
        this.x = x || 0;
        this.y = y || 0;
    }
  
  copy() {
    return new Vector(this.x, this.y);
  }
  
  add(v) {
    this.x += v.x || 0;
    this.y += v.y || 0;
    return this;
  }
  sub(v) {
    this.x -= v.x || 0;
    this.y -= v.y || 0;
    return this;
  }
 mult(v) {
      this.x *= v.x;
      this.y *= v.y;
      return this;
  }
    
  div(v) {
    this.x /= v.x || 0;
    this.y /= v.y || 0;
    return this;
  }

  mag() {
    return Math.sqrt(this.magSq());
  }
  magSq() {
    const x = this.x;
    const y = this.y;
    return x * x + y * y;
  }
  dot(v) {
    return this.x * (v.x || 0) + this.y * (v.y || 0);
  }
  //cross() {}
  dist(v) {
    return v.copy().sub(this).mag();
  }
  //heading
  getAngle() {
    const h = Math.atan2(this.y, this.x);
    return h;
  }
  //setHeading
  setAngle(a) {
    let m = this.mag();
    this.x = m * Math.cos(a);
    this.y = m * Math.sin(a);
    return this;
  }
}

let v1 = new Vector(10, 20);
let v2 = new Vector(2, 2);
//console.log(new Vector(1,2));
//console.log(v2.copy());
//console.log(v1.add(v2));
//console.log(v1.sub(v2));
//console.log('mult', v2.mult(v1));
//console.log(v1.div(v2));
//console.log(v1.mag());
//console.log(v2.magSq())
//console.log(v1.dot(v2))
//console.log();
//console.log(v1.dist(v2));
