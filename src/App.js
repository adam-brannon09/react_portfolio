import React, { useState } from 'react';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';
import Project from './components/project';





function App() {
// Logic
  const [currentPage, setCurrentPage] = useState('About');
  function setPage() {
    if (currentPage === 'About') {
      return <About />;
    } else if (currentPage === 'Project') {
      return <Project />;
    } else if (currentPage === 'Contact') {
      return <Contact />;
    }
  }
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {setPage()}
      <Footer/>
    </div>
  );
}

export default App;
