import { useWhakatauki } from '../hooks/useWhakatauki.ts'

function App() {
  const { data } = useWhakatauki()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate</h1>
        {data}
      </div>
    </>
  )
}

export default App
