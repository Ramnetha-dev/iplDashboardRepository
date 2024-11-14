// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamList: [], isLoading: true}

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
    this.setState({iplTeamList: updatedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {iplTeamList} = this.state

    return (
      <ul className="list-container">
        {iplTeamList.map(eachItem => (
          <TeamCard listItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="teams-list-contianer">
          <div className="logo-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          <ul className="list-container">
            {isLoading ? (
              <div data-testid="loader" className="loader-container">
                <Loader type="Oval" color="#ffffff" height={50} />
              </div>
            ) : (
              this.renderTeamsList()
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
