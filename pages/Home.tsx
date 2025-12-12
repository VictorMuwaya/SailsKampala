import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wine, UtensilsCrossed, Music, Star } from 'lucide-react';
import { SOCIAL_FEED } from '../constants';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-sails-gold">
    <div className="p-3 bg-sails-cream rounded-full mb-4 text-sails-blue">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-bold text-sails-navy mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/431/1920/1080" 
            alt="Sails Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sails-navy/90 via-sails-navy/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center animate-fadeInUp">
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-sails-gold text-sails-gold">
             <span className="font-serif text-3xl font-bold">S</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sails Restaurant <br/> <span className="text-sails-gold italic font-normal text-3xl md:text-5xl">& Wine Boutique</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl">
            "We shall Sail through the storms." <br/>
            An upscale dining experience on the shores of style in Luzira.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/menu" 
              className="px-8 py-4 bg-sails-gold text-white font-bold uppercase tracking-widest hover:bg-white hover:text-sails-navy transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              View Menu
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-sails-navy transition-all duration-300 transform hover:-translate-y-1"
            >
              Book A Table
            </Link>
          </div>
        </div>
      </section>

      {/* Our Vibe Section */}
      <section className="py-24 bg-sails-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-sails-navy mb-4">Experience The Vibe</h2>
            <div className="h-1 w-20 bg-sails-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Wine className="h-8 w-8" />}
              title="Wine Boutique"
              description="Explore our curated selection of South African and global wines. Available by the glass or bottle for the perfect pairing."
            />
            <FeatureCard 
              icon={<UtensilsCrossed className="h-8 w-8" />}
              title="Continental Cuisine"
              description="From fresh Lake Victoria Tilapia to perfectly aged pepper steak, our menu is a journey of culinary delight."
            />
            <FeatureCard 
              icon={<Music className="h-8 w-8" />}
              title="Elegant Ambiance"
              description="Relaxing nautical decor, soft lighting, and a convivial atmosphere suitable for business lunches or romantic dinners."
            />
          </div>
        </div>
      </section>

      {/* Latest from Social */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sails-gold font-bold tracking-widest text-xs uppercase mb-2 block">Social Feed</span>
              <h2 className="font-serif text-3xl font-bold text-sails-navy">Latest Moments</h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-sails-blue hover:text-sails-gold transition-colors text-sm font-bold uppercase tracking-wider">
              Follow Us <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOCIAL_FEED.map((post) => (
              <div key={post.id} className="group relative overflow-hidden bg-slate-900 shadow-md">
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full h-80 object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-sm font-light mb-2 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center justify-between text-xs text-sails-gold font-bold">
                      <span>{post.date}</span>
                      <span className="flex items-center"><Star className="h-3 w-3 mr-1 fill-current" /> {post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-sails-blue hover:text-sails-gold transition-colors text-sm font-bold uppercase tracking-wider">
              Follow Us <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;