import './index.css'
import {useEffect, useState} from 'react'
import LeaderboardRow from '../LeaderboardRow'

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])

  const renderLeaderboard = () => (
    <ul className="leaderboard-table-container">
      {renderLeaderboardHeader()}
      {leaderboardData.map(userDetails => (
        <LeaderboardRow key={userDetails.id} userDetails={userDetails} />
      ))}
    </ul>
  )

  useEffect(() => {
    const getLeaderboardData = async () => {
      const url = 'https://apis2.ccbp.in/leaderboard-v2'
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const responseData = await response.json()
        console.log('API Response:', responseData)
        const formattedData = responseData.leaderboard_data.map(eachUser => ({
          id: eachUser.id,
          rank: eachUser.rank,
          name: eachUser.name,
          profileImgUrl: eachUser.profile_image_url,
          score: eachUser.score,
          language: eachUser.language,
          timeSpent: eachUser.time_spent,
        }))
        setLeaderboardData(formattedData)
      } catch (error) {
        console.error('Error fetching leaderboard data:', error)
      }
    }
    getLeaderboardData()
  }, [])

  const renderLeaderboardHeader = () => (
    <li className="leaderboard-header">
      <p className="table-heading rank">Rank</p>
      <p className="table-heading name">Name</p>
      <p className="table-heading score">Score</p>
      <p className="table-heading language">Language</p>
      <p className="table-heading time-spent">Time Spent</p>
    </li>
  )

  return <div className="leaderboard-container">{renderLeaderboard()}</div>
}

export default Leaderboard
