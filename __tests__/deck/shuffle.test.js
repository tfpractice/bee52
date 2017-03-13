import 'jasmine-expect';
import { shuffle, shuffReduce, } from 'src/deck/shuffle';
import { deck, } from 'src/deck';
const myDeck = deck();

describe('Shuffle', () => {
  describe('shuffReduce', () => {
    it('returns an array of 52 cards, with two cards ', () => {
      expect(shuffReduce(myDeck, myDeck[3], 3,myDeck).length).toEqual(52);
    });
  });
  describe('shuffle', () => {
    it('randomizes the deck', () => {
      expect(shuffle(deck()).length).toEqual(52);
    });
  });
});
