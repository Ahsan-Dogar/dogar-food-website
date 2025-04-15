
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the selected menu item based on the ID
  const menuItems = [
    {
      id: 1,
      name: 'Classic Burger',
      description: 'Juicy beef patty with lettuce, tomato, cheese, and our special sauce',
      price: '₨550',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop',
      details: 'Our signature burger features a 150g premium beef patty, locally sourced vegetables, and homemade special sauce. Served with a side of fresh garden salad.',
      ingredients: ['Premium beef patty', 'Fresh lettuce', 'Sliced tomatoes', 'Cheese', 'Special sauce', 'Sesame seed bun']
    },
    {
      id: 2,
      name: 'Chicken Biryani',
      description: 'Fragrant basmati rice cooked with tender chicken pieces and aromatic spices',
      price: '₨650',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop',
      details: 'Our Chicken Biryani is prepared using a traditional recipe with authentic spices. Each portion is slow-cooked to perfection to bring out the rich flavors.',
      ingredients: ['Basmati rice', 'Chicken pieces', 'Saffron', 'Mixed spices', 'Fried onions', 'Fresh mint']
    },
    {
      id: 3,
      name: 'Vegetable Pasta',
      description: 'Al dente pasta tossed with fresh seasonal vegetables and creamy sauce',
      price: '₨450',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop',
      details: 'Our vegetable pasta features imported Italian pasta cooked al dente and tossed with a selection of seasonal vegetables in a creamy white sauce.',
      ingredients: ['Italian pasta', 'Bell peppers', 'Zucchini', 'Cherry tomatoes', 'Creamy sauce', 'Parmesan cheese']
    },
    {
      id: 4,
      name: 'Crispy Chips',
      description: 'Golden crispy thick-cut chips seasoned with our special blend of herbs and spices',
      price: '₨250',
      image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=1974&auto=format&fit=crop',
      details: 'Our signature thick-cut chips are made from premium potatoes, twice fried for extra crispiness, and seasoned with our special herb blend.',
      ingredients: ['Premium potatoes', 'Special herb seasoning', 'Sea salt', 'Vegetable oil']
    },
    {
      id: 5,
      name: 'Grilled Steak',
      description: 'Premium cut steak grilled to perfection, served with mashed potatoes',
      price: '₨1200',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1931&auto=format&fit=crop',
      details: 'Our premium steak is aged for 21 days and grilled to your preference. Served with creamy mashed potatoes and seasonal vegetables.',
      ingredients: ['Premium aged beef', 'Fresh herbs', 'Black pepper', 'Sea salt', 'Garlic butter']
    },
    {
      id: 6,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with velvety ganache and fresh berries',
      price: '₨350',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop',
      details: 'Our chocolate cake is made with premium cocoa and topped with a rich chocolate ganache. Each slice is garnished with seasonal fresh berries.',
      ingredients: ['Premium cocoa', 'Dark chocolate', 'Fresh cream', 'Seasonal berries', 'Powdered sugar']
    },
  ];
  
  const selectedItem = menuItems.find(item => item.id === Number(id));
  
  if (!selectedItem) {
    return (
      <>
        <Navbar />
        <div className="container-custom min-h-[60vh] py-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Food item not found</h2>
          <Button onClick={() => navigate('/menu')}>Back to Menu</Button>
        </div>
        <Footer />
      </>
    );
  }

  const handleOrder = () => {
    toast({
      title: "Order Placed!",
      description: `Your ${selectedItem.name} has been added to your order. Total: ${selectedItem.price}`,
    });
    
    // Simulate order processing
    setTimeout(() => {
      navigate('/order-confirmation', { 
        state: { 
          item: selectedItem,
          orderTime: new Date().toLocaleString(),
          orderNumber: Math.floor(Math.random() * 10000)
        } 
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="py-20 min-h-screen">
        <div className="container-custom py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                className="w-full h-[300px] object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-2 font-playfair">{selectedItem.name}</h1>
              <p className="text-primary text-xl font-medium mb-4">{selectedItem.price}</p>
              <p className="mb-4 text-foreground/80">{selectedItem.description}</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">About this dish</h3>
                <p className="text-foreground/80">{selectedItem.details}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                <ul className="list-disc pl-5">
                  {selectedItem.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-foreground/80 mb-1">{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <Button 
                onClick={handleOrder}
                className="px-6 py-2 bg-primary text-white rounded-full text-base"
              >
                Order Now - {selectedItem.price}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodDetail;
