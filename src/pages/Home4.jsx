import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { AnimateOnScroll } from '../hooks/useScrollAnimation';
import Tab from '../components/Tab';
import VideoPopup from '../components/VideoPopup';
import Marquee from '../components/Marquee';

export default function Home4() {
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
    {
      label: 'Education',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <LocationItem icon="fa-school" title="Green Hills Academy" distance="10 min drive" desc="Premier international school offering IB curriculum." />
          <LocationItem icon="fa-school" title="Kigali International School" distance="12 min drive" desc="American curriculum school for expatriate and local students." />
          <LocationItem icon="fa-book" title="Kigali Public Library" distance="8 min walk" desc="Modern library offering resources, events, and study spaces." />
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
    'Comfort Luxury Retreat',
  ];

  const slides = [
    { image: '/images/slider/1.webp', title: 'Luxury Living Redefined', subtitle: 'Experience the pinnacle of modern comfort' },
    { image: '/images/slider/2.webp', title: 'Your Dream Awaits', subtitle: 'A home crafted for those who appreciate excellence' },
  ];

  return (
    <main>
      {/* ========== HERO SECTION - Full Screen Slider with Navigation ========== */}
      <section className="relative" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={true}
          speed={1500}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="h-screen hero-slider"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div 
                className="h-screen bg-cover bg-center relative flex items-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-2xl">
                    <AnimateOnScroll animation="fadeInUp">
                      <span className="text-primary text-sm font-semibold uppercase tracking-widest">Premium Property</span>
                      <h1 className="text-[48px] lg:text-[72px] leading-[1.1] font-semibold text-white mt-4 mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-white/80 text-xl mb-8">{slide.subtitle}</p>
                      <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="btn-main px-8 py-4">
                          <span>Schedule Tour</span>
                        </Link>
                        <Link to="/gallery" className="btn-line-light px-8 py-4">
                          View Gallery
                        </Link>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Property Quick Info */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-t-[30px] p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <QuickInfo icon="fa-expand" label="Size" value="1665 sqft" />
                <QuickInfo icon="fa-bed" label="Bedrooms" value="5" />
                <QuickInfo icon="fa-bath" label="Bathrooms" value="5" />
                <QuickInfo icon="fa-car" label="Garage" value="5 Cars" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-stretch gap-8">
            <div className="w-full lg:w-6/12">
              <AnimateOnScroll animation="fadeInLeft">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <img src="/images/misc/s2.webp" alt="Property" className="w-full h-full object-cover rounded-[20px]" />
                  <div className="flex flex-col gap-4">
                    <img src="/images/misc/s3.webp" alt="Property" className="w-full h-1/2 object-cover rounded-[20px]" />
                    <img src="/images/misc/s4.webp" alt="Property" className="w-full h-1/2 object-cover rounded-[20px]" />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-5/12">
              <AnimateOnScroll animation="fadeInRight">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">About This Home</span>
                <h2 className="mt-4 mb-6">Where Comfort Meets Elegance</h2>
                <p className="text-lg text-gray-600 mb-6">
                  This exceptional residence offers refined living with generous open spaces, bright interiors, and a warm modern design that blends comfort with style.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-primary"></i>
                    </div>
                    <span>Smart Home</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-primary"></i>
                    </div>
                    <span>Solar Power</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-primary"></i>
                    </div>
                    <span>Pool & Garden</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-primary"></i>
                    </div>
                    <span>24/7 Security</span>
                  </div>
                </div>
                
                <Link to="/about" className="btn-main fx-slide">
                  <span>Learn More</span>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] text-white/10 text-[160px] font-semibold uppercase whitespace-nowrap pointer-events-none max-md:text-[60px]">
          virtual tour
        </div>
      </section>

      {/* ========== FEATURES CARDS ========== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimateOnScroll animation="fadeInUp">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Features</span>
              <h2 className="mt-2">Home Highlights</h2>
            </AnimateOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              image="/images/misc/s2.webp"
              icon="fa-wifi"
              title="Smart Living"
              desc="Integrated home automation"
            />
            <FeatureCard 
              image="/images/misc/s3.webp"
              icon="fa-solar-panel"
              title="Eco Friendly"
              desc="Solar powered efficiency"
            />
            <FeatureCard 
              image="/images/misc/s4.webp"
              icon="fa-water-ladder"
              title="Private Pool"
              desc="Luxury relaxation space"
            />
            <FeatureCard 
              image="/images/misc/s5.webp"
              icon="fa-shield-halved"
              title="Full Security"
              desc="24/7 monitoring system"
            />
          </div>
        </div>
      </section>

      {/* ========== FLOORPLAN SECTION ========== */}
      <section className="py-[90px] bg-dark-1" id="section-floorplan">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="w-full lg:w-4/12">
              <AnimateOnScroll animation="fadeInUp">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Layout</span>
                <h2 className="mt-2 text-white">Floor Plans</h2>
                <p className="text-white/70 mb-6">
                  Thoughtfully designed layouts that maximize space and natural light for comfortable living.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <div className="space-y-2">
                  <FloorplanRow label="Living Room" size="20 m²" />
                  <FloorplanRow label="Dinning Room" size="15 m²" />
                  <FloorplanRow label="Kitchen" size="15 m²" />
                  <FloorplanRow label="Master Bedroom" size="16 m²" />
                  <FloorplanRow label="Garage" size="40 m²" />
                </div>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-6/12">
              <AnimateOnScroll animation="fadeInUp" delay={400}>
                <Tab tabs={floorplanTabs} className="text-white" />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section className="py-[90px] overflow-hidden" id="section-gallery">
        <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <AnimateOnScroll animation="fadeIn">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Gallery</span>
                <h2 className="mt-2">Interior Showcase</h2>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fadeIn" delay={200}>
              <Link to="/gallery" className="btn-main fx-slide">
                <span>View All</span>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
        <div className="px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group overflow-hidden rounded-[20px]">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <h4 className="text-white mb-0">{img.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ========== LOCATION HIGHLIGHTS SECTION ========== */}
      <section className="bg-primary/5 py-[90px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimateOnScroll animation="fadeIn">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Neighborhood</span>
              <h2 className="mt-2">Location Highlights</h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeInUp">
            <Tab tabs={locationTabs} variant="bordered" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ========== CONTACT CTA ========== */}
      <section 
        className="py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/background/1.webp)' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="text-white text-4xl lg:text-5xl mb-6">Ready to Call This Home?</h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Book a private showing and discover why this property is perfect for you.
            </p>
            <Link to="/contact" className="btn-main px-10 py-4">
              <span>Schedule Your Tour</span>
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
function QuickInfo({ icon, label, value }) {
  return (
    <div className="text-center">
      <i className={`fa-solid ${icon} text-2xl text-primary mb-2`}></i>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

function FeatureCard({ image, icon, title, desc }) {
  return (
    <AnimateOnScroll animation="fadeInUp">
      <div className="bg-white rounded-[20px] overflow-hidden hover:shadow-xl transition-shadow group">
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <i className={`fa-solid ${icon} text-heading`}></i>
          </div>
        </div>
        <div className="p-6">
          <h4 className="mb-1">{title}</h4>
          <p className="text-gray-500 mb-0">{desc}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function FloorplanRow({ label, size }) {
  return (
    <div className="flex justify-between py-3 border-b border-white/10">
      <span className="text-white">{label}</span>
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
