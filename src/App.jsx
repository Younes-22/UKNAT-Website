import React from 'react';
// 1. Import the Outlet component
import { Outlet } from 'react-router-dom';

// 2. Import your persistent components like Nav and Footer
import Nav from './components/Nav';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <>
    <div className="App">
      {/* Nav will now appear on every page */}
      <Nav />

      {/* This is the placeholder for your page content */}
      <main>
        {/* 3. The Outlet will render <Home />, <About />, etc. based on the URL */}
        <Outlet />
      </main>
    </div>
    <Footer />
    </>
  );
  
}

export default App;