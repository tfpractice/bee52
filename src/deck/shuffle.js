import { deck, } from './deck';

export const shuffReduce = (shuff, el,id, deck = shuff) => {
  const j = Math.floor(Math.random() * id);

  [ shuff[id], shuff[j], ] = [ deck[j], el, ];
  return shuff;
};

export const shuffle = (cards = deck()) => cards.reduce(shuffReduce, cards);
