// import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='h-screen'>
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
