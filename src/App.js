import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from './components/contexts/AuthContext'
import Login from './routes/login/Login'
import Signup from './routes/signup/Signup'
import Home from './routes/home/Home'
import Items from './routes/items/Items'
import Orders from './routes/orders/Orders'
import Procurement from './routes/procurement/Procurement'
import Analytics from './routes/analytics/Analytics'
import Settings from './routes/settings/Settings'
import AllLogs from './routes/logs/AllLogs'
import SingleOrder from './routes/orders/SingleOrder'
import Item from './routes/items/Item'
import Staffs from './routes/staffs/Staff'
import Vendors from './routes/vendors/Vendors'
import Reports from './routes/reports/Reports'
import Report from './routes/reports/Report'
import SingleProcurement from './routes/procurement/SingleProcurement'
import PrivateRoute from './routes/private/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/items'>
              <Route index element={<Items />} />
              <Route path=':itemid' element={<Item />} /> {/*A nested route!*/}
              <Route path='logs' element={<AllLogs />} /> {/*A nested route!*/}
            </Route>
            <Route path="/staffs" element={<Staffs />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path='/orders'>
              <Route index element={<Orders />} />
              <Route path=':orderid' element={<SingleOrder />} /> {/*A nested route!*/}
            </Route>
            <Route path='/procurement'>
              <Route index element={<Procurement />} />
              <Route path=':procurementid' element={<SingleProcurement />} /> {/*A nested route!*/}
            </Route>
            <Route path="/analytics" element={<Analytics />} />
            <Route path='/reports'>
              <Route index element={<Reports />} />
              <Route path=':reportid' element={<Report />} /> {/*A nested route!*/}
            </Route>
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App