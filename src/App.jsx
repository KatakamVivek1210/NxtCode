import Header from './components/Header'
import Leaderboard from './components/Leaderboard'

import './App.css'

const App = () => (
  <div className="main-container">
    <Header />
    <h1 className="title">Think &lt;Code&gt; Innovate</h1>
    <p className="description">Make it work, Make it right, Make it fast</p>
    <Leaderboard />
  </div>
)

export default App
