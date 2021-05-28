import React, { useState, useEffect } from 'react';
import './style.css';
import './tony.js';

export const Klavesy = (props) => {
  const audio = new Audio('./assets/tony/C1.mp3');
  const playSound = () => {
    audio.play();
  };

  const audio2 = new Audio('./assets/tony/d.mp3');
  const playSound2 = () => {
    audio2.play();
  };

  const audio3 = new Audio('./assets/tony/e.mp3');
  const playSound3 = () => {
    audio3.play();
  };

  const audio4 = new Audio('./assets/tony/f.mp3');
  const playSound4 = () => {
    audio4.play();
  };

  const audio5 = new Audio('./assets/tony/g.mp3');
  const playSound5 = () => {
    audio5.play();
  };

  return (
    <div className="klavesy">
      <button className="bila bila--c" onClick={playSound}></button>
      <button className="cerna cerna--cis"></button>
      <button className="bila bila--d" onClick={playSound2}></button>
      <button className="cerna cerna--dis"></button>
      <button className="bila bila--e" onClick={playSound3}></button>
      <button className="bila bila--f" onClick={playSound4}></button>
      <button className="cerna cerna--fis"></button>
      <button className="bila bila--g" onClick={playSound5}></button>
      <button className="cerna cerna--gis"></button>
      <button className="bila bila--a"></button>
      <button className="cerna cerna--ais"></button>
      <button className="bila bila--h"></button>
      <button className="bila bila--c2"></button>
    </div>
  );
};