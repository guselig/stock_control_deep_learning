import './index.css'
import CameraCard from '../../components/CameraCard'

function CamerasPage() {
  const cameras = [
    {
      id: 1,
      name: 'Camera 01 - Aisle A',
      location: 'Aisle A',
      isOnline: true,
      status: 'Online',
      products: 8,
      lastDetection: '2 min ago'
    },
    {
      id: 2,
      name: 'Camera 02 - Aisle B',
      location: 'Aisle B',
      isOnline: true,
      status: 'Online',
      products: 12,
      lastDetection: '1 min ago'
    },
    {
      id: 3,
      name: 'Camera 03 - Storage',
      location: 'Main Storage',
      isOnline: true,
      status: 'Online',
      products: 15,
      lastDetection: '30 sec ago'
    },
    {
      id: 4,
      name: 'Camera 04 - Entrance',
      location: 'Entrance',
      isOnline: false,
      status: 'Offline',
      products: 5,
      lastDetection: '2h ago'
    },
    {
      id: 5,
      name: 'Camera 05 - Aisle C',
      location: 'Aisle C',
      isOnline: true,
      status: 'Online',
      products: 10,
      lastDetection: '5 min ago'
    },
    {
      id: 6,
      name: 'Camera 06 - Checkout',
      location: 'Checkout Area',
      isOnline: true,
      status: 'Online',
      products: 6,
      lastDetection: '15 min ago'
    },
    {
      id: 7,
      name: 'Camera 07 - Refrigerated',
      location: 'Refrigerated Section',
      isOnline: false,
      status: 'Offline',
      products: 0,
      lastDetection: '45 min ago'
    },
    {
      id: 8,
      name: 'Camera 08 - Loading',
      location: 'Loading Dock',
      isOnline: true,
      status: 'Online',
      products: 7,
      lastDetection: '3 min ago'
    }
  ]

  const onlineCameras = cameras.filter(cam => cam.isOnline).length
  const detectingCameras = cameras.filter(cam => cam.isOnline && cam.products > 0).length

  return (
    <div className="cameras-page">
      <div className="page-header">
        <div>
          <h1>Camera Monitoring</h1>
          <p className="page-subtitle">View status and feed from monitoring cameras</p>
        </div>
        <div className="status-badges">
          <div className="badge badge-online">
            <span className="badge-icon">📹</span>
            {onlineCameras} Online
          </div>
          <div className="badge badge-detecting">
            <span className="badge-icon">🔍</span>
            {detectingCameras} Detecting
          </div>
        </div>
      </div>

      <div className="cameras-grid">
        {cameras.map(camera => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </div>
    </div>
  )
}

export default CamerasPage
