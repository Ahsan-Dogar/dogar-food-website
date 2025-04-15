
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title reveal">About Dogar Food</h2>
        <p className="section-subtitle reveal delay-200">Our story of passion and flavor</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal delay-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-primary font-playfair text-xl">Serving Since 2024</p>
              </div>
            </div>
          </div>
          
          <div className="reveal delay-400">
            <h3 className="text-3xl font-bold font-playfair mb-6">A Culinary Journey</h3>
            <p className="text-foreground/80 mb-6">
              At Dogar Food, we believe that a great meal has the power to bring people together. Our restaurant was founded with a simple mission: to create delicious, authentic food that celebrates the rich flavors and traditions of our heritage.
            </p>
            <p className="text-foreground/80 mb-6">
              Our team of talented chefs brings together years of culinary expertise, crafting each dish with passion and precision. We source only the freshest ingredients from local suppliers, ensuring that every bite is a testament to quality and care.
            </p>
            <p className="text-foreground/80 mb-6">
              Whether you're joining us for a casual lunch, an intimate dinner, or a special celebration, we're committed to providing an unforgettable dining experience that delights all your senses.
            </p>
            
            <div className="flex items-center space-x-4 mt-8">
              <div className="w-16 h-1 bg-primary"></div>
              <p className="text-primary font-medium">Experience the difference</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-md text-center reveal">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"></path>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M13.4 10.6 19 5"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 font-playfair">Fast Service</h4>
            <p className="text-foreground/70">Quick service without compromising quality</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center reveal delay-200">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 2H2v10h10V2z"></path>
                <path d="M22 2h-5v5h5V2z"></path>
                <path d="M22 12h-5v10h5V12z"></path>
                <path d="M12 12H2v10h10V12z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 font-playfair">Fresh Ingredients</h4>
            <p className="text-foreground/70">Locally sourced, high-quality ingredients</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center reveal delay-400">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 3c.53 0 1.039.211 1.414.586l7 7a2 2 0 0 1 0 2.828l-7 7a2 2 0 0 1-2.828 0l-7-7a2 2 0 0 1 0-2.828l7-7A1.99 1.99 0 0 1 12 3z"></path>
                <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 font-playfair">Unique Recipes</h4>
            <p className="text-foreground/70">Signature dishes with special flavors</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center reveal delay-600">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 font-playfair">Made with Love</h4>
            <p className="text-foreground/70">Prepared with passion and dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
