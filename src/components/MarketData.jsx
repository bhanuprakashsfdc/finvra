// src/components/MarketData.jsx
import React from 'react';

const MarketData = () => {
  const data = [
    { id: 1, name: 'NASDAQ', value: '13,500', change: '+1.23%' },
    { id: 2, name: 'S&P 500', value: '4,200', change: '-0.56%' },
    { id: 3, name: 'Dow Jones', value: '34,000', change: '+0.78%' },
  ];

  return (
    <section className="market-data">
      <h2>Market Data</h2>
      <div className="market-cards">
        {data.map(item => (
          <div key={item.id} className="market-card">
            <h3>{item.name}</h3>
            <p>{item.value}</p>
            <p>{item.change}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketData;
