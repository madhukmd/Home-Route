import './index.css'

const MatchCard = props => {
  const {cards} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = cards
  const status = matchStatus === 'Won' ? 'win' : 'lose'

  return (
    <li className="cards-bg">
      <img src={competingTeamLogo} alt={competingTeam} className="cards-logo" />
      <h1 className="card-name-heading">{competingTeam}</h1>
      <p className="card-name-para">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
