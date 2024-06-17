import React from 'react';

const styles = {
  navbar: {
    height:'1440',
    width:'65',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  navbarLeft: {
    marginLeft: '60px',
    fontSize: '30px',
    fontWeight: '600',
  },
  navbarRight: {
    marginRight: '60px',
    
  },
  realtimeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    width: '126px',
    padding: '10px 20px',
    fontSize: '20px',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
    color: '#02B2AF',
    border: '2px solid #02B2AF',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    
  },
  realtimeButtonHover: {
    backgroundColor: '#02B2AF',
    color: '#ffffff',
  },
};

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.navbarLeft}>
        <span style={{color:"#02B2AF"}}>Dash</span><span style={{ color: "#2E96FF" }}>board</span>
      </div>
      <div style={styles.navbarRight}>
        <button
          style={styles.realtimeButton}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = styles.realtimeButtonHover.backgroundColor;
            e.currentTarget.style.color = styles.realtimeButtonHover.color;
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = styles.realtimeButton.backgroundColor;
            e.currentTarget.style.color = styles.realtimeButton.color;
          }}
        >
          Realtime
        </button>
      </div>
    </div>
  );
}

export default Navbar;
