import React from 'react';

const ProfileCard = () => {
    // we create user oble which will be used to display user information
  const user = {
    name: 'GANZA Eric Andrew',
    title: 'Frontend Developer',
    avatar: 'https://img.freepik.com/premium-photo/3d-cartoon-character-young-black-man-with-dreadlocks-sunglasses-gold-chain_605905-126815.jpg?w=826',
    description: 'Passionate about building clean, modern React applications.',
    email: 'ganza@example.com',
    location: 'Kigali, Rwanda',
  };
    // we created an allow functions to trigger when the profile card is clicked
  const handleClick = () => {
    alert(`You clicked on ${user.name}'s profile`);
  };
   // we return the profile card component
  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl shadow-md p-6 text-center w-64 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <h4 className="text-sm text-gray-500 mb-1">{user.title}</h4>
      <p className="text-sm text-gray-700">{user.description}</p>
      <p className="text-xs text-gray-400 mt-2">{user.email}</p>
      <p className="text-xs text-gray-400">{user.location}</p>
    </div>
  );
};

export default ProfileCard;
