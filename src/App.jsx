import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage'
import Connect  from './pages/connect'


function App() {

  return (
 
      <>
        <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
      </>
  )
}

export default App
