# Vue 3

**Important:** set the initial state in your `main.js` file (this is important, it will prevent your Vssm instance from being garbage collected).

**Important:** Change all `"vssm"` imports to `"vssm/lib"`, for some reason Vue's default configuration won't declare the types of Vssm's classes and methods when importing from `"vssm"` (I'm not sure why this is happening, I might fix it in the future).

```javascript
// main.js

import { createApp } from 'vue'
import App from './App.vue'
import { createState, createVSSM } from 'vssm/lib'

createVSSM({
  user: createState('user', {
    name: ''
  })
})

createApp(App).mount('#app')
```

In your components, use Vssm like you would in a normal Javascript project and simply change the local component's state when you wish to trigger a re-render.

```javascript
// SomeComponent.vue

<template>
  <div>
    {{ display }}
  </div>
</template>

<script>
import { getVSSM } from "vssm/lib"
export default {
  name: "SomeComponent",
  mounted() {
    const { user } = getVSSM()

    // Watching user.name for changes
    user.name = () => {
      this.display = user.name
    }
  },
  data() {
    return {
      display: ''
    }
  }
}
</script>
```
