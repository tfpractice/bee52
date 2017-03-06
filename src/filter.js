import { sameRank, sameSuit, } from './card';

export const byRank = rank => cards => cards.filter(sameRank({ rank, }));
export const bySuit = suit => cards => cards.filter(sameSuit({ suit, }));
