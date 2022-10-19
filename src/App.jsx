import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CardGrid />
    </div>
  );
}

export default App;
