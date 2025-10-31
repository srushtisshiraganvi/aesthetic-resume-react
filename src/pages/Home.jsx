import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="home-container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>AestheticResume</h1>
        <button
          onClick={() => setIsDarkMode(prev => !prev)}
          className="theme-toggle-btn"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <p>
        Create stylish, animated resumes effortlessly. Choose from beautiful templates, animate your journey, and export it as a PDF or share a link.
      </p>
      <button className="start-btn" onClick={() => navigate('/create')}>
        Start Creating →
      </button>

      <Outlet />
    </div>
  );
};

export default Home;
