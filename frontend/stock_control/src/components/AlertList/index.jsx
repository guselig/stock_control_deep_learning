import './index.css'

function AlertList() {
  const alerts = [
    { 
      location: 'Aisle A - Shelf 3', 
      message: 'Critical stock level detected! Only 3 units remaining. Urgent restock...',
      time: '14:30:00'
    },
    { 
      location: 'Corridor B - Section 2', 
      message: 'Stock below minimum threshold. Camera detected empty spaces.',
      time: '14:28:00'
    },
    { 
      location: 'Refrigerated Section', 
      message: 'Critical level reached. Only 8 units available on shelves.',
      time: '14:15:00'
    },
    { 
      location: 'Aisle C - Shelf 5', 
      message: 'Imminent stockout! 5 units remaining, minimum is 8.',
      time: '13:55:00'
    },
    { 
      location: 'Storage Area - Zone A', 
      message: 'Stock at critical level. 9 units out of 12 minimum required.',
      time: '13:40:00'
    }
  ]

  return (
    <div className="alert-list">
      <div className="list-header">
        <span className="header-icon">⚠️</span>
        <h2>Recent Alerts</h2>
      </div>
      
      <div className="alert-items">
        {alerts.map((alert, index) => (
          <div key={index} className="alert-item">
            <div className="alert-indicator"></div>
            <div className="alert-content">
              <h3>{alert.location}</h3>
              <p className="alert-message">{alert.message}</p>
              <span className="alert-time">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlertList
