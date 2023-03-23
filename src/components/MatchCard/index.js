import './index.css'

const MatchCard = props => {
  const {cards} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = cards
  const status = matchStatus === 'Won' ? 'win' : 'lose'

  return (
    <li className="cards-bg">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="cards-logo"
      />
      <p className="card-name-heading">{competingTeam}</p>
      <p className="card-name-para">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
