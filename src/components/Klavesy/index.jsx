import React, { useState, useEffect } from 'react';
import './style.css';
import './tony.js';

export const Klavesy = (props) => {
  const [nota, setNota] = useState('');

  useEffect(() => {
    console.log('start');
    window.addEventListener('keypress', keepPlay);

    return () => {
      console.log('stop');
      window.removeEventListener('keypress', keepPlay);
    };
  }, []);

  const playC1 = (e) => {
    new Audio('./assets/tony/c1.mp3').play();
    setNota('playC1');
  };
  const playD = () => {
    new Audio('./assets/tony/d.mp3').play();
    setNota('playD');
  };
  const playE = () => {
    new Audio('./assets/tony/e.mp3').play();
    setNota('playE');
  };
  const playF = () => {
    new Audio('./assets/tony/f.mp3').play();
    setNota('playF');
  };
  const playG = () => {
    new Audio('./assets/tony/g.mp3').play();
    setNota('playG');
  };
  const playA = () => {
    new Audio('./assets/tony/a.mp3').play();
    setNota('playA');
  };
  const playH = () => {
    new Audio('./assets/tony/h.mp3').play();
    setNota('playH');
  };
  const playC2 = () => {
    new Audio('./assets/tony/c2.mp3').play();
    setNota('playC2');
  };
  const playCis = () => {
    new Audio('./assets/tony/cis.mp3').play();
    setNota('playCis');
  };
  const playDis = () => {
    new Audio('./assets/tony/dis.mp3').play();
    setNota('playDis');
  };
  const playFis = () => {
    new Audio('./assets/tony/fis.mp3').play();
    setNota('playFis');
  };
  const playGis = () => {
    new Audio('./assets/tony/gis.mp3').play();
    setNota('playGis');
  };
  const playAis = () => {
    new Audio('./assets/tony/ais.mp3').play();
    setNota('playAis');
  };

  const keepPlay = (e) => {
    console.log(e.code);
    if (e.code === 'KeyS') {
      playC1();
    }
    if (e.code === 'KeyD') {
      playD();
    }
    if (e.code === 'KeyF') {
      playE();
    }
    if (e.code === 'KeyG') {
      playF();
    }
    if (e.code === 'KeyH') {
      playG();
    }
    if (e.code === 'KeyJ') {
      playA();
    }
    if (e.code === 'KeyK') {
      playH();
    }
    if (e.code === 'KeyL') {
      playC2();
    }
    if (e.code === 'KeyE') {
      playCis();
    }
    if (e.code === 'KeyR') {
      playDis();
    }
    if (e.code === 'KeyY') {
      playFis();
    }
    if (e.code === 'KeyU') {
      playGis();
    }
    if (e.code === 'KeyI') {
      playAis();
    }
  };

  return (
    <div className="klavesy">
      <button className="bila bila--c" onClick={playC1}></button>
      <button className="cerna cerna--cis" onClick={playCis}></button>
      <button className="bila bila--d" onClick={playD}></button>
      <button className="cerna cerna--dis" onClick={playDis}></button>
      <button className="bila bila--e" onClick={playE}></button>
      <button className="bila bila--f" onClick={playF}></button>
      <button className="cerna cerna--fis" onClick={playFis}></button>
      <button className="bila bila--g" onClick={playG}></button>
      <button className="cerna cerna--gis" onClick={playGis}></button>
      <button className="bila bila--a" onClick={playA}></button>
      <button className="cerna cerna--ais" onClick={playAis}></button>
      <button className="bila bila--h" onClick={playH}></button>
      <button className="bila bila--c2" onClick={playC2}></button>
    </div>
  );
};

// const handleKey = (e) => {
//   if (e.keyCode === 13) {
//     playC1();
//   }
// };

// onKeyPress={(e) => handler(e)}
