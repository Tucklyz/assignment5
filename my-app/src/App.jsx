import React, { useEffect } from 'react';
import './App.css';
import catGif from './assets/cat.gif';
import sound from './assets/sound.mp3';

function App() {
  useEffect(() => {
    const audio = new Audio(sound);
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="app-container">
      <div className="card">
        <img src={catGif} alt="Cat" className="cat-gif" />
        <h1>🚀 Assignment 5</h1>
        <p className="subtitle">
          Firebase Auto Deployment with Jenkins Pipeline
        </p>
        <div className="submitted">
          <p className="label">Submitted by:</p>
          <p>Chanyanat Sodsri — B6508852</p>
          <p>Kamonchanok Thonnondang — B6526405</p>
        </div>
      </div>
    </div>
  );
}

export default App;
