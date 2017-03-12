import 'jasmine-expect';
import { deck, genRank, genSuit, } from 'src/deck';

describe('Deck', () => {
  describe('deck', () => {
    it('returns an array of 52 cards', () => {
      expect(deck().length).toEqual(52);
    });
  });
  describe('genRank', () => {
    it('generates a card of the specified rank for eveyr suit', () => {
      expect(genRank('5').length).toEqual(4);
    });
  });
  describe('genSuit', () => {
    it('generates a card of the specified rank for eveyr suit', () => {
      expect(genSuit('DIAMONDS').length).toEqual(13);
    });
  });
});
