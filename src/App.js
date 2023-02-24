import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/home/Home'
import Items from './routes/items/Items'
import Orders from './routes/orders/Orders'
import Analytics from './routes/analytics/Analytics'
import Settings from './routes/settings/Settings'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App