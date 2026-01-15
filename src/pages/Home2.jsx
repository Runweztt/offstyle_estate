import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { AnimateOnScroll } from '../hooks/useScrollAnimation';
import Tab from '../components/Tab';
import VideoPopup from '../components/VideoPopup';
import Marquee from '../components/Marquee';

export default function Home2() {
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
    {
      label: 'Hospitals',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <LocationItem icon="fa-hospital" title="King Faisal Hospital" distance="8 min drive" desc="Leading referral hospital with specialized medical services." />
          <LocationItem icon="fa-hospital-user" title="Rwanda Military Hospital" distance="10 min drive" desc="Well-equipped hospital serving military and civilians." />
          <LocationItem icon="fa-suitcase-medical" title="CHUK Hospital" distance="12 min drive" desc="University teaching hospital with comprehensive care." />
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
    'Stylish Interior Concept',
    'Prime Residential Location',
  ];

  return (
    <main>
      {/* ========== HERO SECTION - Split Layout ========== */}
      <section className="min-h-screen flex flex-wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 bg-dark-1 flex items-center justify-center py-20 lg:py-0">
          <div className="px-8 lg:px-16 max-w-xl">
            <AnimateOnScroll animation="fadeInUp">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Premium Property</span>
              <h1 className="text-[48px] lg:text-[60px] leading-[1.1] font-semibold text-white mt-4 mb-6">
                Discover Your Perfect Living Space
              </h1>
              <p className="text-white/70 text-lg mb-8">
                A stunning residence that combines modern elegance with comfortable living. Every detail crafted for your lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-main">
                  <span>Schedule Visit</span>
                </Link>
                <Link to="/gallery" className="btn-line">
                  View Gallery
                </Link>
              </div>
            </AnimateOnScroll>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-primary">1665</div>
                <div className="text-white/60 text-sm">Sq. Ft.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-white/60 text-sm">Bedrooms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-white/60 text-sm">Bathrooms</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Image Slider */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-screen">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            speed={1500}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full absolute inset-0"
          >
            <SwiperSlide>
              <div 
                className="w-full h-full min-h-[500px] lg:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/slider/1.webp)' }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div 
                className="w-full h-full min-h-[500px] lg:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/slider/2.webp)' }}
              ></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* ========== PROPERTY FEATURES ========== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimateOnScroll animation="fadeInUp">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Features</span>
              <h2 className="mt-2">Premium Home Features</h2>
            </AnimateOnScroll>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon="fa-wifi" title="Smart Home" desc="Connected living" />
            <FeatureCard icon="fa-solar-panel" title="Solar Power" desc="Eco-friendly energy" />
            <FeatureCard icon="fa-water-ladder" title="Swimming Pool" desc="Private relaxation" />
            <FeatureCard icon="fa-shield-halved" title="Security" desc="24/7 monitoring" />
            <FeatureCard icon="fa-car" title="Garage" desc="5 car spaces" />
            <FeatureCard icon="fa-tree" title="Garden" desc="Landscaped yard" />
            <FeatureCard icon="fa-kitchen-set" title="Modern Kitchen" desc="Premium appliances" />
            <FeatureCard icon="fa-bath" title="Spa Bathroom" desc="Luxury fixtures" />
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
          tour
        </div>
      </section>

      {/* ========== FLOORPLAN SECTION ========== */}
      <section className="py-[90px]" id="section-floorplan">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="w-full lg:w-4/12">
              <div className="lg:pr-6">
                <AnimateOnScroll animation="fadeInUp" delay={200}>
                  <div className="subtitle">Discover</div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={400}>
                  <h2>Home Floorplans</h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={600}>
                  <div className="space-y-2">
                    <FloorplanRow label="Living Room" size="20 m²" />
                    <FloorplanRow label="Dinning Room" size="15 m²" />
                    <FloorplanRow label="Kitchen" size="15 m²" />
                    <FloorplanRow label="Master Bedroom" size="16 m²" />
                    <FloorplanRow label="Kids Bedroom 1" size="12 m²" />
                    <FloorplanRow label="Kids Bedroom 2" size="12 m²" />
                    <FloorplanRow label="Bath Room" size="6 m²" />
                    <FloorplanRow label="Garage" size="40 m²" />
                    <FloorplanRow label="Warehouse" size="4 m²" />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <AnimateOnScroll animation="fadeInUp" delay={800}>
                <Tab tabs={floorplanTabs} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section className="py-[90px] bg-dark-1 overflow-hidden" id="section-gallery">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
            <div className="w-full lg:w-6/12">
              <AnimateOnScroll animation="fadeIn" delay={200}>
                <div className="subtitle">Home Gallery</div>
                <h2 className="text-white">Designed for Living</h2>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
        <div className="px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {galleryImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group overflow-hidden rounded-[20px]">
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">View</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-[5]"></div>
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-0 w-full text-center z-10 group-hover:opacity-0 transition-opacity">
                    <h4 className="text-white mb-0">{img.title}</h4>
                  </div>
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ========== LOCATION HIGHLIGHTS SECTION ========== */}
      <section className="bg-primary/5 py-[90px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8 gap-6">
            <div className="w-full lg:w-8/12">
              <AnimateOnScroll animation="fadeIn" delay={200}>
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Location Highlights</span>
                <h2 className="mt-2">Everything You Need, All Around You</h2>
              </AnimateOnScroll>
            </div>
          </div>
          <AnimateOnScroll animation="fadeInUp">
            <Tab tabs={locationTabs} variant="bordered" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="py-[90px]" id="section-contact">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-end gap-8">
            <div className="w-full lg:w-4/12">
              <AnimateOnScroll animation="fadeInUp">
                <div className="subtitle">Contact Us</div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <h2>Schedule a Home Tour</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={500}>
                <p>Interested in this property or ready to see it in person? Send us your request and we'll arrange a visit at your convenience.</p>
              </AnimateOnScroll>

            </div>

            <div className="w-full lg:w-8/12">
              <AnimateOnScroll animation="fadeInUp" delay={800}>
                <ContactForm />
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
      <div className="bg-white p-6 rounded-[20px] text-center hover:shadow-lg transition-shadow">
        <i className={`fa-solid ${icon} text-4xl text-primary mb-4`}></i>
        <h5 className="mb-1">{title}</h5>
        <p className="text-sm text-gray-500 mb-0">{desc}</p>
      </div>
    </AnimateOnScroll>
  );
}

function FloorplanRow({ label, size }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-200">
      <span>{label}</span>
      <span className="font-semibold">{size}</span>
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
    date: '',
    time: '10:00',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.date) newErrors.date = true;
    if (!formData.message) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary p-10 rounded-[20px] shadow-lg">
        <h4 className="mb-2">Home Visit Request Received!</h4>
        <p className="mb-0">
          Thank you <strong>{formData.name}</strong> for submitting your home visit request. 
          Our team will review your details and contact you shortly to schedule the visit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`form-control ${errors.name ? 'border-red-500' : ''}`}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={`form-control ${errors.email ? 'border-red-500' : ''}`}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={`form-control ${errors.date ? 'border-red-500' : ''}`}
        />
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="form-control"
        >
          {['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <div className="md:col-span-2">
          <textarea
            name="message"
            placeholder="Tell us your preferred date, time, or any questions"
            value={formData.message}
            onChange={handleChange}
            className={`form-control h-[120px] ${errors.message ? 'border-red-500' : ''}`}
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <button 
            type="submit" 
            className="btn-main fx-slide"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Sending...' : 'Request a Visit'}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
