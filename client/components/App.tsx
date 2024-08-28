import { useWhakatauki } from '../hooks/useWhakatauki.ts'
import Documentation from './Documentation.tsx'


function App() {
  const { data } = useWhakatauki()
  //Temporary error fix | Find proper handling
  if (!data) return null

  return (
    <>
      <div className="app">
        <h1>Whakataukī API</h1>
        <Documentation />
      </div>
    </>
  )
}

export default App
