class fnVector {
  constructor() {
    let x, y, z;
    if (arguments[0] instanceof fnVector) {
    this.fnVector = arguments[0];
    x = arguments[1][0] || 0;
    y = arguments[1][1] || 0;
    z = arguments[1][2] || 0;
  } else {
    x = arguments[0] || 0;
    y = arguments[1] || 0;
    z = arguments[2] || 0;
  }
    this.x = x;
    this.y = y;
    this.z = z;
  }

}

const createVector = function(x, y, z) {
  if (this instanceof fnVector) {
    return new fnVector(this, arguments);
  } else {
    return new fnVector(x, y, z);
  }
};

let v = createVector(10, 1);
console.log(v)
