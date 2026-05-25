import './index.css'
import CameraCard from '../CameraCard'
import AlertList from '../AlertList'

function MonitorOneCamera({ camera, onClose }) {
  return (
    <div className="monitor-one-camera">
      <div className="return-button-container-one-camera">
        <button className="return-button-one-camera" onClick={onClose}>
          ← Back to Cameras
        </button>
      </div>

      <div className="page-header-one-camera">
        <div>
          <h1>{camera.name} Monitoring</h1>
          <p className="page-subtitle-one-camera">View status and feed from {camera.name} camera</p>
        </div>
      </div>

      <div className="camera-content">
        <CameraCard camera={camera} isMaximized={true} />
        <AlertList cameraId={camera.id} />
      </div>
    </div>
  )
}

export default MonitorOneCamera