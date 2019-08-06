import React, { useEffect, useState } from 'react';
import './App.css';
import * as Observable from 'rxjs';

export const App = ({ animalKingdom$ }) => {
  const [ frame, setFrame ] = useState('');

  useEffect(() => {
    const subscription = Observable
      .zip(animalKingdom$, Observable.timer(2000, 2000))
      .subscribe(([animal,]) => setFrame(animal))

    return () => subscription.unsubscribe();
  }, [animalKingdom$]);

  return (
    <div className="App">
      <img src={frame} className="doggo" alt="doggo" />
    </div>
  );
}
