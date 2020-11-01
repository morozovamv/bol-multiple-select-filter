import { array } from './array.utils';

describe('ArrayUtils', () => {
  describe('array.toggle', () => {
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

  describe('array.filterMatchesByString', () => {
    it('should return an empty array if the source array is empty', () => {
      const source: string[] = [];
      const query = 'query';

      expect(array.filterMatchesByString(query, source)).toEqual(source);
    });

    it('should return the original array if the query is empty', () => {
      const source = ['aaa', 'bbb', 'ccc'];
      const query = '';

      expect(array.filterMatchesByString(query, source)).toEqual(source);
    });

    it('should return an empty array if there are no matches', () => {
      const source = ['aaa', 'bbb', 'ccc'];
      const query = 'abc';
      const expected: string[] = [];

      expect(array.filterMatchesByString(query, source)).toEqual(expected);
    });

    it('should return an array of items that match the query', () => {
      const source = ['aaa', 'bbb', 'ccc'];
      const query = 'a';
      const expected = ['aaa'];

      expect(array.filterMatchesByString(query, source)).toEqual(expected);
    });
  });
});
