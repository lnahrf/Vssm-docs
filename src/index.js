import React from 'react'
import ReactDOM from 'react-dom'
import { createState, createVSSM } from 'vssm/lib'
import App from './Components/App'

createVSSM({
  data: createState('data', {
    markdown: {}
  }),
  route: createState('route', {
    paths: [
      {
        title: 'Introduction',
        route: 'introduction'
      },
      {
        title: 'Quick Guide',
        route: 'quickGuide'
      },
      {
        title: "Do's and Dont's",
        route: 'dosAndDonts'
      },
      {
        title: 'Getting Started',
        route: 'gettingStarted'
      },
      {
        title: 'Using Vssm with React/Vue',
        route: 'javascriptFrameworks'
      },
      {
        title: 'React',
        route: 'react'
      },
      {
        title: 'Vue 3',
        route: 'vue3'
      },
      {
        title: 'Found a Bug?',
        route: 'foundABug'
      },
      {
        title: 'Want to Contribute?',
        route: 'contribution'
      }
    ],
    current: {}
  }),
  style: createState('style', {
    isMobile: window.innerWidth <= 640,
    innerWidth: window.innerWidth
  })
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
