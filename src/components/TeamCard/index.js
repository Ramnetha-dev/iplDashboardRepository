// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {listItem} = props
  const {id, name, teamImageUrl} = listItem
  return (
    <Link to={`team-matches/${id}`}>
      <li className="list-item-container">
        <img className="team-image" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
