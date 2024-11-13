// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeamList: []}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplTeamList: updatedData})
  }

  render() {
    const {iplTeamList} = this.state

    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {iplTeamList.map(each => (
            <TeamCard listItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
