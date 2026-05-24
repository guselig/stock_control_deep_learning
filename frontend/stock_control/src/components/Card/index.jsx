// Card.jsx - Reusable component to display information
import './index.css'

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{props.title}</h3>
        <span className="card-icon" style={{ color: props.color }}>{props.icon}</span>
      </div>
      <p className="card-value" style={{ color: props.color }}>{props.value}</p>
      <span className="card-subtitle">{props.subtitle}</span>
    </div>
  )
}

export default Card
