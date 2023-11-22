import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <img
        className="nav-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
    </div>
    <div>
      <p className="score">Score 0</p>
    </div>
    <div className="timer">
      <img
        className="timer-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
        alt="timer"
      />
      <p className="score">10:00</p>
    </div>
  </nav>
)

export default Header
