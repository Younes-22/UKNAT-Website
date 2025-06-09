import './css/App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <Home />;
    <Footer />
    </Router>
  )
}

export default App
