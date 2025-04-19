import React, { useState } from 'react';
import ProfileCard from './components/profile_card';
import CounterApp from './components/CounterApp';
import SignupForm from './components/SignupForm';
function App() {
  // Step 1: Create a state to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Step 2: Function to toggle dark mode
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // Step 3: Apply conditional class names based on darkMode state
    <div className={`w-screen h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} flex flex-col items-center justify-center`}>
      
      {/* Step 4: Add the Toggle Button */}
      <button 
        onClick={changeMode}
        className="mb-6 px-4 py-2 rounded bg-blue-600 text-black hover:bg-blue-700 transition"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      {/* Profile and Counter Components */}
      <div className="flex flex-wrap justify-center items-center gap-6 px-6">
        <ProfileCard />
        <CounterApp title="ihirwe irene" />
        <CounterApp title="IMANIRAHARI Didier" initialValue={7} />
        <SignupForm/>
        {/* <CounterApp title="Downloads Counter" initialValue={0} /> */}
      </div>
    </div>
  );
}

export default App;

