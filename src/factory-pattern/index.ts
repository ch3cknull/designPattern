import { Circle, Rect, Square } from './entries'

export interface Shape {
  draw: Function
}

export class ShapeFactory {
  getShape(shapeType: string): Shape | undefined {
    shapeType = shapeType.toLowerCase()

    if (shapeType == 'circle') {
      return new Circle()
    } else if (shapeType == 'rect') {
      return new Rect()
    } else if (shapeType == 'square') {
      return new Square()
    }

    return undefined
  }
}
