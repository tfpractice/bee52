import 'jasmine-expect';
import { card, } from 'src/card';
import { diffID, diffRank,diffSuit, isMatch, rankDiff,rankOrder,rankSort,sameID,sameRank,sameSuit,xMatch, } from 'src/compare';
const AH = card('a', 'HEARTS');
const AS = card('a', 'SPADES');
const KS = card('K', 'SPADES');

describe('compares', () => {
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
  
  describe('diffRank', () => {
    it('chekcs if two cards have diff rank', () => {
      expect(diffRank(AH)(AS)).toBeFalse();
    });
  });
  describe('diffSuit', () => {
    it('compares suites for equality', () => {
      expect(diffSuit(AS)(KS)).toBeFalse();
    });
  });
  describe('isMatch', () => {
    it('checks for equality of suit and ranks', () => {
      expect(isMatch(card('a', 'HEARTS'))(AH)).toBeTruthy();
    });
  }); 
  describe('xMatch', () => {
    it('checks for nonequality of suit and ranks', () => {
      expect(xMatch(card('a', 'HEARTS'))(AH)).toBeFalse();
    });
  });
  describe('rankDiff', () => {
    it('returns the differnece in rankVal of tow cards', () => {
      expect(rankDiff(AS)(KS)).toEqual(1);
      expect(rankDiff(KS)(AS)).toEqual(-1);
    });
  });
  describe('sameID', () => {
    it('checks for equality on card id', () => {
      expect(sameID(AH)(AH)).toBeTruthy();
    });
  });
  describe('diffID', () => {
    it('checks for equality on card id', () => {
      expect(diffID(AH)(AH)).toBeFalse();
    });
  });
});
