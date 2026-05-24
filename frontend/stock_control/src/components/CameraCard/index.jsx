import './index.css'

function CameraCard({ camera }) {
  return (
    <div className="camera-card">
      <div className="camera-preview">
        {camera.isOnline ? (
          <>
            <div className="camera-image">
              <div className="live-badge">● LIVE</div>
              <div className="status-badge online">{camera.status}</div>
              <div className="camera-placeholder">
                🎥
                <p>Camera Feed</p>
              </div>
            </div>
          </>
        ) : (
          <div className="camera-offline">
            <div className="offline-badge">Offline</div>
            <div className="offline-icon">📵</div>
            <p>No signal</p>
          </div>
        )}
      </div>
      
      <div className="camera-info">
        <div className="camera-header">
          <div>
            <h3>{camera.name}</h3>
            <p className="camera-location">{camera.location}</p>
          </div>
          <button className="view-button">
            {camera.isOnline ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
        
        <div className="camera-stats">
          <div className="stat">
            <span className="stat-icon">📦</span>
            <span className="stat-text">{camera.products} products</span>
          </div>
          <div className="stat-time">
            Last detection: {camera.lastDetection}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CameraCard
