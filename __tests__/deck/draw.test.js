import 'jasmine-expect';
import { deck, } from 'src/deck';
import { addCards, draw, drawTo, removeCards, } from 'src/deck/draw';

const myDeck = deck();

describe('draw', () => {
  describe('draw', () => {
    it('retrieves an amt of cards from an array', () => {
      expect(draw(7)(myDeck).length).toEqual(7);      
    });
  });
  describe('drawTo', () => {
    it('draws all cards until a match is found', () => {
      expect(drawTo(myDeck[8])(myDeck).length).toEqual(9);
    });
  });
  describe('addCards', () => {
    it('draws all cards until a match is found', () => {
      expect(addCards(...myDeck.slice(0,9))(myDeck.slice(9)).length).toEqual(52);
    });
  });
  describe('removeCards', () => {
    it('returns the difference betwen two sets of cards', () => {
      expect(removeCards(...myDeck.slice(0,9))(myDeck).length).toEqual(43);
    });
  });
});
