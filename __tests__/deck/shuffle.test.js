import 'jasmine-expect';
import { shuffle, shuffReduce, } from 'src/deck/shuffle';
import { deck, } from 'src/deck';

describe('Shuffle', () => {
  describe('shuffReduce', () => {
    it('returns an array of 52 cards, with two cards ', () => {
      expect(shuffReduce(deck(), deck()[3], 3).length).toEqual(52);
    });
  });
  describe('shuffle', () => {
    it('randomizes the deck', () => {
      expect(shuffle(deck()).length).toEqual(52);
    });
  });
});
