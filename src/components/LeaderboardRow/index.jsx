import './index.css'

const LeaderboardRow = ({userDetails}) => {
  const {rank, profileImgUrl, name, score, language, timeSpent} = userDetails

  const renderRank = () => {
    switch (rank) {
      case 1:
        return (
          <img
            className="badge"
            src="https://assets.ccbp.in/frontend/hooks/gold-badge-img.png"
            alt={rank}
          />
        )
      case 2:
        return (
          <img
            className="badge"
            src="https://assets.ccbp.in/frontend/hooks/silver-badge-img.png"
            alt={rank}
          />
        )
      case 3:
        return (
          <img
            className="badge"
            src="https://assets.ccbp.in/frontend/hooks/bronze-badge-img.png"
            alt={rank}
          />
        )
      default:
        return <p className="rank">{rank}</p>
    }
  }

  return (
    <li className="leaderboard-row-container">
      <div className="table-cell rank-container">{renderRank()}</div>
      <div className="table-cell profile-container">
        <img className="avatar" src={profileImgUrl} alt={name} />
        <p className="name">{name}</p>
      </div>
      <div className="table-cell score-container">
        <p className="score">{score}</p>
      </div>
      <div className="table-cell language-container">
        <p className="language">{language}</p>
      </div>
      <div className="table-cell time-spent-container">
        <p className="time-spent">{timeSpent}</p>
      </div>
    </li>
  )
}

export default LeaderboardRow
