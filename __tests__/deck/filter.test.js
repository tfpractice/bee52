import 'jasmine-expect';
import { deck, } from 'src/deck';
import { byRank, bySuit, exclude, } from 'src/deck/filter';
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
  describe('exclude', () => {
    it('removes the matching card from the array', () => {
      expect(exclude(myDeck[0])(myDeck).length).toEqual(51);
    });
  });
});
