import React from 'react'
import ProfileCard from './components/profile_card'
import CounterApp from './components/CounterApp';

function App() {


  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center gap-6 px-6">
        <ProfileCard />
        <CounterApp title="Views Counter" initialValue={5} />
        <CounterApp title="Downloads Counter" initialValue={0} />
        {/* add more counters as needed */}
      </div>
    </div>
  );
}

export default App
