class Vector {
  constructor(x, y) {
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

  mult(x, y) {
    const vectorComponents = [...arguments];
    if (
      vectorComponents.every((element) => Number.isFinite(element)) &&
      vectorComponents.every((element) => typeof element === "number")
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
      console.warn("hmmm");
    }
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

  dist(v) {
    return v.copy().sub(this).mag();
  }

  normalize() {
    const len = this.mag();
    if (len !== 0) this.mult(1 / len);
    return this;
  }

  limit(max) {
    const mSq = this.magSq();
    if (mSq > max * max) {
      this.div(Math.sqrt(mSq)).mult(max);
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

  dot(v) {
    return this.x * (v.x || 0) + this.y * (v.y || 0);
  }

  angleBetween(v) {
    const dotmagmag = this.dot(v) / (this.mag() * v.mag());

    let angle;
    angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag)));
    angle = angle * Math.sign(this.cross(v).z || 1);
    // if (this.p5) {
    //   angle = this.p5._fromRadians(angle);
    // }
    return angle;
  }

  cross(v) {
    const x = this.y * 0 - 0 * v.y;
    const y = 0 * v.x - this.x * 0;
    // const z = this.x * v.y - this.y * v.x;

    return new Vector(x, y);
  }
}
// Static div
// let v1 = new Vector(9, 4);
// let v2 = new Vector(3, 2);
// let v = v1.div(v2);
// console.log(v);

// Static dot
// let v1 = new Vector(1, 2);
// let v2 = new Vector(3, 4);
// let v = v1.dot(v2);
// console.log(v);

// Static angleBetween
// let v1 = new Vector(1, 0);
// let v2 = new Vector(0, 1);
// let angle = v1.angleBetween(v2);
// console.log(angle);

// Static add
// let v1 = new Vector(4, 5);
// let v2 = new Vector(1, 1);
// v1.add(v2);
// console.log(v1);

// Static sub
// let v1 = new Vector(4, 5);
// let v2 = new Vector(1, 1);
// v1.sub(v2);
// console.log(v1);

// Static angleBetween
// let v1 = new Vector(1, 0);
// let v2 = new Vector(0, 1);
// let angle = v1.angleBetween(v2);
// console.log(angle);

// Static normalize
//let v = new Vector(20, 10);
//v.normalize();
//console.log(v);

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
