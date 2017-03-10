import 'jasmine-expect';
import { card, } from 'src/card';
import { diffRank, diffSuit,isMatch,rankDiff,rankOrder,rankSort,sameRank,sameSuit,xMatch, } from 'src/compare';
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
      console.log(rankDiff(AS)(KS));
      console.log(rankDiff(KS)(AS));
    });
  });
});