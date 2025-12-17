import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-100 font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductPage />} />
            {/* Add more routes here if needed, e.g., for other product pages or categories */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
