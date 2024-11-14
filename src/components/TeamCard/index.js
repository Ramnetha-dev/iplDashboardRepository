// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {listItem} = props
  const {id, name, teamImageUrl} = listItem
  return (
    <li className="team-item">
      <Link exact to={`/team-matches/${id}`} className="list-item-container">
        <img className="team-image" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
