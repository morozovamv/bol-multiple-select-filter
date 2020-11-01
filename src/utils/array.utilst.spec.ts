import { array } from './array.utils';

describe('ArrayUtils', () => {
  it('should add an item to the end of the list if there is no such item', () => {
    const item = 1;
    const source = [2, 3];
    const expected = [2, 3, 1];

    expect(array.toggle(item, source)).toEqual(expected);
  });

  it('should remove an item from the list if there is the same item', () => {
    const item = 1;
    const source = [1, 2, 3];
    const expected = [2, 3];

    expect(array.toggle(item, source)).toEqual(expected);
  });
});
