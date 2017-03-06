import 'jasmine-expect';
import { add, deck,draw, shuffle, } from 'src/deck';
describe('Deck', () => {
  describe('deck', () => {
    it('returns an array of 52 cards', () => {
      expect(deck().length).toEqual(52);
    });
  });
  describe('shuffle', () => {
    it('randomizes the deck', () => {
      expect(shuffle(deck()).length).toEqual(52);
    });
  });
  describe('draw', () => {
    it('removes an element from the deck', () => {
      expect(draw(1)(deck()).length).toEqual(1);
    });
  });
  describe('add', () => {
    it('appends cards to an array', () => {
      console.log(add(deck().splice(0,4))([]));
      expect(add(deck().splice(0,4))([])).toBeArray();
    });
  });
});
