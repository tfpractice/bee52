export const RANKS = [ 'a','2','3','4','5','6','7','8','9','10','j','q', 'k', ];
export const indexVal = (el, val) => [ el,val, ];
export const pairId = (el, idx) => [ el,idx, ];
export const idxMap = arr => new Map(arr.map(pairId));
export const VALUES = idxMap(RANKS);
export const modIdx = arr => id => arr[(id % arr.length)];
export const getNext = arr => r => modIdx(arr)(idxMap(arr).get(r) + 1);
export const getPrev = arr => r => modIdx(arr)(idxMap(arr).get(r) - 1);

export const nextRank = r => getNext(RANKS)(r);
export const prevRank = r => getPrev(RANKS)(r);
