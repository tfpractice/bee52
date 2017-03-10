import 'jasmine-expect';
import { card,copy,hasRank,hasSuit,id,rank, sameRank, sameSuit,
setRank,setSuit,suit, xhasRank, xhasSuit, } from 'src/card';

const AH = card('a', 'HEARTS');
const AS = card('a', 'SPADES');
const KS = card('K', 'SPADES');
const my2D = card('2','DIAMONDS');

describe('Card', () => {
  describe('card', () => {
    it('returns an object with a suit and rank', () => {
      expect(card('2','CLUBS')).toBeObject();
    });
  });
  describe('suit', () => {
    it('returns the suit of the card', () => {
      expect(suit({ suit: 'DIAMONDS', })).toEqual('DIAMONDS');  
    });
  });
  describe('rank', () => {
    it('returns the rank property', () => {
      expect(rank({ rank: '2', })).toEqual('2');
    });
  });
  describe('setRank', () => {
    it('sets the rank of a card', () => {
      expect(rank(setRank('3')(card('2','CLUBS')))).toEqual('3');
    });
  }); 
  describe('setSuit', () => {
    it('sets the suit of a card', () => {
      expect(suit(setSuit('HEARTS')(card('2','CLUBS')))).toEqual('HEARTS');
    });
  });
  describe('id', () => {
    it('rerutes a string of the rank and suit', () => {
      expect(id(my2D)).toEqual('2_DIAMONDS');
    });
  });
  describe('copy', () => {
    it('returns a copy of the card', () => {
      expect(id(copy(my2D))).toEqual(id(my2D));
    });
  });
  describe('hasRank', () => {
    it('checks if a card has a certain rank', () => {
      expect(hasRank('2')(my2D)).toBeTruthy();
    });
  });
  describe('hasSuit', () => {
    it('checks if a card has a certain suit', () => {
      expect(hasSuit('DIAMONDS')(my2D)).toBeTruthy();
    });
  });
  describe('xhasRank', () => {
    it('checks if a card has a certain rank', () => {
      expect(xhasRank('2')(my2D)).toBeFalse();
    });
  });
  describe('xhasSuit', () => {
    it('checks if a card has a certain suit', () => {
      expect(xhasSuit('DIAMONDS')(my2D)).toBeFalse();
    });
  });
  describe('sameRank', () => {
    it('chekcs if two cards have same rank', () => {
      expect(sameRank(AH)(AS)).toBeTrue();
    });
  });
  describe('sameSuit', () => {
    it('compares suites for equality', () => {
      expect(sameSuit(AS)(KS)).toBeTrue();
    });
  });
});
