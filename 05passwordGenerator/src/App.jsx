import { useState } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)

  return (
    <>
      <h1 className="text-4xl text-center" >password genretor</h1>
    </>
  )
}

export default App
