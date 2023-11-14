# Getting Started

Install using npm/yarn with

```bash
npm i vssm
```

Or

```bash
yarn add vssm
```

## Javascript

Configure your project's initial state

```javascript
// main.js
import { createVSSM, createState } from 'vssm'

createVSSM({
  user: createState('user', {
    name: 'Conor Mason'
  })
})
```

Each `state` created with `createState` is an instance in your project's global state. Please make sure your state key and the string provided to `createState` have the same value. (e.g. `test: createState("test", { ... })`).

**If they won't have the same value, some events will fail to emit and catch.**

## Getting State Values

Import `getVSSM` from `"vssm"` and deconstruct the required state.

```javascript
import { getVSSM } from 'vssm'
const { user } = getVSSM()

console.log(user.name) // Conor Mason
```

## Watching State Changes

To watch (or listen to) a state parameter for changes, simply assign a function value to the parameter and write your logic within the function.

```javascript
import { getVSSM } from 'vssm'
const { user } = getVSSM()

user.name = () => {
  console.log("Watching user.name, it's new value is", user.name)
}
```

## Setting the State

There is no dedicated method to set a new value to our state parameters, to do so simply assign the value as if it's a normal variable.

```javascript
import { getVSSM } from 'vssm'
const { user } = getVSSM()

test.name = 'Ryota Kohama'
```
