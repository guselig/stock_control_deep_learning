import './index.css'
import CameraCard from '../CameraCard'

function MonitorOneCamera({ camera, onClose }) {
  return (
    <div className="monitor-overlay" onClick={onClose}>
      <div className="monitor-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        
        <div className="maximized-card">
          <CameraCard camera={camera} isMaximized={true} />
        </div>
        
        <div className="monitor-actions">
          <button className="action-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default MonitorOneCamera