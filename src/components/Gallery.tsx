
import React from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    alt: 'Delicious dish with fresh ingredients'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=2070&auto=format&fit=crop',
    alt: 'Elegant plated dish'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop',
    alt: 'Colorful food presentation'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1564759224907-65b945ff0e84?q=80&w=1974&auto=format&fit=crop',
    alt: 'Restaurant interior'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    alt: 'Elegant dining area'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop',
    alt: 'Dessert dish close-up'
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title reveal">Our Gallery</h2>
        <p className="section-subtitle reveal delay-200">Feast your eyes on our culinary creations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`overflow-hidden rounded-lg shadow-md reveal ${
                index % 3 === 0 ? '' : index % 3 === 1 ? 'delay-200' : 'delay-400'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
