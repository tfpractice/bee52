import { flattenBin, } from 'fenugreek-collections';
import { card, } from '../card';
import { RANKS, } from '../rank';
import { SUITS, } from '../suit';

export const genSuit = s => RANKS.map(r => card(r, s));
export const genRank = r => SUITS.map(s => card(r, s));

export const deck = () => SUITS.map(genSuit).reduce(flattenBin,[]);
