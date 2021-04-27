Tagline of up to 20 words here

## Motivation

Single paragraph about why this library exists

## Get started

Install

```bash
npm install --save reactive-fns
# or
yarn add reactive-fns
```

Use

```typescript
import { noop } from 'reactive-fns'

console.log(noop()) // undefined
```

[Examples](https://github.com/skulptur/reactive-fns/tree/master/example)

## API

- Functions that can be pure, are pure.
- The argument order is optimized for partial application.

Exports:

### below

`() => void`

```typescript
const nothing = noop() // undefined
```
