export default function ExternalButtons() {
  return (
    <div className="d-flex flex-column align-items-start">
      <a rel="noreferrer" target="_blank" href="https://www.npmjs.com/package/vssm">
        <button className="npm-button">Vssm on NPM</button>
      </a>
      <a rel="noreferrer" target="_blank" href="https://github.com/tk-ni">
        <button className="gh-button">tk-ni on GH</button>
      </a>
      <a rel="noreferrer" target="_blank" href="https://github.com/tk-ni/Vssm">
        <button className="gh-button-repo">Vssm on GH</button>
      </a>
    </div>
  )
}
