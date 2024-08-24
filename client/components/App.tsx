import { useFruits } from '../hooks/useFruits.ts'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate</h1>
      </div>
    </>
  )
}

export default App
