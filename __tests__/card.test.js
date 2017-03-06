import 'jasmine-expect';
import { card, } from 'src/card';
describe('Card', () => {
  describe('card', () => {
    it('returns an object with a suit and rank', () => {
      console.log(card('2','CLUBS'));
      expect(card('2','CLUBS')).toBeObject();
    });
  });
});
