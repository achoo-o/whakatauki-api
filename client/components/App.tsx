import { useWhakatauki } from '../hooks/useWhakatauki.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import Documentation from './Documentation.tsx'
import Nav from './Nav.tsx'

function App() {
  const { isPending, isError, error } = useWhakatauki()
  
  if (isPending) {
    return <LoadingIndicator />
  }

  if (isError) {
    return <p>An error has occured: {error.message}</p>
  }

  return (
    <div className="lg:flex font-montserrat leading-8">
      <Nav />
      <Documentation />
    </div>
  )
}

export default App
