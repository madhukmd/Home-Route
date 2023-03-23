import './index.css'

const LatestMatch = props => {
  const {latestItem} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestItem

  return (
    <div className="latest-match-background">
      <div className="container-one">
        <div className="content-container">
          <p className="name-date-style">{competingTeam}</p>
          <p className="name-date-style">{date}</p>
          <p className="paragraph">{venue}</p>
          <p className="paragraph margin">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>
      <hr />
      <div className="container-two">
        <p className="name-heading margin">First Innings</p>
        <p className="paragraph margin">{firstInnings}</p>
        <p className="name-heading margin">Second Innings</p>
        <p className="paragraph margin">{secondInnings}</p>
        <p className="name-heading margin">Man Of The Match</p>
        <p className="paragraph margin">{manOfTheMatch}</p>
        <p className="name-heading margin">Umpires</p>
        <p className="paragraph margin">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
