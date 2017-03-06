import 'jasmine-expect';
import { byRank, bySuit, } from 'src/filter';
import { deck, } from 'src/deck';
const myDeck = deck();

describe('filter', () => {
  describe('byRank', () => {
    it('filters all cards in an array by rank', () => {
      expect(byRank('2')(myDeck)).toBeArray();
    });
  }); describe('bySuit', () => {
    it('filters all cards in an array by rank', () => {
      expect(bySuit('CLUBS')(myDeck)).toBeArray();
    });
  });
});
