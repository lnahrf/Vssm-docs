import { useEffect } from 'react'
import { getVSSM } from 'vssm/lib'

import Content from './Content'
import Menu from './Menu'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'Styles/index.css'

export default function App() {
  useEffect(() => {
    const handleResize = () => {
      const { style } = getVSSM()
      style.isMobile = window.innerWidth <= 640
      style.innerWidth = window.innerWidth
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App d-flex flex-row">
      <Menu />
      <Content />
    </div>
  )
}
