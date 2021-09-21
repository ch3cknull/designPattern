import { Shape } from '..'

export class Circle implements Shape {
  draw() {
    return 'circle'
  }
}

export class Rect implements Shape {
  draw() {
    return 'rect'
  }
}

export class Square implements Shape {
  draw() {
    return 'square'
  }
}
