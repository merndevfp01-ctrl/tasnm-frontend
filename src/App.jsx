import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import './App.css'
import Routes from './routes/index.jsx'
import Header from './Shared/Header.jsx'
import Footer from './Shared/Footer.jsx'

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/login";
  return (
    <>
      {!hideNavbarAndFooter && <Header />}
      <div className='mt-10 md:mt-32'>
        <Routes />
      </div>
      {!hideNavbarAndFooter && <Footer />}
    </>
  )
}

export default App
