import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImageIndex === null) return;
    if (direction === 'next') {
      setSelectedImageIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : (prev as number) + 1));
    } else {
      setSelectedImageIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : (prev as number) - 1));
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
       <div className="bg-sails-cream py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-sails-navy mb-4">Atmosphere</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A visual tour of our culinary creations, elegant interiors, and the moments that define the Sails experience.
          </p>
        </div>
      </div>

      {/* Masonry-ish Grid (using Flex wrap and columns for simplicity in Tailwind) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer break-inside-avoid overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={src} 
                alt={`Sails Gallery ${index + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-sails-navy/0 group-hover:bg-sails-navy/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 h-10 w-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-sails-gold transition-colors z-50"
          >
            <X className="h-10 w-10" />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <img 
            src={GALLERY_IMAGES[selectedImageIndex]} 
            alt="Gallery Fullscreen" 
            className="max-h-[85vh] max-w-full shadow-2xl rounded-sm"
          />

          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest font-mono">
            {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;