import React, { useState } from 'react';

// Reusable Counter component
// Props: title (string), initialValue (number)
const Counter = ({ title, initialValue = 0 }) => {
  // React state hook to store the count
  const [count, setCount] = useState(initialValue);

  // Increase the count by 1
  const increase = () => setCount(count + 1);

  // Decrease the count by 1
  const decrease = () => setCount(count - 1);

  // Reset count back to the initial value
  const reset = () => setCount(initialValue);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center w-64">
      {/* Title of the counter passed as a prop */}
      <h2 className="text-xl text-black font-semibold  font-bold mb-2">{title}</h2>

      {/* Display the current count */}
      <p className="text-3xl font-semibold text-blue-600 mb-4">{count}</p>

      {/* Control buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={decrease}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          -
        </button>

        <button
          onClick={reset}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Reset
        </button>

        <button
          onClick={increase}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
