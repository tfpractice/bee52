import { card, } from './card';
import { RANKS, } from './rank';
import { SUITS, } from './suit';

export const binFlat = (a = [],b = []) => [ ...a,...b, ];
export const genSuit = s => RANKS.map(r => card(r, s));

export const deck = () => SUITS.map(genSuit).reduce(binFlat,[]);

export const shuffRed = (shuff, el,id, a) => {
  const j = Math.floor(Math.random() * id);

  [ shuff[id], shuff[j], ] = [ a[j], el, ];
  return shuff;
};
export const shuffle = cards => cards.reduce(shuffRed, cards);
