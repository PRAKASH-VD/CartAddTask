import React, { useState } from 'react';
import ProductList from './component/ProductList';
import Navbar from './component/Navbar';
import CartModal from './component/CartModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} setIsModalOpen={setIsModalOpen} />
      <ProductList addToCart={addToCart} />
      {isModalOpen && (
        <CartModal cart={cart} removeFromCart={removeFromCart} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default App;
