import 'jasmine-expect';
import { RANKS, } from 'src/rank';

describe('rank module', () => {
  describe('RANKS', () => {
    it('is an array of thirteen ranks', () => {
      expect(RANKS).toBeArray();
    });
  });
});
