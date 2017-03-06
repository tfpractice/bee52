import 'jasmine-expect';
import { card,rank,sameRank,sameSuit,setRank,setSuit,suit, } from 'src/card';

const AH = card('a', 'HEARTS');
const AS = card('a', 'SPADES');
const KS = card('K', 'SPADES');

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
