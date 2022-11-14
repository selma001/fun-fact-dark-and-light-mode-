import Main from './component/main';
import NavBar from './component/navbar';
import React, { useState } from 'react';

function App() {

  const [darkMode,setDarkMode] = useState(true)
  function toggleDarkMode() {
  setDarkMode(prevMode => !prevMode)
  }
  
  return (
    <div className="container">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode}
      />
    </div>
  );
}

export default App;
