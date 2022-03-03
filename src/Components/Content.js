import { useEffect, useState } from 'react'
import { getVSSM } from 'vssm/lib'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'

import introduction from 'Markdown/introduction.md'
import quickGuide from 'Markdown/quickGuide.md'
import dosAndDonts from 'Markdown/dosAndDonts.md'
import gettingStarted from 'Markdown/gettingStarted.md'
import javascriptFrameworks from 'Markdown/javascriptFrameworks.md'
import react from 'Markdown/react.md'
import vue3 from 'Markdown/vue3.md'
import foundABug from 'Markdown/foundABug.md'
import contribution from 'Markdown/contribution.md'

export default function Content() {
  const docs = {
    introduction: introduction,
    quickGuide: quickGuide,
    dosAndDonts: dosAndDonts,
    gettingStarted: gettingStarted,
    javascriptFrameworks: javascriptFrameworks,
    react: react,
    vue3: vue3,
    foundABug: foundABug,
    contribution: contribution
  }
  const { route, style } = getVSSM()
  const [markdown, setMarkdown] = useState('')
  const [isMobile, setIsMobile] = useState(style.isMobile)
  const [innerWidth, setInnerWidth] = useState(style.innerWidth)
  const [nextRoute, setNextRoute] = useState(null)
  const [previousRoute, setPreviousRoute] = useState(null)
  const getMD = async path => {
    try {
      const res = await fetch(docs[path])
      const md = await res.text()
      setMarkdown(md)
    } catch (e) {
      console.error(e)
    }
  }
  const getNextAndPreviousRoutes = () => {
    let currentIndex = route.paths.findIndex(r => r.route === route.current.route)
    currentIndex === -1 && (currentIndex = 0)
    if (route.paths[currentIndex - 1]) setPreviousRoute(route.paths[currentIndex - 1])
    else setPreviousRoute(null)
    if (route.paths[currentIndex + 1]) setNextRoute(route.paths[currentIndex + 1])
    else setNextRoute(null)
  }

  useEffect(() => {
    getNextAndPreviousRoutes()
    getMD('introduction')
    route.current = () => {
      getMD(route.current.route)
      getNextAndPreviousRoutes()
    }
    style.isMobile = () => setIsMobile(style.isMobile)
    style.innerWidth = () => setInnerWidth(style.innerWidth)
  }, [])

  return (
    <div
      style={{
        width: isMobile ? '100%' : `${innerWidth - 200}px`,
        marginLeft: isMobile ? '0' : '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          flex: 1,
          width: '100%',
          padding: 20,
          maxWidth: '700px'
        }}
      >
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={markdown}
          components={{
            p({ children }) {
              return <p className="md-text">{children}</p>
            },
            h1({ children }) {
              return <h1 className="md-h1">{children}</h1>
            },
            h2({ children }) {
              return <h2 className="md-h2">{children}</h2>
            },
            h3({ children }) {
              return <h3 className="md-h3">{children}</h3>
            },
            ul({ children }) {
              return <ul className="md-ul">{children}</ul>
            },
            li({ children }) {
              return <li className="md-li">{children}</li>
            },
            a({ children, ...props }) {
              return (
                <a className="md-a" target="_blank" {...props}>
                  {children}
                </a>
              )
            },
            code({ node, inline, className, children, ...props }) {
              return !inline ? (
                <SyntaxHighlighter
                  className="md-code"
                  children={String(children).replace(/\n$/, '')}
                  style={dracula}
                  language={'javascript'}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    </div>
  )
}
