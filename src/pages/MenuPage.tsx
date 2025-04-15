
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

const MenuPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="container-custom py-10">
          <h1 className="text-4xl font-bold text-center mb-2 font-playfair">Our Menu</h1>
          <p className="text-center text-gray-600 mb-10">Discover our delicious offerings</p>
          <Menu standalone={true} onOrderClick={(itemId) => navigate(`/food/${itemId}`)} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
