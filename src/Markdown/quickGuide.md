# Quick Guide

### Create State

```javascript
import { createVSSM, createState } from 'vssm'

createVSSM({
  user: createState('user', {
    name: '',
    address: ''
  }),
  cart: createState('cart', {
    items: []
  })
})
```

### Assign New Values

```javascript
import { getVSSM } from 'vssm'
const { user, cart } = getVSSM()

user.name = 'Conor Mason'
user.address = 'P.Sherman 42 Wallaby Way, Sydney'

// If the state variable is not primitive (e.g it's an object or array),
// in order to trigger the mutation event,
// we need to create a new copy of our object in memory and save its reference inside the original variable.
// An easy way of doing so is deconstruction (e.g {...obj} or [...arr])

cart.items = [
  ...cart.items,
  {
    name: 'Is Everyone Going Crazy?',
    type: 'Album',
    digital: true,
    price: 25,
    currency: 'USD'
  }
]
```

### Watch for Changes

```javascript
import { getVSSM } from 'vssm'
const { user, cart } = getVSSM()

cart.items = () => {
  console.log('Cart updated!, current items in cart:', cart.items)
}
```
