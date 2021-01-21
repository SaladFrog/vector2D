function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

// alt 1
Vector.prototype.copy = function () {
  return new Vector(this.x, this.y, this.x)
}
// Vector.prototype.other = function () {}

// alt 2
Vector.prototype = {
  copy: function () {
    return new Vector(this.x, this.y, this.z);
  },
  // other: function () {}
};
