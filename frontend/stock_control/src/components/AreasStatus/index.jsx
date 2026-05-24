import './index.css'

function AreasStatus() {
  const areas = [
    { name: 'Aisle A - Food Section', location: 'Camera #1', stock: '12/20', status: 'Critical' },
    { name: 'Aisle B - Beverages', location: 'Camera #2', stock: '8/15', status: 'Critical' },
    { name: 'Aisle C - Personal Care', location: 'Camera #3', stock: '15/25', status: 'Critical' },
    { name: 'Refrigerated Section', location: 'Camera #4', stock: '5/12', status: 'Critical' },
    { name: 'Storage Area - Zone A', location: 'Camera #5', stock: '9/18', status: 'Critical' },
    { name: 'Checkout Counter Area', location: 'Camera #6', stock: '6/10', status: 'Critical' }
  ]

  return (
    <div className="product-list">
      <div className="list-header">
        <span className="header-icon">⚠️</span>
        <h2>Areas Status</h2>
      </div>
      
      <div className="product-items">
        {areas.map((area, index) => (
          <div key={index} className="product-item">
            <div className="product-info">
              <h3>{area.name}</h3>
              <p className="product-location">{area.location}</p>
            </div>
            <div className="product-status">
              <span className="product-stock">{area.stock}</span>
              <span className="status-badge">{area.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AreasStatus
