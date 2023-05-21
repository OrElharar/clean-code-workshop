//Drill 2: Evaluating Method-Property Usage
//
// Instructions:
//
// Examine the implementation of a class called Rectangle.
// Analyze each method within the Rectangle class and identify the properties used by them.
// Determine the percentage of properties that are being utilized by the methods.
// Evaluate whether the Rectangle class has a high cohesion level (methods use most or all properties)
// or low cohesion level (methods use only a few or none of the properties).
// Suggest changes or refactoring to improve the cohesion level and ensure that methods use the appropriate properties.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }

  draw() {
    // Method logic for drawing the rectangle
  }
}
