export default function ExternalButtons() {
  const openUrl = url => window.open(url)
  return (
    <div className="d-flex flex-column align-items-start">
      <button onClick={() => openUrl('https://www.npmjs.com/package/vssm')} className="npm-button">
        Vssm on NPM
      </button>
      <button onClick={() => openUrl('https://github.com/tk-ni')} className="gh-button">
        tk-ni on GH
      </button>
      <button onClick={() => openUrl('https://github.com/tk-ni/Vssm')} className="gh-button-repo">
        Vssm on GH
      </button>
    </div>
  )
}
