/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(arr) {
    this.arr = arr;
  }
  perimeter() {
    return this.arr.reduce(myFunction, 0);

    function myFunction(total, value) {
      return total + value;
    }
  }
}

/* 
class Polygon{
    constructor(sides){
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce(function add(a,b){return a+b;})
    }
}
*/
