import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const MinimalApp = () => {
  return (
    <div style={{ 
      background: 'black', 
      color: 'gold', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      fontFamily: 'Arial'
    }}>
      Lexus Navigation - Working!
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MinimalApp />
  </React.StrictMode>
);