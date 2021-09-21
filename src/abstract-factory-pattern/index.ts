import { Color, Shape } from './index.d'
import { Circle, Rect, Square } from '../factory-pattern/entries'

import { Red, Blue, Green } from './color-entries'

export abstract class AbstractFactory {
  abstract getShape(shapeType: string): Shape | undefined
  abstract getColor(colorType: string): Color | undefined
}

class ShapeFactory extends AbstractFactory {
  getShape(shapeType: string) {
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

  getColor(colorType: string) {
    return undefined
  }
}

class ColorFactory extends AbstractFactory {
  getShape(shapeType: string) {
    return undefined
  }

  getColor(colorType: string) {
    colorType = colorType.toLowerCase()

    if (colorType == 'red') {
      return new Red()
    } else if (colorType == 'green') {
      return new Green()
    } else if (colorType == 'blue') {
      return new Blue()
    }

    return undefined
  }
}

export class FactoryProducer {
  getFactory(factoryType: string): AbstractFactory | undefined {
    factoryType = factoryType.toLowerCase()

    if (factoryType == 'color') {
      return new ColorFactory()
    } else if (factoryType == 'shape') {
      return new ShapeFactory()
    }

    return undefined
  }
}
