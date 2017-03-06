import 'jasmine-expect';
import { SUITS, } from 'src/suit';
describe('suits', () => {
  describe('SUITS', () => {
    it('is an array of 4 suits', () => {
      expect(SUITS).toBeArray();
    });
  });
});
