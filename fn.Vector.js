class Vec {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  copy() {
    return new Vec(this.x, this.y);
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
    this.x *= v.x || 0;
    this.y *= v.y || 0;
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
}
