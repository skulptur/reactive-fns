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
import { pipe, interval, tap, map, filter, forEach } from 'reactive-fns'

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
- fromPromise: Converts a promise to a stream.
- interval: Emits an increasing number at given intervals.
- of: Convert static value(s) to a stream.

### Operators

- debounce: Debounces incoming values.
- filter: Filters incoming values.
- flatten: Flattens higher-order streams.
- map: Transforms incoming values.
- scan: Combine consecutive values from source.
- share: Multicast source.
- skip: Ignores the first n of the source.
- startWith: Start with given values.
- take: Take a maximum number of values from source.

### Combinators

- concat: Combine sources by putting one source after the previous source ends.
- merge: Merges given streams, emitting when each one emits.
- combine: Combines given streams, emits arrays of latest values of each.

### Utilities

- extract: Get the last emitted value if it exists.
- forEach: Subscribes to given stream.
- pipe: Pipes sources to operators to sinks.
- tap: Taps into given stream.


## Learn more

* [Callbag basics](https://github.com/staltz/callbag-basics)
* [Why we need callbags](https://staltz.com/why-we-need-callbags.html)
