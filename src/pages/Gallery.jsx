import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/images/gallery/1.webp', title: 'Living Room' },
    { src: '/images/gallery/2.webp', title: 'Master Bedroom' },
    { src: '/images/gallery/3.webp', title: 'Dinning Room' },
    { src: '/images/gallery/4.webp', title: 'Kitchen' },
    { src: '/images/gallery/5.webp', title: 'Bathroom' },
    { src: '/images/gallery/6.webp', title: 'Exterior' },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden pt-[100px] text-white min-h-[200px] flex items-center">
        <img
          src="/images/background/1.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="pt-20">
              <AnimateOnScroll animation="fadeInUp">
                <h1 className="text-[72px] lg:text-[72px] text-[10vw] leading-[1.1] font-semibold text-white mb-0 feature-text">
                  Properties
                </h1>
              </AnimateOnScroll>
              <ul className="flex justify-center gap-2 text-white">
                <li><Link to="/" className="text-white hover:text-primary">Home</Link></li>
                <li className="opacity-50">/</li>
                <li className="opacity-80">Properties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY GRID ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 100}>
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-[20px]"
                  onClick={() => openLightbox(idx)}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">View</span>
                  </div>

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]"></div>

                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Title */}
                  <div className="absolute bottom-4 left-0 w-full text-center z-10 group-hover:opacity-0 transition-opacity">
                    <h4 className="text-white mb-0 feature-text">{img.title}</h4>
                  </div>

                  {/* Gradient */}
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LIGHTBOX MODAL ========== */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 text-white text-3xl hover:text-primary transition-colors z-10"
            onClick={closeLightbox}
          >
            ×
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-heading transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ←
          </button>

          {/* Navigation - Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-heading transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            →
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <p className="text-white text-center mt-4">{images[currentIndex].title}</p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}
