import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolsAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, symbolsAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(( ) => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, symbolsAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-2xl shadow-cyan-500/30 rounded-xl px-6 py-5 my-8 text-orange-400 bg-gray-700">
        <h1 className="text-white text-center m-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full bg-white text-black outline-none py-2 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 hover:bg-gray-500 hover:shadow-xl  active:bg-grey-500 active:scale-95 transition-all duration-300 text-white px-3 py-0.5 shrink-0 rounded-md">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />

            <label>Length: {length}</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prer) => !prer);
            }} />
            <label htmlFor="numberInput">Numbers</label>

            <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={symbolsAllowed}
            id="symbolsInput"
            onChange={() => {
              setSymbolsAllowed((prer) => !prer);
            }} />
            <label htmlFor="symbolsInput">Symbols</label>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
