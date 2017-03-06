import 'jasmine-expect';
import { deck, } from 'src/deck';
describe('Card', () => {
  describe('card', () => {
    it('returns an object with a suit and rank', () => {
      console.log(deck());

      // expect(card('2','CLUBS')).toBeObject();
    });
  });
});
