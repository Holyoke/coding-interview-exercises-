const findFlavors = require('../lib/binarySearch')

describe('binary Search', () => {
  it('does sample input', () => {
    expect(findFlavors(4, [1, 4, 5, 3, 2])).toBe(1)
    expect(findFlavors(4, [2, 2, 4, 3])).toBe(2)
  })
})
