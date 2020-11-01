import {
  caseInsensitiveAlphabetOrd,
  isGroups,
  sortGroups,
} from './product-group.model';

describe('ProductGroupModel', () => {
  it('should sort array in alphabet order and in case-insensitive way', () => {
    const source = ['c', 'b', 'a', 'A'];
    const expected = ['a', 'A', 'b', 'c'];

    expect(source.sort(caseInsensitiveAlphabetOrd)).toEqual(expected);
  });

  it('should place selected items on top of the list of all items', () => {
    const selectedItem_0 = 'SELECTED_ITEM_0';
    const selectedItem_1 = 'SELECTED_ITEM_1';
    const list = ['a', 'b', 'c', selectedItem_0, selectedItem_1];
    const expected = [selectedItem_0, selectedItem_1, 'a', 'b', 'c'];

    expect(sortGroups([selectedItem_0, selectedItem_1], list)).toEqual(
      expected
    );
  });

  it('should return true if data match the Group type', () => {
    const data: any = ['group_0', 'group_1'];

    expect(isGroups(data)).toBeTrue();
  });

  it('should return false if there is at least one item mismatch the Group entity type', () => {
    const data: any = ['group_0', 1, 'group_1'];

    expect(isGroups(data)).toBeFalse();
  });
});
