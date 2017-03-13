import 'jasmine-expect';
import { deck, } from 'src/deck';
import { draw, } from 'src/deck/draw';
import { diff,diffBin,inter,interBin,union,unionBin, } from 'src/deck/dedupe';

const myDeck = deck();
const q1 = draw(13)(myDeck);
const q2 = myDeck.slice(13, 26);

describe('dedupe', () => {
  describe('diff', () => {
    it('returns the difference between the two arrays', () => {
      expect(diff(q1)(q2).length).toEqual(13);
    });
  });
  describe('diffBin', () => {
    it('returns the difference between the two arrays', () => {
      expect(diffBin(q1,q2).length).toEqual(13);
    });
  });
  describe('inter', () => {
    it('returns the intersection of tow arrays', () => {
      expect(inter(q1)(q2).length).toEqual(0);
    });
  });
  describe('interBin', () => {
    it('returns the intersection of tow arrays', () => {
      expect(interBin(q1,q2).length).toEqual(0);
    });
  });
  describe('union', () => {
    it('returns all the distinct cards between two arrays', () => {
      expect(union(q1)(q2).length).toEqual(26);
    });
  });
  describe('unionBin', () => {
    it('returns all the distinct cards between two arrays', () => {
      expect(unionBin(q1,q2).length).toEqual(26);
    });
  });
});
