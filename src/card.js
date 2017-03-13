import { dist, isHigher,isLower, next, prev, rankVal, } from './rank';
export const card = (rank, suit) => ({ rank, suit, id: `${rank}_${suit}`, });

export const id = ({ rank, suit, }) => `${rank}_${suit}`;
export const suit = ({ suit, }) => suit;
export const rank = ({ rank, }) => rank;

export const copy = c => card(rank(c), suit(c));

export const setSuit = s => c => card(rank(c), s);
export const setRank = r => c => card(r, suit(c));

export const hasRank = r => c => r === rank(c);
export const hasSuit = s => c => s === suit(c);

export const xhasRank = r => c => !hasRank(r)(c);
export const xhasSuit = s => c => !hasSuit(s)(c);

export const higherRank = r => c => isHigher(r)(rank(c));
export const lowerRank = r => c => isLower(r)(rank(c));

export const rankDist = r => c => dist(r)(rank(c));
export const rankDiff = r => c => rankVal(r) - rankVal(rank(c));

export const nextRank = c => next(rank(c));
export const prevRank = c => prev(rank(c));
export const adjRanks = c => [ prevRank(c), nextRank(c), ];
