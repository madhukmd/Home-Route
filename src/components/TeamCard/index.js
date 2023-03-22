import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {TeamCardItem} = props
  const {id, name, teamImageUrl} = TeamCardItem

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className={`team-card-item-container ${id}`}>
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-logo-heading">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
