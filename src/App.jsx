import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import './App.css'
import Routes from './routes/siteRoutes.jsx'
import AdminRoutes from './routes/AdminRoutes.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <AdminRoutes/>
      <div className='mt-10 md:mt-26'>
        <Routes />
      </div>
      <ToastContainer /> 
    </Router>
  )
}

export default App
