import { FactoryProducer } from './index'

const factory = new FactoryProducer()

describe('Factory should be null', () => {
  const nullFactory = factory.getFactory('')
  it('should be undefined', () => {
    expect(nullFactory).toBe(undefined)
  })
})

describe('Name of the group', () => {
  const shapeFactory = factory.getFactory('shape')

  const testDraw = (shapeType: string) => {
    if (shapeFactory) return shapeFactory.getShape(shapeType)?.draw()
  }

  it('should be rect', () => {
    expect(testDraw('rect')).toBe('rect')
  })

  it('should be square', () => {
    expect(testDraw('square')).toBe('square')
  })

  it('should be circle', () => {
    expect(testDraw('circle')).toBe('circle')
  })

  it('should be undefined', () => {
    expect(testDraw('undefined')).toBe(undefined)
  })

  it('should be undefined', () => {
    expect(shapeFactory?.getColor('red')?.fill()).toBe(undefined)
  })
})

describe('ColorFactory', () => {
  const colorFactory = factory.getFactory('color')

  const testFill = (shapeType: string) => {
    if (colorFactory) return colorFactory.getColor(shapeType)?.fill()
  }

  it('should be red', () => {
    expect(testFill('red')).toBe('red')
  })

  it('should be green', () => {
    expect(testFill('green')).toBe('green')
  })

  it('should be blue', () => {
    expect(testFill('blue')).toBe('blue')
  })

  it('should be undefined', () => {
    expect(testFill('undefined')).toBe(undefined)
  })

  it('should be undefined', () => {
    expect(colorFactory?.getShape('rect')?.draw()).toBe(undefined)
  })
})
