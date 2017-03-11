import { card, } from './card';
import { RANKS, } from './rank';
import { SUITS, } from './suit';

export const binFlat = (a = [],b = []) => [ ...a,...b, ];
export const genSuit = s => RANKS.map(r => card(r, s));

export const deck = () => SUITS.map(genSuit).reduce(binFlat,[]);

export const shuffRed = (shuff, el,id, arr) => {
  const j = Math.floor(Math.random() * id);
  const shuff2 = [ ...shuff, ];

  [ shuff2[id], shuff2[j], ] = [ arr[j], el, ];
  return shuff2;
};

export const shuffle = cards => cards.reduce(shuffRed, cards);
export const draw = (amt = 0) => cards => [ ...cards, ].splice(0,amt);
export const add = cards => hand => [ ...hand,...cards, ];
