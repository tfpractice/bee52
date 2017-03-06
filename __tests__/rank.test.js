import 'jasmine-expect';
import { getNext,getPrev,idxMap,indexVal,isHigher, isLower,lower,
modIdx, nextRank,pairId, prevRank,RANKS, VALUES, } from 'src/rank';

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
      console.log(pairId('a',1));
      expect(pairId('a',1)).toEqual([ 'a',1, ]);
    });
  });
  describe('modIdx', () => {
    it('returns the element at the id mod array length', () => {
      expect(modIdx([ 1,2,3, ])(4)).toEqual(2);
    });
  }); 
  describe('getNext', () => {
    it('returns the element at the id mod array length', () => {
      expect(getNext([ 1,2,3, ])(3)).toEqual(1);
    });
  }); 
  describe('getPrev', () => {
    it('returns the element at the id mod array length', () => {
      expect(getPrev([ 1,2,3, ])(3)).toEqual(2);
    });
  });
  describe('nextRank', () => {
    it('returns the next rank ', () => {
      expect(nextRank('k')).toEqual('a');
    });
  });
  describe('prevRank', () => {
    it('returns the next rank ', () => {
      expect(prevRank('k')).toEqual('q');
    });
  });
  describe('isHigher', () => {
    it('checks if the value of the first is higher than the second', () => {
      expect(isHigher('3')('a')).toBeTruthy();
      expect(isHigher('a')('3')).toBeFalse();
    });
  }); describe('isLower', () => {
    it('checks if the value of the first is higher than the second', () => {
      expect(isLower('3')('a')).toBeTruthy();
      expect(isLower('a')('3')).toBeFalse();
    });
  });
});
