# Do's and Dont's

Make sure your state key and the string provided to `createState` have the same value.

```javascript
// Don't
createVSSM({
  user: createState('userState', {
    name: ''
  })
})

// Do
createVSSM({
  user: createState('user', {
    name: ''
  })
})
```

When assigning values to state parameters that aren't primitive (e.g. they're objects or arrays), in order to trigger the mutation event, we need to create a new copy of our object in memory and save its reference inside the original variable.

```javascript
const { cart } = getVSSM()

// Don't
cart.items.push(item)

// Do
cart.items = [...cart.items, item]
```

Don't interact directly with the first-level state object, interact with it's parameters (interacting with the first-level state object directly might lead to weird or unexpected behavior, like events not emitting or catching).

```javascript
// Don't
const { cart } = getVSSM()
cart = { ...cart, ...{ items: [] } }

// Do
const { cart } = getVSSM()
cart.items = []

// Do
cart.items = [...cart.items, newItem]
```
