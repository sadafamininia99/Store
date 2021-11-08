import { Route, Routes } from 'react-router-dom'
import Products from './views/Proeducts'

function App() {
  return (
    <Routes>
      <Route component={Products} path="/" />
    </Routes>
  )
}

export default App
