/**
 * If target element exists in the array, removes the element, otherwise adds element to the end of the list.
 *
 * Restriction: can potentially be used with any type, for now works only with primitives.
 *
 * @param target A primitive element would be added or removed from the list.
 *
 * @param list The list of primitives.
 *
 * @example
 * import { array } from 'array.utils';
 *
 * expect(array.toggle(1, [1, 2, 3])).toEqual([2, 3]);
 * expect(array.toggle(4, [1, 2, 3])).toEqual([1, 2, 3, 4]);
 */
const toggle = <T = string>(target: T, list: T[]): T[] =>
  list.includes(target)
    ? list.filter((item) => item !== target)
    : list.concat(target);

/**
 * Filters items that match the query.
 *
 * @example
 * import { array } from 'array.utils';
 *
 * expect(filterMatchesByString('a', ['aaa', 'bbb', 'ccc'])).toEqual(['aaa']);
 *
 */
const filterMatchesByString = (query: string, items: string[]): string[] => {
  if (query !== '' && items.length > 0) {
    const queryRegex = new RegExp(query, 'ig');

    return items.filter((item) => queryRegex.test(item));
  }
  return items;
};

export const array = { toggle, filterMatchesByString };
