import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    colorid: '',
    banner: '',
    latestMatch: '',
    matchCard: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const details = await response.json()
    const arrayObj = {
      BannerUrl: details.team_banner_url,
      latestMD: details.latest_match_details,
      recentMatches: details.recent_matches,
    }

    const {BannerUrl, latestMD, recentMatches} = arrayObj

    const updatedLatestMatch = {
      id: latestMD.id,
      competingTeam: latestMD.competing_team,
      competingTeamLogo: latestMD.competing_team_logo,
      date: latestMD.date,
      firstInnings: latestMD.first_innings,
      manOfTheMatch: latestMD.man_of_the_match,
      matchStatus: latestMD.match_status,
      result: latestMD.result,
      secondInnings: latestMD.second_innings,
      umpires: latestMD.umpires,
      venue: latestMD.venue,
    }

    const updatedRecentMatches = recentMatches.map(eachItem => ({
      id: eachItem.id,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    this.setState({
      colorid: id,
      banner: BannerUrl,
      latestMatch: updatedLatestMatch,
      matchCard: updatedRecentMatches,
      isLoading: false,
    })
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  getTeamMatch = () => {
    const {banner, latestMatch, matchCard} = this.state
    return (
      <div className="img-container">
        <img
          src={banner}
          alt={latestMatch.competingTeam}
          className="banner-logo"
        />
        <h1 className="latest-heading">Latest Matches</h1>
        <LatestMatch latestItem={latestMatch} />
        <ul className="cards-container">
          {matchCard.map(eachItem => (
            <MatchCard key={eachItem.id} cards={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {colorid, isLoading} = this.state
    return (
      <div className={`team-bg ${colorid}`}>
        <div className="team-con">
          {isLoading ? this.loader() : this.getTeamMatch()}
        </div>
      </div>
    )
  }
}
export default TeamMatches
