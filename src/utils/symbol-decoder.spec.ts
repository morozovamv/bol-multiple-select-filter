import { replaceIfMatch, replaceSpecialSymbols } from './symbol-decoder';

describe('SymbolDecoder', () => {
  it('should return source if there is no match', () => {
    const source = 'String without match';

    expect(replaceIfMatch(new RegExp('mismatch', 'g'), '')(source)).toBe(
      source
    );
  });

  it('should return a string with the replaced match', () => {
    const source = 'String with mismatch';
    const expected = 'String with match';

    expect(replaceIfMatch(new RegExp('mismatch', 'g'), 'match')(source)).toBe(
      expected
    );
  });

  it('should return a string with decoded symbols', () => {
    const encoded =
      'I&#x27;m encoded string, I can use symbols like this one: &amp;';
    const decoded = "I'm encoded string, I can use symbols like this one: &";

    expect(replaceSpecialSymbols(encoded)).toBe(decoded);
  });
});
