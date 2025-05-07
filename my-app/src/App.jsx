import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-2xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Assignment 5</h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        <section className={`p-6 mb-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              -
            </button>
            <span className="text-2xl font-bold">{count}</span>
            <button 
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              +
            </button>
          </div>
        </section>

        <section className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold mb-4">PowerPuff</h2>
          
          <div className="flex mb-4">
            B6509293 Parichat Sujarit
          </div>

          <div className="flex mb-4">
            B6515652 Nadthapat Phuttaruksa
          </div>

        </section>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>Deploy บน Firebase</p>
        </footer>
      </div>
    </div>
  );
}