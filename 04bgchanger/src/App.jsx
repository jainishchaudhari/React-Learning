import { useState } from "react";



function App() {
  const [Color, setColor] = useState("#020617")

  return (
    <div className="w-full h-screen bg-slate-950 overflow-hidden"
    style={{backgroundColor: Color, margin: 0 }}
    >
      <div className="fixed flex flex-wrap justify-start  bottom-12 inset-x-0 px-2">
        <div className="flex flex-col justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">


          <button
          onClick={() => setColor("SlateBlue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "SlateBlue"}}
          >SlateBlue
          </button>


          <button
           onClick={() => setColor("MidnightBlue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "MidnightBlue"}}
          >MidnightBlue
          </button>


          <button
           onClick={() => setColor("RoyalBlue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "RoyalBlue"}}
          >RoyalBlue
          </button>


          <button
           onClick={() => setColor("Crimson")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Crimson"}}
          >Crimson
          </button>


          <button
           onClick={() => setColor("FireBrick")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "FireBrick"}}
          >FireBrick
          </button>


          <button
           onClick={() => setColor("ForestGreen")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "ForestGreen"}}
          >ForestGreen
          </button>


          <button
           onClick={() => setColor("Teal")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Teal"}}
          >Teal
          </button>


          <button
           onClick={() => setColor("Chocolate")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Chocolate"}}
          >Chocolate
          </button>


          <button
           onClick={() => setColor("DarkSlateGray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "DarkSlateGray"}}
          >DarkSlateGray
          </button>

        </div>
      </div>

    </div>
  )
}

export default App
