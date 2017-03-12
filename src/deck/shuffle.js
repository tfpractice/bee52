export const shuffReduce = (shuff, el,id, deck = shuff) => {
  const j = Math.floor(Math.random() * id);
  const shuff2 = [ ...shuff, ];

  [ shuff2[id], shuff2[j], ] = [ deck[j], el, ];
  return shuff2;
};

export const shuffle = cards => cards.reduce(shuffReduce, cards);
