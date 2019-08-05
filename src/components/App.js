import React, { useEffect, useState } from 'react';
import doggo from '../assets/doggo.jpg'
import './App.css';
import { useFrames } from '../hooks/useFrames';
import { doggo$ } from '../sources/giphy';

export const App = () => {
  const { frame, forward, backward, append } = useFrames();

  useEffect(() => {
    doggo$.subscribe(doggo => append(doggo));
  }, [doggo$]);

  useEffect(() => {
    console.log(frame);
  }, [frame]);

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === 'ArrowLeft') backward();
      else if (e.key === 'ArrowRight') forward();
      // else append(e.key);
    }
  }, [forward, backward]);

  return (
    <div className="App">
      <img src={frame} className="App-logo" alt="logo" />
    </div>
  );
}
