import React from 'react';

const Navbar = ({ cartCount, setIsModalOpen }) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg">Fake Store</h1>
      <button onClick={() => setIsModalOpen(true)} className="text-white">
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
