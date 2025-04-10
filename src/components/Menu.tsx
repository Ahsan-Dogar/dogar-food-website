
import React from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, cheese, and our special sauce',
    price: '₨550',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken pieces and aromatic spices',
    price: '₨650',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Vegetable Pasta',
    description: 'Al dente pasta tossed with fresh seasonal vegetables and creamy sauce',
    price: '₨450',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Grilled Steak',
    description: 'Premium cut steak grilled to perfection, served with mashed potatoes',
    price: '₨1200',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1931&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Fish & Chips',
    description: 'Crispy battered fish with golden fries and tartar sauce',
    price: '₨750',
    image: 'https://images.unsplash.com/photo-1579208030886-b937da9925dc?q=80&w=1935&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with velvety ganache and fresh berries',
    price: '₨350',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop'
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container-custom">
        <h2 className="section-title reveal">Our Menu</h2>
        <p className="section-subtitle reveal delay-200">Discover our delicious offerings</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`menu-card reveal ${index % 3 === 0 ? '' : index % 3 === 1 ? 'delay-200' : 'delay-400'}`}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="menu-img"
              />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="menu-price">{item.price}</span>
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <a href="#" className="btn-primary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
