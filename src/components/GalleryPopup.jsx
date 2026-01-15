import { useState } from 'react';

export default function GalleryPopup({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-1"
            onClick={() => openPopup(index)}
          >
            {/* Hover overlay with "View" text */}
            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold">View</span>
            </div>
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]"></div>
            
            {/* Image */}
            <img 
              src={image.src} 
              alt={image.title || `Gallery image ${index + 1}`}
              className="w-full transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Title */}
            {image.title && (
              <div className="absolute bottom-4 left-0 w-full text-center z-10 group-hover:opacity-0 transition-opacity">
                <h4 className="text-white mb-0">{image.title}</h4>
              </div>
            )}
            
            {/* Gradient bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-0 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          onClick={closePopup}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 text-white text-3xl hover:text-primary transition-colors z-10"
            onClick={closePopup}
          >
            ×
          </button>
          
          {/* Navigation - Previous */}
          {images.length > 1 && (
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-heading transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              ←
            </button>
          )}
          
          {/* Navigation - Next */}
          {images.length > 1 && (
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-heading transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              →
            </button>
          )}
          
          {/* Image */}
          <div 
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].title || `Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
            />
            {images[currentIndex].title && (
              <p className="text-white text-center mt-4">{images[currentIndex].title}</p>
            )}
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
