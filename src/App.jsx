import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Routes from './routes/index.jsx'
import Header from './Shared/Header.jsx'
import Footer from './Shared/Footer.jsx'

function App() {
  return (
    <Router>
      <Header />
      <div className='mt-10 md:mt-32'>
        <Routes />
      </div>
      <Footer />
    </Router>
  )
}

export default App
