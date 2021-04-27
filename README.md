Tiny and powerful functional reactive programming library for Typescript.

## Motivation

This library is based on the brilliant Callbag spec by André Staltz, which allows to create both pullable and listenable sources from simple functions. That makes it extremely lightweight and flexible. Because it is tiny it shines when used as a primitive for libraries or apps!

## Get started

Install

```bash
npm install --save reactive-fns
# or
yarn add reactive-fns
```

Use

```typescript
import { tap, interval, map, forEach, pipe, filter } from 'reactive-fns'

pipe(
    interval(1000),
    tap(v => console.log('Before: ' + v)),
    map(x => x * 3),
    filter(x => x % 2 === 0),
    forEach(v => console.log('After: ' + v))
)
```

### Source Creators

- fromEvent: Listen to DOM event.
- fromPromise: Converts a promise to a callbag.
- interval: Emits an increasing number at given intervals.
- of: Convert static value(s) to a callbag.

### Operators

- debounce: Debounces incoming values.
- filter: Filters incoming values.
- flatten: Flattens higher-order callbags.
- map: Transforms incoming values.
- scan: Combine consecutive values from source.
- share: Multicast source.
- skip: Ignores the first n of the source.
- startWith: Start with given values.
- take: Take a maximum number of values from source.

### Combinators

- concat: Combine sources by putting one source after the previous source ends.
- merge: Merges given callbags, emitting when each one emits.
- combine: Combines given callbags, emits arrays of latest values of each.

### Utilities

- forEach: Subscribes to given callbag.
- log: Shortcut for console.log in a forEach.
- pipe: Pipes sources to operators to sinks.
- tap: Taps into given callbag.