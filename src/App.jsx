import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import MobileStickyCTA from './components/MobileStickyCTA';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Home5 from './pages/Home5';
import About from './pages/About';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Loader />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/home-3" element={<Home3 />} />
          <Route path="/home-4" element={<Home4 />} />
          <Route path="/home-5" element={<Home5 />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
        <BackToTop />
        <MobileStickyCTA />
      </div>
    </Router>
  );
}

export default App;
