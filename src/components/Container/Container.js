import React, { useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navbar/Navbar';

import projectData from '../../projectData'

import Resume from '../pages/Resume';
import About from '../pages/About/About';
import Portfolio from "../pages/Portfolio"
import Contact from '../pages/Contact/Contact';

import "./Container.css";

export default function Container() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio data={projectData}/>;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="bg-dark text-white content">
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}