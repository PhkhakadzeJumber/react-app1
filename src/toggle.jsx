import { useEffect, useState } from "react";

function toggle() {
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#333' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';
  }, [darkMode]);

  return (

    <button 
      onClick={() => setDarkMode(!darkMode)} 
      style={{ 
        padding: '10px 10px', 
        cursor: 'pointer', 
        backgroundColor: darkMode ? '#fff' : '#333', 
        color: darkMode ? '#000' : '#fff',
        border: 'none',
        borderRadius: '4px'
      }}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>

  );
}

export default toggle