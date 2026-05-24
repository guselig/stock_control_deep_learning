import './index.css'

function Sidebar({ currentPage, onPageChange }) {
  const menuItems = [
    { name: 'Dashboard', icon: '▦', badge: null },
    { name: 'Cameras', icon: '📷', badge: null },
    { name: 'Products', icon: '📦', badge: null },
    { name: 'Alerts', icon: '🔔', badge: 8 },
    { name: 'Reports', icon: '📊', badge: null },
    { name: 'Settings', icon: '⚙️', badge: null }
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">👁️</div>
        <div className="logo-text">
          <h2>StockVision AI</h2>
          <p>Intelligent Control</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`menu-item ${currentPage === item.name ? 'active' : ''}`}
            onClick={() => onPageChange(item.name)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.name}</span>
            {item.badge && <span className="menu-badge">{item.badge}</span>}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="system-status">
          <div className="status-item">
            <span className="status-icon online">📹</span>
            <span className="status-text">6/8 cameras online</span>
          </div>
          <div className="status-item">
            <span className="status-icon active">●</span>
            <span className="status-text">System active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
