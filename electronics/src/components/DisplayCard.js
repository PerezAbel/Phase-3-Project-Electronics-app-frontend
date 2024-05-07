import React from 'react';

function App() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const columnStyle = {
    flex: '1 1 calc(50% - 20px)', // 50% width with 20px gap
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
  };

  const textBlockStyle = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'black',
    color: 'white',
    padding: '0 20px',
    zIndex: '1', // Ensure text block appears above image
  };

  return (
    <div className="container" style={containerStyle}>
      <div style={columnStyle}>
        <img src="https://media.wired.com/photos/5bc67212a8af293117556237/master/pass/razerblade.jpg" alt="Norway" style={imageStyle} />
        <div className="text-block" style={textBlockStyle}>
          <h4>Upto 30% off</h4>
          <p>Selected Smartphone Brands</p>
        </div>
      </div>
      <div style={columnStyle}>
        <img src="https://cdn.accentuate.io/561524080832/1626300416456/kd-headphones-1.jpeg?v=0" alt="Norway" style={imageStyle} />
        <div className="text-block" style={textBlockStyle}>
          <h4>Take Your Sound Anywhere</h4>
          <p>Top Hedaphone Brands</p>
        </div>
      </div>
    </div>
  );
}

export default App;
