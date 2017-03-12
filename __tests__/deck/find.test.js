import 'jasmine-expect';
import { contains, find,idx,remove,transfer, xContains, } from 'src/deck/find';
import { deck, } from 'src/deck';
import { card, } from 'src/card';
const myDeck = (deck());
const twoD = card('2', 'DIAMONDS');
const myCards = [];

describe('find', () => {
  describe('idx', () => {
    it('returns the index of the equiv card', () => {
      expect(idx(myDeck)(twoD)).toBeNumber();
    });
  });
  describe('find', () => {
    it('returns the equivalent card in an array', () => {
      expect(find(myDeck)(twoD)).toBeTruthy();
    });
  });
  describe('contains', () => {
    it('checks the array for a matching card', () => {
      expect(contains(myDeck)(twoD)).toBeTrue();
    });
  });
  describe('xContains', () => {
    it('checks the array for a matching card', () => {
      expect(xContains(myDeck)(twoD)).toBeFalse();
    });
  });
});
