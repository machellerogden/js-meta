'use strict';

export const META = Symbol();

class MetaMap extends WeakMap {
  update(k, fn) {
    return this.set(k, fn(this.get(k)));
  }
  clear(k) {
    return this.delete(k);
  }
}

const store = (0,eval)('this')[META] = new MetaMap();

export default store;
export const set = store.set.bind(store);
export const get = store.get.bind(store);
export const has = store.has.bind(store);
export const update = store.update.bind(store);
export const clear = store.clear.bind(store);
