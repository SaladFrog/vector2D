function Drop() {
  this.x = Math.random() * width;
  this.y = Math.random() * -height;
  this.z = Math.random() * 20;
  this.yspeed = Math.random() * 10;

  this.fall = function() {
    this.y = this.y + this.yspeed;
    if (this.y > height) {
      this.y = Math.random() * -height;
      this.yspeed = Math.random() * 5;
    }
  };
  
  this.show = function() {
    context.fillStyle = "purple";
    context.fillRect(this.x, this.y, 10, 10);
  };
}
