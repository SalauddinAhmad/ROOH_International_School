import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import CampusLife from './pages/CampusLife';
import NewsBlog from './pages/NewsBlog';
import ArticleView from './pages/ArticleView';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { useEffect } from 'react';

// Component to scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AdminProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTopOnRouteChange />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/news" element={<NewsBlog />} />
              <Route path="/article/:id" element={<ArticleView />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </AdminProvider>
  );
}

export default App;