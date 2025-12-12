import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Signature Mains' },
  { id: 'wines', label: 'Wine Boutique' },
  { id: 'desserts', label: 'Desserts' },
];

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-sails-cream pt-24 pb-20">
      {/* Header */}
      <div className="bg-sails-navy text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/292/1920/600')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A celebration of fresh ingredients and refined flavors. Pricing and availability subject to change based on market freshness.
          </p>
        </div>
      </div>

      {/* Filter Nav */}
      <div className="max-w-7xl mx-auto px-6 mb-12 sticky top-24 z-30">
        <div className="bg-white p-2 shadow-md rounded-lg flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-all ${
                activeCategory === cat.id 
                  ? 'bg-sails-navy text-white shadow-lg' 
                  : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-sails-navy'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {filteredItems.map((item) => (
          <div key={item.id} className="flex flex-col border-b border-slate-200 pb-8 hover:border-sails-gold transition-colors duration-300 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-serif text-xl font-bold text-sails-navy group-hover:text-sails-gold transition-colors">
                {item.name}
                {item.isSignature && <span className="ml-2 text-[10px] bg-sails-gold text-white px-2 py-0.5 rounded-full align-middle uppercase tracking-wider">Signature</span>}
              </h3>
              <span className="text-sails-blue font-bold text-sm whitespace-nowrap ml-4">{item.priceRange}</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed italic">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <p>No items found in this category.</p>
        </div>
      )}

      {/* Note */}
      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <p className="text-xs text-slate-400 uppercase tracking-widest border-t border-slate-200 pt-8">
          * Please inform your server of any allergies. A service charge may apply for groups larger than 6.
        </p>
      </div>
    </div>
  );
};

export default MenuPage;