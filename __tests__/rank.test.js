import 'jasmine-expect';
import { diff, dist, getNext, getPrev, idxMap, indexVal, isHigher, isLower,
lower, maxDist, modIdx, next, pairId, prev, RANKS, VALUES, } from 'src/rank';

describe('rank module', () => {
  describe('RANKS', () => {
    it('is an array of thirteen ranks', () => {
      expect(RANKS).toBeArray();
    });
  });
  describe('VALUES', () => {
    it('is an array of thirteen ranks', () => {
      expect(VALUES instanceof Map).toBeTrue();
      expect(VALUES.size).toEqual(13);
    });
  });
  describe('pairId', () => {
    it('return an array of KV pairs', () => {
      expect(pairId('a', 1)).toEqual([ 'a', 1, ]);
    });
  });
  describe('modIdx', () => {
    it('returns the element at the id mod array length', () => {
      expect(modIdx([ 1, 2, 3, ])(4)).toEqual(2);
    });
  }); 
  describe('getNext', () => {
    it('returns the element at the id mod array length', () => {
      expect(getNext([ 1, 2, 3, ])(3)).toEqual(1);
    });
  }); 
  describe('getPrev', () => {
    it('returns the element at the id mod array length', () => {
      expect(getPrev([ 1, 2, 3, ])(3)).toEqual(2);
    });
  });
  describe('next', () => {
    it('returns the next rank ', () => {
      expect(next('k')).toEqual('a');
    });
  });
  describe('prev', () => {
    it('returns the next rank ', () => {
      expect(prev('k')).toEqual('q');
    });
  });
  describe('isHigher', () => {
    it('checks if the value of the first is higher than the second', () => {
      expect(isHigher('3')('a')).toBeTrue();
    });
  }); describe('isLower', () => {
    it('checks if the value of the first is higher than the second', () => {
      expect(isLower('a')('3')).toBeTrue();
    });
  });
  describe('diff', () => {
    it('returns the absolute differnece of rankValues', () => {
      expect(diff('a')('2')).toEqual(12);
      expect(diff('2')('a')).toEqual(1);
      expect(diff('k')('2')).toEqual(11);
      expect(diff('2')('k')).toEqual(2);
    });
  });
  describe('dist', () => {
    it('returns the minimunm distance between ranks', () => {
      expect(dist('k')('2')).toEqual(2);
    });
  });
  describe('maxDist', () => {
    it('returns the minimunm distance between ranks', () => {
      expect(maxDist('k')('2')).toEqual(11);
    });
  });
});
