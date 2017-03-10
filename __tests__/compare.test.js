import 'jasmine-expect';
import { card, sameRank, sameSuit, } from 'src/card';

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
});
