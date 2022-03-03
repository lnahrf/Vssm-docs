import { useEffect, useState } from 'react'
import { getVSSM } from 'vssm/lib'
import ExternalButtons from './ExternalButtons'
export default function Menu() {
  const { route, style } = getVSSM()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [isOpen, setIsOpen] = useState(style.isMobile ? false : true)
  const [current, setCurrent] = useState({ route: 'introduction' })
  useEffect(() => {
    style.isMobile = () => {
      if (style.isMobile) setIsOpen(false)
      else setIsOpen(true)
      setIsMobile(style.isMobile)
    }
    route.current = () => setCurrent(route.current)
  }, [])

  const handlePathClick = path => {
    style.isMobile && setIsOpen(false)
    route.current = path
  }

  const handleLogoClick = () => style.isMobile && setIsOpen(false)
  return (
    <>
      <div
        className="menu"
        style={{
          transform: isOpen ? 'translateX(0px)' : 'translateX(-200px)'
        }}
      >
        <div className="d-flex flex-column">
          <img
            alt="very small state manager logo"
            onClick={handleLogoClick}
            className="logo cursor-pointer"
            src="/Vssm-docs/misc/assets/vssm_logo_small.png"
          />
          <small className="slogan">Very Small State Manager</small>
          <div className="w-100 separator" />
        </div>
        {route.paths.map(p => (
          <div
            key={p.route}
            className="menu-item cursor-pointer"
            style={{
              backgroundColor: current.route === p.route && '#2c1146'
            }}
            onClick={() => handlePathClick(p)}
          >
            <p>{p.title}</p>
          </div>
        ))}
        <ExternalButtons />
      </div>
      {isMobile && !isOpen && (
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          <div className="menu-button-line" />
          <div className="menu-button-line" />
          <div className="menu-button-line" />
        </button>
      )}
    </>
  )
}
