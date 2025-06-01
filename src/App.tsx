import { useState } from 'react'
import './App.css'

interface FortuneCardProps {
  number: number;
}

const FortuneCard = ({ number }: FortuneCardProps) => {
  return (
    <div className="fortune-card">
      <span className="card-text">운세카드 {number}</span>
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <div className="view">
        <nav className="navigation-bar">
          <span className="nav-text">네비게이션 바</span>
        </nav>
        <main className="body">
          <div className="cards-grid">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <FortuneCard key={number} number={number} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
