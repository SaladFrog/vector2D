function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Vector.prototype = {
  copy: function () {
    return new Vector(this.x, this.y, this.z);
  },
};
