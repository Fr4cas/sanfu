import { Routes, Route, Navigate } from "react-router-dom";

import './styles/globals.css'
import HomePage from './pages/HomePage.jsx'
import AddPage from './pages/AddPage.jsx'
import ViewPage from './pages/ViewPage.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/view" element={<ViewPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
