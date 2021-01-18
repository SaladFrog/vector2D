class Vector {

  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
  
  copy() {
    return new Vector(this.x, this.y);
  }
  
  add(x, y) {
    this.x += x.x || 0;
    this.y += x.y || 0;
    return this;
  }
  
  sub(x, y) {
    this.x -= x.x || 0;
    this.y -= x.y || 0;
    return this;
  }
  
  mult(x, y) {
    const vectorComponents = [...arguments];
    if (
    vectorComponents.every(element => Number.isFinite(element)) &&
    vectorComponents.every(element => typeof element === 'number')
  ) {
    if (arguments.length === 1) {
      this.x *= x;
      this.y *= x;
    }
    if (arguments.length === 2) {
      this.x *= x;
      this.y *= y;
    }
  } else {
    console.warn(
      'hmmm'
    );
  }
  return this;
  }
  
  div(x, y) {
    this.x /= x.x || 0;
    this.y /= x.y || 0;
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

  dist(v) {
    return v
      .copy()
      .sub(this)
      .mag();
  }
  
  normalize() {
    const len = this.mag();
    if (len !== 0) this.mult(1 / len);
    return this;
  }
  
  limit(max) {
    const mSq = this.magSq();
    if (mSq > max * max) {
      this.div(Math.sqrt(mSq))
        .mult(max);
    }
    return this;
  }
  
}

// Static normalize
var v = new Vector(20, 10);
v.normalize();
console.log(v);
