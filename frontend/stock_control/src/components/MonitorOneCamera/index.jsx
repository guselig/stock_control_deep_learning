import './index.css'

function MonitorOneCamera() {
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
        </div>
    )
}

export default MonitorOneCamera