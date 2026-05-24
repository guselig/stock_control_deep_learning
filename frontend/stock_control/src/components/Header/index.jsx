import './index.css'

function Header() {
  return (
    <div className="header">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Search products, cameras..." 
          className="search-input"
        />
      </div>
      
      <div className="header-actions">
        <button className="notification-btn">
          🔔
          <span className="notification-badge">1</span>
        </button>
        <div className="user-avatar">A</div>
      </div>
    </div>
  )
}

export default Header
