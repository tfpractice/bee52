import { filter, spread, } from 'fenugreek-collections';
import { contains, xContains, } from './find';

export const diff = a => b => filter(a)(xContains(b));
export const diffBin = (a, b) => diff(a)(b);

export const inter = a => b => filter(a)(contains(b));
export const interBin = (a, b) => inter(a)(b);

export const union = a => b => spread(a).concat(...diff(b)(a));
export const unionBin = (a, b) => union(a)(b);
