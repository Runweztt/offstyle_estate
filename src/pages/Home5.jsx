import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

import { AnimateOnScroll } from '../hooks/useScrollAnimation';
import Tab from '../components/Tab';
import VideoPopup from '../components/VideoPopup';
import Marquee from '../components/Marquee';

export default function Home5() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
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
      label: 'Parks',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <LocationItem icon="fa-tree" title="Nyandungu Eco Park" distance="15 min drive" desc="Rwanda's first urban wetland park with walking trails." />
          <LocationItem icon="fa-tree" title="Kigali Heights Gardens" distance="5 min walk" desc="Beautiful manicured gardens in the heart of the city." />
          <LocationItem icon="fa-mountain-sun" title="Mt. Kigali" distance="20 min drive" desc="Scenic hiking spot with panoramic views of the city." />
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
    'Spacious Family Design',
  ];

  const sliderImages = [
    '/images/slider/1.webp',
    '/images/slider/2.webp',
    '/images/gallery/1.webp',
    '/images/gallery/2.webp',
  ];

  return (
    <main>
      {/* ========== HERO SECTION - With Thumbnails ========== */}
      <section className="min-h-screen relative" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {/* Main Slider */}
        <Swiper
          modules={[Autoplay, EffectCreative, Thumbs]}
          effect="creative"
          creativeEffect={{
            prev: { translate: [0, 0, -400] },
            next: { translate: ['100%', 0, 0] },
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          speed={1000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-screen"
        >
          {sliderImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div 
                className="h-screen bg-cover bg-center relative"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <AnimateOnScroll animation="fadeInUp">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-white text-sm">Premium Luxury Property</span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <h1 className="text-[48px] lg:text-[80px] leading-[1.05] font-semibold text-white mb-6">
                  Experience <span className="text-primary">Luxury</span> Living
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={400}>
                <p className="text-white/80 text-xl mb-8 max-w-xl">
                  A masterpiece of modern architecture designed for those who appreciate the finest things in life.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={600}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-main px-8 py-4">
                    <span>Book Private Tour</span>
                  </Link>
                  <Link to="/gallery" className="btn-line-light px-8 py-4">
                    Explore Gallery
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
        
        {/* Thumbnail Slider */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
              spaceBetween={16}
              slidesPerView={4}
              watchSlidesProgress={true}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="thumbs-slider max-w-2xl"
            >
              {sliderImages.map((img, idx) => (
                <SwiperSlide key={idx} className="cursor-pointer">
                  <div className="rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-20 object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
        {/* Stats Sidebar */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div className="flex flex-col gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="text-3xl font-bold text-primary">1665</div>
              <div className="text-white/60 text-xs">SQFT</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-white/60 text-xs">BEDS</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-white/60 text-xs">BATHS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTRO SECTION ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-full lg:w-6/12">
              <AnimateOnScroll animation="fadeInUp">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Welcome Home</span>
                <h2 className="mt-4 mb-6 text-4xl lg:text-5xl">A Masterpiece of Modern Living</h2>
                <p className="text-lg text-gray-600 mb-6">
                  This exceptional residence offers refined living with generous open spaces, bright interiors, and a warm modern design that blends comfort with style.
                </p>
                <p className="text-gray-500 mb-8">
                  Every room is crafted to create a welcoming atmosphere, giving you the perfect setting for daily life, relaxation, and memorable moments with family and friends.
                </p>
              </AnimateOnScroll>
              
              {/* Features List */}
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <i className="fa-solid fa-wifi text-xl text-primary"></i>
                    <span className="font-medium">Smart Home Tech</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <i className="fa-solid fa-solar-panel text-xl text-primary"></i>
                    <span className="font-medium">Solar Powered</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <i className="fa-solid fa-water-ladder text-xl text-primary"></i>
                    <span className="font-medium">Private Pool</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <i className="fa-solid fa-shield-halved text-xl text-primary"></i>
                    <span className="font-medium">24/7 Security</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            
            <div className="w-full lg:w-5/12">
              <AnimateOnScroll animation="fadeInRight">
                <div className="relative">
                  <img src="/images/misc/s1.webp" alt="Property" className="w-full rounded-[30px]" />
                  <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl">
                    <div className="text-4xl font-bold text-heading">15+</div>
                    <div className="text-heading/70">Years Experience</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIDEO TOUR SECTION ========== */}
      <section className="p-0 relative overflow-hidden" style={{ padding: 0 }}>
        <VideoPopup 
          videoUrl="https://www.youtube.com/watch?v=JMyl8K2voHU"
          thumbnailUrl="/images/background/1.webp"
          className="w-full"
        />
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="py-20 bg-dark-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimateOnScroll animation="fadeInUp">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Premium Features</span>
              <h2 className="text-white mt-2">Exceptional Amenities</h2>
            </AnimateOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon="fa-house-laptop"
              title="Smart Home Integration"
              desc="Control your entire home from your smartphone with advanced automation"
            />
            <FeatureCard 
              icon="fa-bolt"
              title="Solar Power System"
              desc="Sustainable energy solution with efficient solar panel installation"
            />
            <FeatureCard 
              icon="fa-person-swimming"
              title="Infinity Pool"
              desc="Stunning private pool with panoramic views for ultimate relaxation"
            />
            <FeatureCard 
              icon="fa-video"
              title="Security System"
              desc="State-of-the-art surveillance with 24/7 monitoring and smart alerts"
            />
            <FeatureCard 
              icon="fa-fire-flame-curved"
              title="Modern Fireplace"
              desc="Elegant gas fireplace for cozy evenings with family and friends"
            />
            <FeatureCard 
              icon="fa-car"
              title="5-Car Garage"
              desc="Spacious climate-controlled garage with electric charging stations"
            />
          </div>
        </div>
      </section>

      {/* ========== FLOORPLAN SECTION ========== */}
      <section className="py-[90px]" id="section-floorplan">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="w-full lg:w-4/12">
              <AnimateOnScroll animation="fadeInUp">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Discover</span>
                <h2 className="mt-2">Home Floorplans</h2>
                <p className="text-gray-600 mb-6">
                  Explore the thoughtfully designed layouts that maximize space and natural light.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <div className="space-y-2">
                  <FloorplanRow label="Living Room" size="20 m²" />
                  <FloorplanRow label="Dinning Room" size="15 m²" />
                  <FloorplanRow label="Kitchen" size="15 m²" />
                  <FloorplanRow label="Master Bedroom" size="16 m²" />
                  <FloorplanRow label="Kids Bedroom 1" size="12 m²" />
                  <FloorplanRow label="Kids Bedroom 2" size="12 m²" />
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
      <section className="py-[90px] bg-gray-50 overflow-hidden" id="section-gallery">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 100}>
                <div className="relative group overflow-hidden rounded-[20px]">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <h5 className="text-white mb-0">{img.title}</h5>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LOCATION HIGHLIGHTS SECTION ========== */}
      <section className="py-[90px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimateOnScroll animation="fadeIn">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Location</span>
              <h2 className="mt-2">Neighborhood Highlights</h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeInUp">
            <Tab tabs={locationTabs} variant="bordered" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="py-[90px] bg-dark-1" id="section-contact">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="w-full lg:w-5/12 text-center lg:text-left">
              <AnimateOnScroll animation="fadeInUp">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
                <h2 className="text-white mt-4 mb-6">Ready to Make This Home Yours?</h2>
                <p className="text-white/70 mb-8">
                  Experience this exceptional property in person. Schedule a private tour and let us show you every detail of this stunning home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/contact" className="btn-main px-8 py-4">
                    <span>Schedule Tour</span>
                  </Link>
                  <a href="tel:+250780987150" className="btn-line-light px-8 py-4 flex items-center justify-center gap-2">
                    <i className="fa-solid fa-phone"></i>
                    <span>+250 780 987 150</span>
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
            
            <div className="w-full lg:w-5/12">
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <div className="bg-white/5 backdrop-blur-lg rounded-[30px] p-8">
                  <ContactForm />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
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
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[20px] border border-white/10 hover:border-primary/50 transition-colors group">
        <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
          <i className={`fa-solid ${icon} text-2xl text-primary group-hover:text-heading transition-colors`}></i>
        </div>
        <h4 className="text-white mb-2">{title}</h4>
        <p className="text-white/60 mb-0">{desc}</p>
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

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fa-solid fa-check text-2xl text-heading"></i>
        </div>
        <h4 className="text-white mb-2">Thank You!</h4>
        <p className="text-white/70 mb-0">We'll be in touch shortly to arrange your tour.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-control bg-white/10 border-white/20 text-white placeholder-white/50"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-control bg-white/10 border-white/20 text-white placeholder-white/50"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control bg-white/10 border-white/20 text-white placeholder-white/50"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="form-control bg-white/10 border-white/20 text-white placeholder-white/50 h-[100px]"
          required
        ></textarea>
        <button 
          type="submit" 
          className="btn-main w-full py-4"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? 'Sending...' : 'Request Tour'}</span>
        </button>
      </div>
    </form>
  );
}
