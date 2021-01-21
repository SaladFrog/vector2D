class Vector {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  /*
   * copy()
   * let v1 = new Vector(2,4);
   * console.log(v1.copy())
   */
  copy() {
    return new Vector(this.x, this.y, this.z);
  }

  /*
   * add()
   * let v1 = new Vector(2,4);
   * let v2 = new Vector(2,2);
   * console.log(v1.add(v2))
   */
  add(x, y, z) {
    if (x instanceof Vector) {
      this.x += x.x || 0;
      this.y += x.y || 0;
      this.z += x.z || 0;
      return this;
    }
    this.x += x || 0;
    this.y += y || 0;
    this.z += z || 0;
    return this;
  }

  /*
   * sub()
   * let v1 = new Vector(2,4);
   * let v2 = new Vector(2,2);
   * console.log(v1.sub(v2))
   */
  sub(x, y, z) {
    if (x instanceof Vector) {
      this.x -= x.x || 0;
      this.y -= x.y || 0;
      this.z -= x.z || 0;
      return this;
    }
    this.x -= x || 0;
    this.y -= y || 0;
    this.z -= z || 0;
    return this;
  }

  /*
   * mult()
   * let v1 = new Vector(2,4);
   * let v2 = new Vector(2,2);
   * console.log(v1.mult(v2))
   */
  mult(x, y, z) {
    if (x instanceof Vector) {
      this.x *= x.x;
      this.y *= x.y;
      this.z *= x.z;
      return this;
    }
    const Vcomp = [...arguments];
    if (Vcomp.every((element) => Number.isFinite(element))) {
      if (arguments.length === 1) {
        this.x *= x;
        this.y *= x;
        this.z *= x;
      }
      if (arguments.length === 2) {
        this.x *= x;
        this.y *= y;
      }
    }
    return this;
  }

  /*
   * div()
   * let v1 = new Vector(2,4);
   * let v2 = new Vector(2,2);
   * console.log(v1.div(v2))
   */
  div(x, y, z) {
    if (x instanceof Vector) {
      this.x /= x.x;
      this.y /= x.y;
      this.z /= x.z;
      return this;
    }
    const Vcomp = [...arguments];
    if (Vcomp.every((element) => Number.isFinite(element))) {
      if (arguments.length === 1) {
        this.x /= x;
        this.y /= x;
        this.z /= x;
      }
      if (arguments.length === 2) {
        this.x /= x;
        this.y /= y;
      }
    }
    return this;
  }

  mag() {
    return Math.sqrt(this.magSq());
  }

  /*
   * magSq()
   * let v1 = new Vector(6,4,2);
   * let v = v1.magSq());
   * console.log(v)
   */
  magSq() {
    const x = this.x;
    const y = this.y;
    const z = this.z;
    return x * x + y * y + z * z;
  }

  /*
   * dot()
   * let v1 = new Vector(1,2,3);
   * let v2 = new Vector(2,3,4);
   * let v = v1.dot(v2);
   * console.log(v)
   */
  dot(x, y, z) {
    if (x instanceof Vector) {
      return this.dot(x.x, x.y, x.z);
    }
    return this.x * (x || 0) + this.y * (y || 0) + this.z * (z || 0);
  }

  /*
   * cross()
   * let v1 = new Vector(1,2,3);
   * let v2 = new Vector(1,2,3);
   * let v = v1.cross(v2);
   * console.log(v)
   */
  cross(v) {
    const x = this.y * v.z - this.z * v.y;
    const y = this.z * v.x - this.x * v.z;
    const z = this.x * v.y - this.y * v.x;
    return new Vector(x, y, z);
  }

  /*
   * dist()
   * let v1 = new Vector(1,0,0);
   * let v2 = new Vector(0,1,0);
   * let distance = v1.dist(v2);
   * console.log(distance)
   */
  dist(v) {
    return v.copy().sub(this).mag();
  }

  /*
   * normalize()
   * let v1 = new Vector(10,20,2);
   * v1.normalize();
   * console.log(v1)
   */
  normalize() {
    const len = this.mag();
    if (len !== 0) this.mult(1 / len);
    return this;
  }

  /*
   * limit()
   * let v1 = new Vector(10,20,2);
   * v1.limit(5);
   * console.log(v1)
   */
  limit(max) {
    const mSq = this.magSq();
    if (mSq > max * max) {
      this.div(Math.sqrt(mSq)).mult(max);
    }
    return this;
  }

  /*
   * setMag()
   * let v1 = new Vector(10,20,2);
   * v1.setMag(10);
   * console.log(v1)
   */
  setMag(n) {
    return this.normalize().mult(n);
  }
  
  
  /*
  *
  */
  //////////////////
  // need testing //
  //////////////////
  /*
  *
  */
  
  /*
   * dot()
   * let v1 = new Vector(1,2,3);
   * let v2 = new Vector(2,3,4);
   * let v = v1.dot(v2);
   * console.log(v)
   */
  heading() {
    const h = Math.atan2(this.y, this.x);
    return h;
  }

  /*
   * dot()
   * let v1 = new Vector(1,2,3);
   * let v2 = new Vector(2,3,4);
   * let v = v1.dot(v2);
   * console.log(v)
   */
  rotate(a) {
    let newAngle = this.heading() + a;
    const mag = this.mag();
    this.x = Math.cos(newAngle) * mag;
    this.y = Math.sin(newAngle) * mag;
    return this;
  }

  /*
   * dot()
   * let v1 = new Vector(1,2,3);
   * let v2 = new Vector(2,3,4);
   * let v = v1.dot(v2);
   * console.log(v)
   */
  angleBetween(v) {
    const dotmagmag = this.dot(v) / (this.mag() * v.mag());
    let angle;
    angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag)));
    angle = angle * Math.sign(this.cross(v).z || 1);
    return angle;
  }

  /*
   * dot()
   * let v1 = new Vector(1,2,3);
   * let v2 = new Vector(2,3,4);
   * let v = v1.dot(v2);
   * console.log(v)
   */
  fromAngle(angle, length) {
    if (typeof length === "undefined") {
      length = 1;
    }
    return new Vector(length * Math.cos(angle), length * Math.sin(angle), 0);
  }
}

export default Vector;
