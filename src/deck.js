import { card, } from './card';
import { RANKS, } from './rank';
import { SUITS, } from './suit';

export const binFlat = (a = [],b = []) => [ ...a,...b, ];
export const genSuit = s => RANKS.map(r => card(r, s));

export const deck = () => SUITS.map(genSuit).reduce(binFlat,[]);
