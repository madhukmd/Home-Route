import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const logo = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'
const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    teamCardsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCards()
  }

  getCards = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    const {teams} = data
    const updatedList = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedList)
    this.setState({teamCardsList: updatedList, isLoading: false})
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  getTeamCardsHere = () => {
    const {teamCardsList} = this.state
    return (
      <div className="ipl-container">
        <div className="logo-container">
          <img src={logo} alt="ipl logo" className="logo" />
          <h1 className="logo-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-card-container">
          {teamCardsList.map(eachItem => (
            <TeamCard key={eachItem.id} TeamCardItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="dashboard-container">
        {isLoading ? this.loader() : this.getTeamCardsHere()}
      </div>
    )
  }
}
export default Home
