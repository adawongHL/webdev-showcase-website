import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={textStyle}>Team Ada</h1>
    </header>
  );
}

const headerStyle = {
    backgroundColor: '#17181d',
    color: '#fff',
    textAlign: 'left',
    padding: '10px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
  };

const textStyle = {
    margin: '0', // Remove any default margin
    padding: '50', // Remove any default padding
    marginLeft: '20px', // Adjust as needed to position the text
}

export default Header;
