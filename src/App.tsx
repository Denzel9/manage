import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App
