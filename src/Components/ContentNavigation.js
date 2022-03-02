import { getVSSM } from 'vssm/lib'

export default function ContentNavigation({ previous, next }) {
  const { route } = getVSSM()

  const handleNextClick = () => (route.current = next)
  const handlePreviousClick = () => (route.current = previous)
  return (
    <div className="d-flex flex-row justify-content-between mt-5">
      {previous ? (
        <button
          className="content-navigation"
          onClick={handlePreviousClick}
        >{`< ${previous.title}`}</button>
      ) : (
        <div />
      )}
      {next ? (
        <button
          className="content-navigation"
          onClick={handleNextClick}
        >{`${next.title} >`}</button>
      ) : (
        <div />
      )}
    </div>
  )
}
