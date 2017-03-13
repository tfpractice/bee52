import 'jasmine-expect';
import { rankOrder, rankSort, sort, suitOrder,suitSort, } from 'src/deck/sort';
import { shuffle, } from 'src/deck/shuffle';
import { deck, } from 'src/deck';
import { card, } from 'src/card';
  
const AH = card('a', 'HEARTS');
const AS = card('a', 'SPADES');
const KS = card('K', 'SPADES');

const myDeck = shuffle(deck());

describe('sort', () => {
  describe('rankOrder', () => {
    it('returns the rank differnece', () => {
      expect(rankOrder(AH, AS)).toEqual(0);
    });
  });
  describe('rankSort', () => {
    it('sorts an array of cards by rank', () => {
      expect(rankSort(myDeck).length).toEqual(52);
    });
  });
  describe('suitOrder', () => {
    describe('when cards have same suit', () => {
      it('sorts them by rank', () => {
        expect(suitOrder(KS,AS)).toEqual(0);    
      });
    });
    describe('when the cards have the same suit', () => {
      it('sorts the cards by suit and then by rank', () => {
        expect(suitOrder(AH,AS)).toEqual(-1);
      });
    });
  });
  describe('suitSort', () => {
    it('sorts the cards by suit', () => {
      expect(suitSort(myDeck).length).toEqual(52);
    });
  });
  describe('sort', () => {
    it('sorts by rank and suit', () => {
      expect(sort(myDeck).length).toEqual(52);
    });
  });
});
