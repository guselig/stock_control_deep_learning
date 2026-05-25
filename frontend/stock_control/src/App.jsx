import './App.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import CamerasPage from './pages/CamerasPage'

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard')

  return (
    <>
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="App">
        <Header />
        
        {currentPage === 'Dashboard' && (
          <DashboardPage />
        )}

        {currentPage === 'Cameras' && (
          <CamerasPage />
        )}
      </div>
    </>
  )
}

export default App
