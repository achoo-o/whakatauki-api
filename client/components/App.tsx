import { useWhakatauki } from '../hooks/useWhakatauki.ts'


function App() {
  const { data } = useWhakatauki()
  //Temporary error fix | Find proper handling
  if (!data) return null

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate</h1>
        {data.map((obj) => <p key={obj.id}>{obj.text}</p>)}
      </div>
    </>
  )
}

export default App
