import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { AnimateOnScroll } from '../hooks/useScrollAnimation';
import Tab from '../components/Tab';
import VideoPopup from '../components/VideoPopup';
import Marquee from '../components/Marquee';

export default function Home3() {
  // Gallery images data
  const galleryImages = [
    { src: '/images/gallery/1.webp', title: 'Living Room' },
    { src: '/images/gallery/2.webp', title: 'Master Bedroom' },
    { src: '/images/gallery/3.webp', title: 'Dinning Room' },
    { src: '/images/gallery/4.webp', title: 'Kitchen' },
    { src: '/images/gallery/5.webp', title: 'Bathroom' },
  ];

  // Floorplan tabs
  const floorplanTabs = [
    { label: 'Floor 1', content: <img src="/images/misc/floorplan.webp" alt="Floor 1" className="w-full" /> },
    { label: 'Floor 2', content: <img src="/images/misc/floorplan.webp" alt="Floor 2" className="w-full" /> },
  ];

  // Location tabs data
  const locationTabs = [
    {
      label: 'Grocery',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <LocationItem icon="fa-cart-shopping" title="Simba Supermarket" distance="6 min walk" desc="Popular grocery destination with quality local and imported goods." />
          <LocationItem icon="fa-cart-shopping" title="Kigali Heights Market" distance="10 min walk" desc="Premium supermarket with organic produce and gourmet items." />
          <LocationItem icon="fa-cart-shopping" title="Union Trade Centre" distance="8 min walk" desc="Retail center with supermarket, shops, and dining options." />
        </div>
      ),
    },
    {
      label: 'Dining',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <LocationItem icon="fa-utensils" title="Repub Lounge" distance="7 min walk" desc="Upscale restaurant with African and international cuisine." />
          <LocationItem icon="fa-utensils" title="Sundowner Kigali" distance="8 min walk" desc="Popular rooftop dining with stunning city views." />
          <LocationItem icon="fa-utensils" title="The Hut Restaurant" distance="10 min drive" desc="Authentic Rwandan dishes in a traditional setting." />
        </div>
      ),
    },
    {
      label: 'Transportation',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <LocationItem icon="fa-bus" title="Nyabugogo Bus Terminal" distance="10 min drive" desc="Main hub for intercity and international bus routes." />
          <LocationItem icon="fa-plane" title="Kigali International Airport" distance="15 min drive" desc="Rwanda's main airport with domestic and international flights." />
          <LocationItem icon="fa-taxi" title="Moto & SafeMotos" distance="Citywide" desc="Convenient motorcycle taxi services available throughout Kigali." />
        </div>
      ),
    },
  ];

  const marqueeItems = [
    'Elegant Urban Residence',
    'Serene Garden Outlook',
    'Modern Living Spaces',
    'Premium Crafted Finishes',
    'Sunlit Corner Rooms',
    'Exclusive Private Amenities',
  ];

  return (
    <main>
      {/* ========== HERO SECTION - Minimal Center ========== */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/images/slider/1.webp)',
          paddingTop: 0, 
          paddingBottom: 0 
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <AnimateOnScroll animation="fadeInUp">
            <span className="inline-block px-4 py-2 bg-primary text-heading text-sm font-semibold uppercase tracking-widest rounded-full mb-6">
              Luxury Living
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <h1 className="text-[48px] lg:text-[80px] leading-[1.1] font-semibold text-white mb-6">
              Modern Elegance Awaits
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={400}>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Discover a home where every detail is thoughtfully designed for comfort, style, and your unique lifestyle.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={600}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-main px-8 py-4">
                <span>Book a Tour</span>
              </Link>
              <Link to="/about" className="btn-line-light px-8 py-4">
                Learn More
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <i className="fa-solid fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <AnimateOnScroll animation="fadeInUp">
              <div className="text-5xl font-bold text-heading mb-2">1665</div>
              <div className="text-heading/70">Sq. Ft.</div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="text-5xl font-bold text-heading mb-2">5</div>
              <div className="text-heading/70">Bedrooms</div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="text-5xl font-bold text-heading mb-2">5</div>
              <div className="text-heading/70">Bathrooms</div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={600}>
              <div className="text-5xl font-bold text-heading mb-2">5</div>
              <div className="text-heading/70">Car Garage</div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-full lg:w-5/12">
              <AnimateOnScroll animation="fadeInLeft">
                <img src="/images/misc/s1.webp" alt="Property" className="w-full rounded-[30px]" />
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-6/12">
              <AnimateOnScroll animation="fadeInRight">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Property</span>
                <h2 className="mt-4 mb-6">A Home Designed for Modern Life</h2>
                <p className="text-lg text-gray-600 mb-6">
                  This exceptional residence offers refined living with generous open spaces, bright interiors, and a warm modern design that blends comfort with style.
                </p>
                <p className="text-gray-500 mb-8">
                  Every room is crafted to create a welcoming atmosphere, giving you the perfect setting for daily life, relaxation, and memorable moments.
                </p>
                <Link to="/about" className="btn-main fx-slide">
                  <span>Discover More</span>
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIDEO TOUR SECTION ========== */}
      <section className="bg-dark-1 p-0 relative overflow-hidden" style={{ padding: 0 }}>
        <VideoPopup 
          videoUrl="https://www.youtube.com/watch?v=JMyl8K2voHU"
          thumbnailUrl="/images/background/1.webp"
          className="w-full"
        />
      </section>

      {/* ========== FEATURES GRID ========== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimateOnScroll animation="fadeInUp">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Features</span>
              <h2 className="mt-2">Premium Amenities</h2>
            </AnimateOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon="fa-wifi" title="Smart Home Integration" desc="Control lighting, climate, and security from your phone" />
            <FeatureCard icon="fa-solar-panel" title="Solar Power System" desc="Generate clean energy and reduce utility costs" />
            <FeatureCard icon="fa-water-ladder" title="Private Swimming Pool" desc="Relax in your own backyard oasis" />
            <FeatureCard icon="fa-shield-halved" title="Advanced Security" desc="24/7 monitoring with smart alerts" />
            <FeatureCard icon="fa-tree" title="Landscaped Gardens" desc="Beautiful outdoor spaces for family enjoyment" />
            <FeatureCard icon="fa-kitchen-set" title="Gourmet Kitchen" desc="Premium appliances and custom cabinetry" />
          </div>
        </div>
      </section>

      {/* ========== FLOORPLAN SECTION ========== */}
      <section className="py-[90px]" id="section-floorplan">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="w-full lg:w-4/12">
              <AnimateOnScroll animation="fadeInUp">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Layout</span>
                <h2 className="mt-2">Floor Plans</h2>
                <p className="text-gray-600 mb-6">
                  Thoughtfully designed layouts that maximize space and natural light.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <div className="space-y-2">
                  <FloorplanRow label="Living Room" size="20 m²" />
                  <FloorplanRow label="Kitchen" size="15 m²" />
                  <FloorplanRow label="Master Bedroom" size="16 m²" />
                  <FloorplanRow label="Garage" size="40 m²" />
                </div>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-6/12">
              <AnimateOnScroll animation="fadeInUp" delay={400}>
                <Tab tabs={floorplanTabs} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section className="py-[90px] bg-dark-1 overflow-hidden" id="section-gallery">
        <div className="container mx-auto px-4 mb-8">
          <AnimateOnScroll animation="fadeIn">
            <div className="text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Gallery</span>
              <h2 className="text-white mt-2">Explore Every Room</h2>
            </div>
          </AnimateOnScroll>
        </div>
        <div className="px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group overflow-hidden rounded-[15px]">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">{img.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ========== LOCATION HIGHLIGHTS SECTION ========== */}
      <section className="py-[90px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimateOnScroll animation="fadeIn">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Location</span>
              <h2 className="mt-2">Perfectly Located</h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeInUp">
            <Tab tabs={locationTabs} variant="bordered" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 bg-dark-1 text-center">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="text-white text-4xl lg:text-5xl mb-6">Ready to Make This Home Yours?</h2>
            <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">
              Schedule a private tour and experience the beauty and comfort of this exceptional property.
            </p>
            <Link to="/contact" className="btn-main px-10 py-4">
              <span>Schedule Your Visit</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ========== MARQUEE SECTION ========== */}
      <Marquee items={marqueeItems} />
    </main>
  );
}

// Helper Components
function FeatureCard({ icon, title, desc }) {
  return (
    <AnimateOnScroll animation="fadeInUp">
      <div className="bg-white p-8 rounded-[20px] hover:shadow-xl transition-shadow border border-gray-100">
        <i className={`fa-solid ${icon} text-4xl text-primary mb-4`}></i>
        <h4 className="mb-2">{title}</h4>
        <p className="text-gray-500 mb-0">{desc}</p>
      </div>
    </AnimateOnScroll>
  );
}

function FloorplanRow({ label, size }) {
  return (
    <div className="flex justify-between py-3 border-b border-gray-200">
      <span className="font-medium">{label}</span>
      <span className="text-primary font-semibold">{size}</span>
    </div>
  );
}

function LocationItem({ icon, title, distance, desc }) {
  return (
    <div className="relative pl-[80px]">
      <i className={`fa-solid ${icon} text-heading text-[40px] absolute left-0 top-2`}></i>
      <h4 className="mb-0">{title}</h4>
      <div className="text-primary mb-2">{distance}</div>
      <p>{desc}</p>
    </div>
  );
}
