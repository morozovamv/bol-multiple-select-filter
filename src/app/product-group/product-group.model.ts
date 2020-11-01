export type Groups = Array<string>;

export const caseInsensitiveAlphabetOrd = (a: string, b: string): number =>
  a.localeCompare(b, undefined, { sensitivity: 'base' });

/**
 * Places selected items on top of the list.
 *
 * @example
 * import { sortGroups } from './product-group.model';
 *
 * const selectedItem = 'selected';
 * const list = ['a', 'b', selectedItem];
 *
 * expect(sortGroups([selectedItem], list)).toEqual('selected', 'a', 'b');
 *
 * @param selectedGroups Selected items.
 * @param allGroups List of all items.
 */
export const sortGroups = (
  selectedGroups: Groups,
  allGroups: Groups
): Groups => {
  return [
    ...selectedGroups.sort(caseInsensitiveAlphabetOrd),
    ...allGroups
      .filter((group) => !selectedGroups.includes(group))
      .sort(caseInsensitiveAlphabetOrd),
  ];
};

/**
 * Checks that the received data matches Groups type
 */
export const isGroups = (groups: any): groups is Groups =>
  Array.isArray(groups) && groups.every((group) => typeof group === 'string');
