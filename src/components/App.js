import React, { useEffect, useState } from 'react';
import doggo from '../assets/doggo.jpg'
import './App.css';
import { useFrames } from '../hooks/useFrames';
import { doggo$ } from '../sources/giphy';

export const App = () => {
  const { frame, forward, append } = useFrames();

  useEffect(() => {
    doggo$.subscribe(doggo => append(doggo));
  }, [doggo$]);

  useEffect(() => {
    setTimeout(() => forward(), 2000);
  }, [frame])

  return (
    <div className="App">
      <img src={frame} className="App-logo" alt="logo" />
    </div>
  );
}
