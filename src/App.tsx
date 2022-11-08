import { useState } from "react"
import reactLogo from "./assets/react.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-96 flex flex-col items-center justify-around text-center">
      <div className="flex items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="/vite.svg"
            className="h-24 m-8 hover:drop-shadow-[0_0_35px_rgba(174,72,251,0.7)]"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="h-24 m-8 hover:drop-shadow-[0_0_35px_rgba(76,217,254,0.7)]"
            alt="React logo"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img
            src="/tailwindcss.svg"
            className="h-24 w-24 m-6 hover:drop-shadow-[0_0_35px_rgba(84,190,246,0.7)]"
            alt="TailwindCSS logo"
          />
        </a>
      </div>
      <h1>Vite + React + TailwindCSS</h1>
      <div className="p-12 mx-auto flex flex-col m-4">
        <button className="m-6" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">
        Click on the Vite, React or TailwindCSS logos to learn more
      </p>
    </div>
  )
}

export default App
