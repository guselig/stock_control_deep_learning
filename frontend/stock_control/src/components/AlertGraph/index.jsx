import './index.css'

function AlertGraph() {
  // Dados simulados para 7 dias
  const data = [2, 10, 3, 15, 20, 32, 17]
  const labels = ['18/05', '19/05', '20/05', '21/05', '22/05', '23/05', '24/05']
  
  // Configurações do gráfico
  const width = 1500
  const height = 230
  const padding = 40
  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  
  // Função para calcular a posição Y
  const getY = (value) => {
    const chartHeight = height - padding
    return chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight + 20
  }
  
  // Função para calcular a posição X
  const getX = (index) => {
    const chartWidth = width - padding
    return (index / (data.length - 1)) * chartWidth + padding
  }
  
  // Criar o path da linha
  const linePath = data.map((value, index) => {
    const x = getX(index)
    const y = getY(value)
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')
  
  // Criar o path da área preenchida
  const areaPath = `
    M ${getX(0)} ${getY(data[0])}
    ${data.slice(1).map((value, index) => `L ${getX(index + 1)} ${getY(value)}`).join(' ')}
    L ${getX(data.length - 1)} ${height - 20}
    L ${getX(0)} ${height - 20}
    Z
  `

  return (
    <div className="alert-graph">
      <h2>Alerts Over Time</h2>
      
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid lines */}
        {[0, 150, 300, 450, 600].map((value) => (
          <g key={value}>
            <line
              x1={padding}
              y1={getY(value)}
              x2={width - 10}
              y2={getY(value)}
              stroke="#1e293b"
              strokeWidth="1"
            />
            <text
              x={10}
              y={getY(value) + 5}
              fill="#64748b"
              fontSize="12"
            >
              {value}
            </text>
          </g>
        ))}
        
        {/* Área preenchida abaixo da linha */}
        <path
          d={areaPath}
          fill="url(#gradient)"
          opacity="0.2"
        />
        
        {/* Linha do gráfico */}
        <path
          d={linePath}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Labels do eixo X */}
        {labels.map((label, index) => (
          <text
            key={label}
            x={getX(index)}
            y={height - 5}
            fill="#64748b"
            fontSize="12"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}
        
        {/* Gradiente */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default AlertGraph