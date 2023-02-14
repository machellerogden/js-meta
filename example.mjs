import meta, { get, set, update, clear } from './index.mjs';

const foo = { a: "a" };

console.log('foo is', foo);
console.log('foo meta is', meta.get(foo));

// set some meta data
meta.set(foo, { foo: "foo" });

console.log('foo is still', foo);
console.log('foo meta is now', meta.get(foo));

meta.update(foo, (v) => ({ ...v, baz: "baz" }));

console.log('and foo meta is updated to', get(foo));

const bar = { b: "b" };

console.log('bar is', bar);
console.log('bar meta is', get(bar));

// set some meta data
set(bar, { bar: "bar" });

console.log('bar is still', bar);
console.log('bar meta is now', get(bar));

update(bar, (v) => ({ ...v, qux: "qux" }));

console.log('and bar meta is updated to', get(bar));

clear(bar);
console.log('and now bar meta is gone', get(bar));
console.log('but foo meta is still', get(foo));
