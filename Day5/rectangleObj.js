/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  const obj = {};
  obj["length"] = a;
  obj["width"] = b;
  obj["perimeter"] = 2 * (a + b);
  obj["area"] = a * b;
  return obj;
  /* 
    this.length = a;
  this.width = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);

    class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;
    this.area = a * b;
    this.perimeter = 2 * (a + b);
  }
} */
}
