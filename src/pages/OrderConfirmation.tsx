
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, orderTime, orderNumber } = location.state || {};
  
  if (!item) {
    return (
      <>
        <Navbar />
        <div className="container-custom min-h-[60vh] py-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Order not found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-20">
        <div className="container-custom py-10">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
              <p className="text-gray-600">Your order has been placed successfully.</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 border-b pb-2">Order Details</h3>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Date & Time:</span>
                <span className="font-medium">{orderTime}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 border-b pb-2">Item</h3>
              <div className="flex gap-4 py-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-primary font-medium mt-1">{item.price}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-b py-4 mb-6">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg text-primary">{item.price}</span>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Your food is being prepared and will be ready shortly. 
                For any assistance, please contact us.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/')}
                  variant="outline"
                >
                  Back to Home
                </Button>
                <Button onClick={() => navigate('/menu')}>
                  Order More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmation;
