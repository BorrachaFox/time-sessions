import { useState } from 'react'
import './App.css'
import { Timer } from './components/Timer/Timer'

function App() {
  const [goalMin, setGoalMin] = useState(0)
  const [goalSec, setGoalSec] = useState(0)

  return (
    <div className='App'>
      <Timer goal={[goalMin, goalSec]}/>
      <br/>
      <span>
        Min 
        <input onChange={event => setGoalMin(event.target.value)} 
          type="number" 
          value={goalMin}/> <br/>
      </span>
      <span>
        Seg
        <input onChange={event => setGoalSec(event.target.value)} 
          type="number" 
          value={goalSec}/> <br/>
      </span>
    </div>
  )
}

export default App
