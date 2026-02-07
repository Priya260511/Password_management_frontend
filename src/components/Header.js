import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="14" width="24" height="14" rx="2" fill="currentColor"/>
          <path d="M10 14V10C10 7.24 12.24 5 15 5C17.76 5 20 7.24 20 10V14" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
        <h1>SecureVault</h1>
      </div>
      <p className="tagline">Your passwords, Secured</p>
    </header>
  );
}

export default Header;
