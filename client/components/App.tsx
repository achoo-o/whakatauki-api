import { useWhakatauki } from '../hooks/useWhakatauki.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import Documentation from './Documentation.tsx'

function App() {
  const { isPending, isError, error } = useWhakatauki()
  
  if (isPending) {
    return <LoadingIndicator />
  }

  if (isError) {
    return <p>An error has occured: {error.message}</p>
  }

  return (
    <div className="font-montserrat m-20 leading-8">
      <h1 className="text-4xl text-gray-950 mb-1">Whakataukī API</h1>
      <Documentation />
    </div>
  )
}

export default App
