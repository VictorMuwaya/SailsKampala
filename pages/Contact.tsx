import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API/Formspree
    alert('Thank you! Your reservation request has been received. We will contact you shortly to confirm.');
  };

  return (
    <div className="min-h-screen bg-sails-cream pt-24 pb-20">
      
      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-sails-navy mb-8">Our Story</h1>
        <div className="prose prose-lg mx-auto text-slate-600">
          <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-sails-gold first-letter:float-left first-letter:mr-3">
            Born from a passion for the waters that grace our city, <strong>{RESTAURANT_INFO.name}</strong> was established as a sanctuary for those seeking refined tastes in Luzira.
          </p>
          <p className="mb-6">
            The name "Sails" is more than just a nod to the nautical; it is our philosophy. As our founders say, <em>"{RESTAURANT_INFO.tagline}"</em>. In the bustling heart of Kampala, we provide the calm harbor—a place where the wind settles, the wine flows, and the food speaks the language of comfort and elegance.
          </p>
          <p>
            From our carefully curated Wine Boutique featuring the finest South African blends to our kitchen's mastery of continental classics, every detail is designed to transport you. Welcome aboard.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info & Map */}
        <div className="space-y-12">
          <div className="bg-white p-8 shadow-sm border-l-4 border-sails-blue">
            <h2 className="font-serif text-2xl font-bold text-sails-navy mb-6">Visit Us</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-sails-gold mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sails-navy">Address</h4>
                  <p className="text-slate-600">{RESTAURANT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-sails-gold mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sails-navy">Phone</h4>
                  <p className="text-slate-600">{RESTAURANT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-sails-gold mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sails-navy">Operating Hours</h4>
                  <p className="text-slate-600">Weekdays: {RESTAURANT_INFO.hours.weekdays}</p>
                  <p className="text-slate-600">Weekends: {RESTAURANT_INFO.hours.weekends}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="h-80 w-full bg-slate-200 rounded-sm overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757820844747!2d32.635900!3d0.298900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1f1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sOld%20Port%20Bell%20Rd%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Sails Restaurant Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="bg-white p-8 md:p-12 shadow-lg rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sails-gold/10 rounded-bl-full"></div>
          <h2 className="font-serif text-3xl font-bold text-sails-navy mb-2">Book A Table</h2>
          <p className="text-slate-500 mb-8 text-sm">Reservations are recommended for dinner and weekends.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-sails-blue">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-sails-gold transition-colors bg-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-sails-blue">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-sails-gold transition-colors bg-transparent"
                  placeholder="+256..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-sails-blue">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-sails-gold transition-colors bg-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-sails-blue">Date</label>
                <input 
                  type="date" 
                  name="date" 
                  required 
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-sails-gold transition-colors bg-transparent text-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-sails-blue">Time</label>
                <input 
                  type="time" 
                  name="time" 
                  required 
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-sails-gold transition-colors bg-transparent text-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-sails-blue">Guests</label>
                <select 
                  name="guests" 
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-sails-gold transition-colors bg-transparent text-slate-600"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map(n => <option key={n} value={n}>{n} People</option>)}
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-sails-navy text-white font-bold uppercase tracking-widest py-4 mt-8 hover:bg-sails-blue transition-colors flex items-center justify-center space-x-2"
            >
              <span>Confirm Reservation</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;