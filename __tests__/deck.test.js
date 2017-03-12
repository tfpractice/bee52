import 'jasmine-expect';
import { deck, shuffle, } from 'src/deck';

describe('Deck', () => {
  describe('deck', () => {
    it('returns an array of 52 cards', () => {
      expect(deck().length).toEqual(52);
    });
  });
  describe('shuffle', () => {
    it('randomizes the deck', () => {
      expect(shuffle(deck()).length).toEqual(52);
    });
  });
});
