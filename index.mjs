'use strict';

export const META = Symbol();

const store = (0,eval)('this')[META] = new Map();

export const set = (value, data) => store.set(value, data);
export const get = (value) => store.get(value);
export const update = (value, fn) => store.set(value, fn(store.get(value)));
