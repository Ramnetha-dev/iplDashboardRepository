// Write your code here

import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  state = {iplTeamList: {}}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    console.log(data)

    const updatedImageUrl = {
      teamBannerUrl: data.team_banner_url
    }

    this.setState(prevState => ({
      iplTeamList: {...prevState.iplTeamList, updatedImageUrl},
    }))
  }

  render() {
    const {iplTeamList} = this.state

    const {teamBannerUrl} = iplTeamList
    console.log(teamBannerUrl)
    return (
      <div className="bg-container">
        <img src={teamBannerUrl} alt="hdfdf" />
      </div>
    )
  }
}

export default TeamMatches
