import { ShapeFactory } from './index'

describe('Name of the group', () => {
  const factory = new ShapeFactory()

  const testDraw = (shapeType: string) => {
    return factory.getShape(shapeType)?.draw()
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
})
