import { sum } from '../src/sum'

test('adds 1 + 2 to equal 3', () => {
  const sumResult = sum(1, 2)
  expect(sumResult).toBe(3)
})
