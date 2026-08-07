import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="flex justify-center items-center h-screen">

    <h1 className="bg-amber-600">Currency Convertor</h1>
    </div>
    </>
  )
}

export default App
