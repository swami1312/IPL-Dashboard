import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamCardData: []}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplData = await response.json()
    console.log(iplData)

    const updatedData = iplData.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardData: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamCardList = () => {
    const {teamCardData} = this.state

    return (
      <ul>
        {teamCardData.map(eachCard => (
          <TeamCard teamCardData={eachCard} key={eachCard.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="app-container">
        <div className="ipl-dashboard-heading">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamCardList()}
      </div>
    )
  }
}

export default Home
