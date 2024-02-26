import React, { useState, useEffect, useRef } from 'react';
import Car from './assets/Car.gif';
import './Controller.css'; // Make sure to create a CSS file for styling

function Controller({isMenu}) {
  const imageRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const keyState = {
    w: false,
    a: false,
    s: false,
    d: false,
  };

  const updateKeyState = (key, value) => {
    keyState[key] = value;
  };

  const handleKeyPress = (e) => {
    const step = 10;
    const scrollFactor = 5;

    const isMoving = Object.values(keyState).some((value) => value);

    switch (e.key) {
      case 'w':
        updateKeyState('w', true);
        break;
      case 'a':
        updateKeyState('a', true);
        break;
      case 's':
        updateKeyState('s', true);
        break;
      case 'd':
        updateKeyState('d', true);
        break;
      default:
        break;
    }

    if (isMoving) {
      let dx = 0;
      let dy = 0;

      if (keyState.w) dy -= step;
      if (keyState.a) dx -= step;
      if (keyState.s) dy += step;
      if (keyState.d) dx += step;

      const newPosition = {
        x: position.x + dx,
        y: position.y + dy,
      };

      if (
        newPosition.x >= 0 &&
        newPosition.y >= 0 &&
        newPosition.x + step <= window.innerWidth-(window.devicePixelRatio/2)*imageRef.current.offsetWidth &&
        newPosition.y + step <= 2*(window.innerHeight-(window.devicePixelRatio/2)*imageRef.current.offsetHeight)
      ) {
        setPosition(newPosition);
        window.scrollBy({ top: dy * scrollFactor, left: dx * scrollFactor, behavior: 'smooth' });
      }
    }
  };

  const handleKeyRelease = (e) => {
    switch (e.key) {
      case 'w':
        updateKeyState('w', false);
        break;
      case 'a':
        updateKeyState('a', false);
        break;
      case 's':
        updateKeyState('s', false);
        break;
      case 'd':
        updateKeyState('d', false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setPosition({ x: window.innerWidth/2-imageRef.current.offsetWidth/2, 
                  y: window.innerHeight-window.innerHeight/(window.devicePixelRatio/0.5) });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, [position]);


  return (
    <img
      ref={imageRef}
      src={Car}
      alt="car"
      className="car"
      style={isMenu ? { transform: `translateX(45vw)` } : { transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
}

export default Controller;
