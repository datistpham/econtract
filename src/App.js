import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard'
import "./App.css"
import Header from './Component/Header/Header'
import Console from './Component/Console/Console'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/app/console/*" element={<Console />} />
      </Routes>
    </Router>
  )
}

export default App