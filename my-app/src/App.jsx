import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`full-screen ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="app-container">
        <div className="max-w-2xl w-full px-4">
          <header className="header">
            <h1 className="title">Assignment 5</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`toggle-btn ${darkMode ? 'dark-btn' : 'light-btn'}`}
            >
              {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
          </header>

          <section className={`section ${darkMode ? 'dark-section' : 'light-section'}`}>
            <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
            <div className="counter-controls">
              <button
                onClick={() => setCount(count - 1)}
                className="counter-btn btn-decrement"
              >
                -
              </button>
              <span className="counter-value">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="counter-btn btn-increment"
              >
                +
              </button>
            </div>
          </section>

          <section className={`section ${darkMode ? 'dark-section' : 'light-section'}`}>
            <h2 className="text-xl font-semibold mb-4">PowerPuff Member</h2>
            <div className="flex mb-4">
              B6509293 Parichat Sujarit
            </div>
            <div className="flex mb-4">
              B6515652 Nadthapat Phuttaruksa
            </div>
          </section>

          <footer className="footer">
            <p>Deploy บน Firebase</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
