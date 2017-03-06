export const card = (rank, suit) => ({ rank, suit, toString: () => `${rank}_${suit}`, });

export const suit = ({ suit, }) => suit;
export const rank = ({ rank, }) => rank;

export const setSuit = suit => c => card(rank(c), suit);
export const setRank = rank => c => card(rank, suit(c));
