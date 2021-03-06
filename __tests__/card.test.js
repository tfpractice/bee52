import 'jasmine-expect';
import { adjRanks,card,copy,hasAdjRank,hasRank,hasSuit,higherRank, id,lowerRank,
  nextRank,prevRank, rank,rankDiff,rankDist, setRank, setSuit, suit,xhasRank, 
  xhasSuit, } from 'src/card';

const my2D = card('2','DIAMONDS');

describe('Card', () => {
  describe('card', () => {
    it('returns an object with a suit and rank', () => {
      console.log(card());
      expect(card('2','CLUBS')).toBeObject();
    });
  });
  describe('suit', () => {
    it('returns the suit of the card', () => {
      expect(suit()).toEqual('');  
      expect(suit({ suit: 'DIAMONDS', })).toEqual('DIAMONDS');  
    });
  });
  describe('rank', () => {
    it('returns the rank property', () => {
      expect(rank()).toEqual('');  
      expect(rank({ rank: '2', })).toEqual('2');
    });
  });
  describe('id', () => {
    it('rerutes a string of the rank and suit', () => {
      expect(id()).toEqual('_');  
      expect(id(my2D)).toEqual('2_DIAMONDS');
    });
  });
  describe('setRank', () => {
    it('sets the rank of a card', () => {
      expect(rank(setRank('3')(card('2','CLUBS')))).toEqual('3');
    });
  }); 
  describe('setSuit', () => {
    it('sets the suit of a card', () => {
      expect(suit(setSuit('HEARTS')(card('2','CLUBS')))).toEqual('HEARTS');
    });
  });
  describe('copy', () => {
    it('returns a copy of the card', () => {
      expect(id(copy(my2D))).toEqual(id(my2D));
    });
  });
  describe('hasRank', () => {
    it('checks if a card has a certain rank', () => {
      expect(hasRank('2')(my2D)).toBeTruthy();
    });
  });
  describe('hasSuit', () => {
    it('checks if a card has a certain suit', () => {
      expect(hasSuit('DIAMONDS')(my2D)).toBeTruthy();
    });
  });
  describe('xhasRank', () => {
    it('checks if a card has a certain rank', () => {
      expect(xhasRank('2')(my2D)).toBeFalse();
    });
  });
  describe('xhasSuit', () => {
    it('checks if a card has a certain suit', () => {
      expect(xhasSuit('DIAMONDS')(my2D)).toBeFalse();
    });
  });
  describe('rankDist', () => {
    it('checks for the distance between a rank and a cards rank', () => {
      expect(rankDist('a')(my2D)).toEqual(1);
    });
  });
  describe('rankDiff', () => {
    it('checks for the differnece between a rank and a cards rank', () => {
      expect(rankDiff('a')(my2D)).toEqual(12);
    });
  });
  describe('nextRank', () => {
    it('returns the next rank f the given card', () => {
      expect(nextRank(my2D)).toEqual('3');
    });
  });
  describe('prevRank', () => {
    it('returns the previoys rank of the given card', () => {
      expect(prevRank(my2D)).toEqual('a');
    });
  });
  describe('adjRanks', () => {
    it('returns an array of the cards previus and next ranks', () => {
      expect(adjRanks(my2D)).toEqual([ 'a', '3', ]);
    });
  });
  
  describe('higherRank', () => {
    it('checks if a card has a higher rank than the given rank', () => {
      expect(higherRank('3')(my2D)).toEqual(false);
    });
  });
  describe('lowerRank', () => {
    it('checks if a card has a lower rank than the given rank', () => {
      expect(lowerRank('3')(my2D)).toEqual(true);
    });
  });
  
  describe('hasAdjRank', () => {
    it('checks for equality between a given rank and  a cards adjRanks', () => {
      expect(hasAdjRank('a')(my2D)).toBeTruthy();
    });
  });
});
