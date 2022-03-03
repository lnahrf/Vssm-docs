# React

**Important:** set the initial state in your `index.js` file (this is important, it will prevent your Vssm instance from being garbage collected).

```javascript
// index.js

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createState, createVSSM } from 'vssm'

createVSSM({
  user: createState('user', {
    name: ''
  })
})

ReactDOM.render(<App />, document.getElementById('root'))
```

In your components, use Vssm like you would in a normal Javascript project and simply change the local component's state when you wish to trigger a re-render.

```javascript
// SomeComponent.js

export default function SomeComponent() {
  const { user } = getVSSM()
  const [display, setDisplay] = useState(user.name)

  // Watching user.name for changes
  user.name = () => setDisplay(user.name)

  return <div>{display}</div>
}
```
