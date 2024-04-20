import { useEffect, useState } from "react"
import { ProgressBar } from "../ProgressBar/ProgressBar" 
import './style.css'

export function Timer(props) {
  const [milliseconds, setmilliseconds] = useState(0);

  const [timeOn, setTimeOn] = useState(false)
  
  let goal = props.goal
  goal = goal[0]*60000 + goal[1]*1000

  useEffect(() => {
    let timer;
    if (timeOn) {
      timer = setInterval(() => {
        setmilliseconds(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(timer)
    }

    return () => clearInterval(timer)
  }, [timeOn])
  
  useEffect(() => {
    if (milliseconds >= goal) {
      setTimeOn(false)
    }
  })

  return (
    <div className="timer">
      <input type="range" min={0} max={100} value={((milliseconds / goal)*100)%100}/>
      <h1>
        <span>{("0" + Math.floor((milliseconds / 60000)%60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((milliseconds / 1000)%60)).slice(-2)}</span>
      </h1>
      <div style={{display: "flex", gap:"6px"}}>
        <button onClick={() => setTimeOn(false)}>Pause</button>
        <button onClick={() => setTimeOn(true)}>start</button>
        <button onClick={() => setmilliseconds(0)}>Reset</button>
      </div>
    </div>
  )
}