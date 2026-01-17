import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState('Loading...')
  const [error, setError] = useState(null)

  const fetchTime = async () => {
    try {
      const response = await fetch('/time')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setCurrentTime(data.time)
      setError(null)
    } catch (err) {
      setError('Failed to fetch time from backend.')
      console.error(err)
    }
  }

  useEffect(() => {
    fetchTime()
  }, [])

  return (
    <div className="App">
      <h1>Current Time from Backend</h1>
      <div className="card">
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p>The current time is: <strong>{currentTime}</strong></p>
        )}
        <button onClick={fetchTime}>
          Refresh Time
        </button>
      </div>
    </div>
  )
}

export default App