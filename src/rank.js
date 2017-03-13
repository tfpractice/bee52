export const RANKS = [ '2','3','4','5','6','7','8','9','10','j','q', 'k','a', ];

export const indexVal = (el, val) => [ el,val, ];
export const pairId = (el, idx) => [ el,idx, ];
export const lower = r => r.toString().toLowerCase();
export const idxMap = arr => new Map(arr.map(pairId));

export const VALUES = idxMap(RANKS);

export const norm = num => (num + VALUES.size) % VALUES.size;

export const idx = arr => r => arr.indexOf(lower(r));
export const modIdx = arr => id => arr[((id + arr.length) % arr.length)];

const get = map => k => new Map(map).get(k);

export const getNext = arr => r => modIdx(arr)(get(idxMap(arr))(r) + 1);
export const getPrev = arr => r => modIdx(arr)(get(idxMap(arr))(r) - 1);

export const next = r => getNext(RANKS)(r);
export const prev = r => getPrev(RANKS)(r);

export const rankVal = r => VALUES.get(lower(r));
export const diff = a => b => (norm(rankVal(a) - rankVal(b)));

export const isHigher = a => b => rankVal(b) > rankVal(a);
export const isLower = a => b => rankVal(b) < rankVal(a);

export const dist = a => b => isHigher(a)(b) ? diff(a)(b) : diff(b)(a);
export const maxDist = a => b => isLower(a)(b) ? diff(a)(b) : diff(b)(a);
export const minDist = dist;
