import 'jasmine-expect';
import { deck, } from 'src/deck';
import { add, cut, cutAt, draw,drawTo,drop,next,rest, } from 'src/deck/draw';

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
  describe('add', () => {
    it('draws all cards until a match is found', () => {
      expect(add(...myDeck.slice(0,9))(myDeck.slice(9)).length).toEqual(52);
    });
  });
  describe('drop', () => {
    it('returns the difference betwen two sets of cards', () => {
      expect(drop(...myDeck.slice(0,9))(myDeck).length).toEqual(43);
    });
  });
  describe('next', () => {
    it('retrieves the next card', () => {
      expect(next(myDeck)).toEqual(myDeck[0]);
    });
  });
  describe('cutAt', () => {
    it('slices the deck from an index', () => {
      expect(cutAt(3)(myDeck).length).toEqual(49);
    });
  });
  describe('rest', () => {
    it('returns the rest of the cards', () => {
      expect(rest(myDeck).length).toEqual(51);
    });
  });
  describe('cut', () => {
    it('splits and reverses the deck', () => {
      expect(cut(myDeck)[0]).not.toEqual(myDeck[0]);
    });
  });
});
