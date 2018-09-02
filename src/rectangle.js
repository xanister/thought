import Thought from "./thought";

export class Rectangle extends Thought {
  constructor(opts = {}) {
    super(Object.assign({}, {
      bbLeftOffset: 0,
      bbRightOffset: 0,
      bbTopOffset: 0,
      bbBottomOffset: 0,

      height: 32,
      width: 32,
      x: 0,
      y: 0,
    }, opts));
  }

  get bottom() { return this.y + ~~(this.height / 2) + this.bbBottomOffset; }
  set bottom(y) { this.y = y - ~~(this.height / 2) - this.bbBottomOffset; }
  get left() { return this.x - ~~(this.width / 2) + this.bbLeftOffset; }
  set left(x) { this.x = x + ~~(this.width / 2) - this.bbLeftOffset; }
  get right() { return this.x + ~~(this.width / 2) + this.bbRightOffset; }
  set right(x) { this.x = x - ~~(this.width / 2) - this.bbRightOffset; }
  get top() { return this.y - ~~(this.height / 2) + this.bbTopOffset; }
  set top(y) { this.y = y + ~~(this.height / 2) - this.bbTopOffset; }

  collides(rect) {
    return (
      this.left < rect.right &&
      rect.left < this.right &&
      this.top < rect.bottom &&
      rect.top < this.bottom
    );
  }

  collidesPoint(x, y) {
    return x > this.left &&
      x < this.right &&
      y > this.top &&
      y < this.bottom;
  }

  collidesRect(left, top, right, bottom) {
    return (
      this.left < right &&
      left < this.right &&
      this.top < bottom &&
      top < this.bottom
    );
  }

  distanceTo(d) {
    if (this.collides(d))
      return 0;

    // TODO: Improve
    let tx = d.x > this.x ? d.left : d.right,
      ty = d.y > this.y ? d.top : d.bottom;
    return this.distanceToPoint(tx, ty);
  }

  distanceToPoint(x, y) {
    if (this.collidesPoint(x, y))
      return 0;

    // TODO: Improve
    let tx = x > this.x ? this.right : this.left,
      ty = y > this.y ? this.bottom : this.top;
    return Math.sqrt(Math.pow(tx - x, 2) + Math.pow(ty - y, 2));
  }

  serialize(xOffset = 0, yOffset = 0) {
    return {
      height: this.height,
      width: this.width,
      x: this.x + xOffset,
      y: this.y + yOffset
    }
  }
}