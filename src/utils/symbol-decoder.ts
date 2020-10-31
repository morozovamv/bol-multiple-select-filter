import { pipe } from 'rxjs';

const AMP_SYMBOL = String.fromCharCode(38);
const AMP_REGEX = new RegExp('&amp;', 'g');
const APOS_SYMBOL = String.fromCharCode(39);
const APOS_REGEX = new RegExp('&#x27;', 'g');

export const replaceIfMatch = (regex: RegExp, symbol: string) => (
  source: string
): string => (regex.test(source) ? source.replace(regex, symbol) : source);

export const replaceSpecialSymbols = pipe(
  replaceIfMatch(AMP_REGEX, AMP_SYMBOL),
  replaceIfMatch(APOS_REGEX, APOS_SYMBOL)
);
