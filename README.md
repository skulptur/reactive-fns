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
