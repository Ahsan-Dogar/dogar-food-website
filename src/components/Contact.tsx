
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <h2 className="section-title reveal">Contact Us</h2>
        <p className="section-subtitle reveal delay-200">We'd love to hear from you</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="reveal delay-300">
            <h3 className="text-2xl font-bold mb-6 font-playfair">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-foreground/70">Feel free to call us anytime</p>
                  <a 
                    href="tel:03091489487" 
                    className="text-primary hover:underline block mt-1"
                  >
                    03091489487
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-foreground/70">Send us your queries anytime</p>
                  <a 
                    href="mailto:dogarahsan160@gmail.com" 
                    className="text-primary hover:underline block mt-1"
                  >
                    dogarahsan160@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-foreground/70">Visit our restaurant</p>
                  <address className="not-italic text-foreground mt-1">
                    123 Main Street, City Name
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="reveal delay-400">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 font-playfair">Send a Message</h3>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
