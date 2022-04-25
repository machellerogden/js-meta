# js-meta

```
import { set, get } from 'js-meta';

const foo = { a: "a" };

console.log('foo is', foo);
console.log('foo meta is', get(foo));

// set some meta data
set(foo, { hey: "there" });

console.log('foo is still', foo);
console.log('foo meta is now', get(foo));
```
