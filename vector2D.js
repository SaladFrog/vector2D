//https://github.com/processing/p5.js/blob/1.1.9/src/math/p5.Vector.js#L238
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

  dot(x, y) {
    return this.dot(x.x,x.y);
    //return this.x * (x || 0) + this.y * (y || 0);
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

  setMag(n) {
    return this.normalize().mult(n);
  }

  heading() {
    const h = Math.atan2(this.y, this.x);
    return h;
  }

  rotate(a) {
    let newHeading = this.heading() + a;
    const mag = this.mag();
    this.x = Math.cos(newHeading) * mag;
    this.y = Math.sin(newHeading) * mag;
    return this;
  }

  //angleBetween(v) {}

}

// Static normalize
//let v = new Vector(20, 10);
//v.normalize();
//console.log(v);

// Static dot
let v1 = new Vector(1, 2);
let v2 = new Vector(3, 4);
console.log(v1.dot(v2));

// Static setMag
//let v = new Vector(10, 20);
//v.setMag(10);
//console.log(v);

// Static heading
//let v1 = new Vector(30,50);
//console.log(v1.heading());
//let v2 = new Vector(40,50);
//console.log(v2.heading());
//let v3 = new Vector(30,70);
//console.log(v3.heading());

// Static rotatio
//let v = new Vector(10.0, 20.0);
//v.rotate(Math.PI / 2);
//console.log(v);
