import React from 'react';
import '../styles/ResultHistory.css';

const ResultHistory = ({ apiList }) => {
  return (
    <aside className='result-history-container'>
      <header className='result-history-header'>Historique</header>
      <main className='result-history-timeline-container'>
        {apiList.map((film) => film.title)}
      </main>
    </aside>
  );
};

export default ResultHistory;
