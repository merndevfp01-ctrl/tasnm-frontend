import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import './App.css'
import Routes from './routes/siteRoutes.jsx'
import AdminRoutes from './routes/AdminRoutes.jsx'

function App() {
  return (
    <Router>
      <AdminRoutes/>
      <div className='mt-10 md:mt-32'>
        <Routes />
      </div>
      
    </Router>
  )
}

export default App
