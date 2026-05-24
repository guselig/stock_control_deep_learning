import './App.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Card from './components/Card'
import AlertGraph from './components/AlertGraph'
import AreasStatus from './components/AreasStatus'
import AlertList from './components/AlertList'
import CamerasPage from './pages/CamerasPage'

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard')

  return (
    <>
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="App">
        <Header />
        
        {currentPage === 'Dashboard' && (
          <>
            <h1>Dashboard</h1>
            <p className="subtitle">Real-time inventory overview • Last update: now</p>
          
            <div className="cards-container">
              <Card 
                title="Total Cameras"
                value="14"
                subtitle="↓ -3.2% vs yesterday"
                color="#3b82f6"
                icon="📦"
              />
              
              <Card 
                title="Critical Products"
                value="6"
                subtitle="↑ +2 vs yesterday"
                color="#ef4444"
                icon="⚠️"
              />
              
              <Card 
                title="Cameras Online"
                value="11"
                subtitle="75% vs yesterday"
                color="#10b981"
                icon="📷"
              />

              <Card 
                title="Active Alerts"
                value="8"
                subtitle="↑ +3 vs yesterday"
                color="#f59e0b"
                icon="📊"
              />
            </div>

            <div className="graphs-container">
              <AlertGraph/>  
            </div>

            <div className="lists-container">
              <AreasStatus />
              <AlertList />
            </div>
          </>
        )}

        {currentPage === 'Cameras' && (
          <CamerasPage />
        )}
      </div>
    </>
  )
}

export default App
