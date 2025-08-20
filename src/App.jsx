import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage'
import Connect  from './pages/connect'
import Meta from "./pages/Meta"


function App() {

  return (
 
      <>
        <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/Meta" element={<Meta />} />
      </Routes>
    </Router>
      </>
  )
}

export default App
