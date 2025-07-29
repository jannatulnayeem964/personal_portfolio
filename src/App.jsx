import { useState } from 'react'
import './App.css'
import Desktop from './components/Desktop'
import PortfolioWindow from './components/PortfolioWindow'

function App() {
  const [showPortfolio, setShowPortfolio] = useState(true)

  return (
    <div className="App">
      <Desktop onPortfolioClick={() => setShowPortfolio(true)}/>
      {showPortfolio && (
        <PortfolioWindow onClose={() => setShowPortfolio(false)} />
      )}
    </div>
  )
}

export default App
