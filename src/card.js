export const card = (rank, suit) => ({ rank, suit, id: `${rank}_${suit}`, });

export const show = ({ rank, suit, }) => `${rank}_${suit}`;
export const suit = ({ suit, }) => suit;
export const rank = ({ rank, }) => rank;

export const setSuit = suit => c => card(rank(c), suit);
export const setRank = rank => c => card(rank, suit(c));

export const hasRank = r => c => r === rank(c);
export const hasSuit = s => c => s === suit(c);

export const sameSuit = c0 => c1 => suit(c0) === suit(c1);
export const sameRank = c0 => c1 => rank(c0) === rank(c1);
