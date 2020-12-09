const day_one = require('../src/day_one');

describe('Day one AOC tasks', () => {
  test('Return a sum', () => {
    let array = [3, 4];
    expect(typeof day_one(array)).toBe('number');
  });
  
  test('Return a sum 12', () => {
    let array = [3, 4];
    expect(day_one(array)).toEqual(7);
  });
  
})
