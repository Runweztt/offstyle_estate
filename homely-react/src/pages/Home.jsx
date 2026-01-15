import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { AnimateOnScroll } from '../hooks/useScrollAnimation';
import Tab from '../components/Tab';
import VideoPopup from '../components/VideoPopup';
import Marquee from '../components/Marquee';

export default function Home() {
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
      {/* ========== HERO SECTION ========== */}
      <section className="bg-dark-1 text-light relative overflow-hidden" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="min-h-[800px] relative">
          {/* Hero Content Overlay - TOP (z-30 to be above slider) */}
          <div className="absolute w-full pt-[140px] z-30 top-0">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between gap-4">
                <div className="w-full lg:w-7/12">
                  <AnimateOnScroll animation="fadeInUp">
                    <h1 className="text-[72px] leading-[1.1] font-semibold text-white max-md:text-[10vw]">
                      Your Next Perfect and Beautiful Home for Living Today
                    </h1>
                  </AnimateOnScroll>
                </div>

              </div>
            </div>
          </div>

          {/* Hero Content Overlay - BOTTOM (z-30 to be above slider) */}
          <div className="absolute bottom-0 w-full py-5 z-30">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-end gap-4">
                <div className="w-full lg:w-5/12">
                  <AnimateOnScroll animation="fadeIn" delay={500}>
                    <h5 className="mb-4 lg:mb-0 text-white">KG 123 Street, Kigali, Rwanda</h5>
                  </AnimateOnScroll>
                </div>
                <div className="w-full lg:w-6/12">
                  <AnimateOnScroll animation="zoomIn">
                    <div className="p-4 bg-white/10 backdrop-blur-lg rounded-[20px]">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="w-5/12">
                          <AnimateOnScroll animation="scaleIn">
                            <img src="/images/misc/s1.webp" alt="" className="w-full rounded-[20px]" />
                          </AnimateOnScroll>
                        </div>
                        <div className="w-6/12">
                          <h3 className="text-white">Live Your Dream</h3>
                          <p className="hidden lg:block text-white/80">Thoughtfully designed homes that look great, perform well, and fit your lifestyle perfectly every day.</p>
                          <Link to="/contact" className="btn-main">
                            <span>Schedule Visit</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </div>

          {/* Watermark FOR SALE (z-20 above slider but below content) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white/10 text-[160px] font-semibold uppercase whitespace-nowrap pointer-events-none max-md:text-[60px]">
            for sale
          </div>

          {/* Background Slider (z-10 - lowest) */}
          <div className="absolute inset-0 z-10">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={1500}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full"
              style={{ position: 'absolute', inset: 0 }}
            >
              <SwiperSlide>
                <div 
                  className="w-full h-full min-h-[800px] bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/slider/1.webp)' }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent z-[2]"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="w-full h-full min-h-[800px] bg-cover bg-center relative"
                  style={{ backgroundImage: 'url(/images/slider/2.webp)' }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent z-[2]"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* ========== ABOUT PROPERTY SECTION ========== */}
      <section className="bg-dark-1 text-light py-[90px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <div className="w-full lg:w-3/12">
              <AnimateOnScroll animation="fadeInUp">
                <h5 className="text-white">About Property</h5>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-9/12">
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <h3 className="text-white leading-[1.5]">
                  This exceptional residence offers refined living with generous open spaces, bright interiors, and a warm modern design that blends comfort with style. Every room is crafted to create a welcoming atmosphere, giving you the perfect setting for daily life, relaxation, and memorable moments.
                </h3>
              </AnimateOnScroll>
              <div className="h-[30px]"></div>
              <div className="flex flex-wrap gap-3">
                <div className="w-1/2 lg:w-1/4">
                  <AnimateOnScroll animation="fadeInUp" delay={400}>
                    <div className="flex items-center">
                      <img src="/images/svg/size.svg" alt="" className="w-[40px] mr-3" />
                      <div className="text-[20px] text-white">1665 sqft</div>
                    </div>
                  </AnimateOnScroll>
                </div>
                <div className="w-1/2 lg:w-1/4">
                  <AnimateOnScroll animation="fadeInUp" delay={600}>
                    <div className="flex items-center">
                      <img src="/images/svg/bed.svg" alt="" className="w-[40px] mr-3" />
                      <div className="text-[20px] text-white">5 Beds</div>
                    </div>
                  </AnimateOnScroll>
                </div>
                <div className="w-1/2 lg:w-1/4">
                  <AnimateOnScroll animation="fadeInUp" delay={800}>
                    <div className="flex items-center">
                      <img src="/images/svg/bath.svg" alt="" className="w-[40px] mr-3" />
                      <div className="text-[20px] text-white">5 Baths</div>
                    </div>
                  </AnimateOnScroll>
                </div>
                <div className="w-1/2 lg:w-1/4">
                  <AnimateOnScroll animation="fadeInUp" delay={1000}>
                    <div className="flex items-center">
                      <img src="/images/svg/car.svg" alt="" className="w-[40px] mr-3" />
                      <div className="text-[20px] text-white">5 Cars</div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FACILITIES SECTION ========== */}
      <section className="py-20" id="section-facilities">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between mb-8 gap-6">
            <div className="w-full lg:w-8/12">
              <AnimateOnScroll animation="fadeInUp">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Home Facilities</span>
                <h2 className="mb-0 mt-2">Facilities For Lifestyle</h2>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-4/12 lg:text-right">
              <AnimateOnScroll animation="fadeInUp" delay={600}>
                <Link to="/about" className="btn-main fx-slide">
                  <span>View More</span>
                </Link>
              </AnimateOnScroll>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FacilityCard image="/images/misc/s2.webp" title="Smart Home" desc="Experience seamless daily comfort with intuitive smart features that connect your home effortlessly and enhance modern living." imageLeft={true} />
            <FacilityCard image="/images/misc/s3.webp" title="Solar Powered" desc="Generate clean renewable energy with efficient solar systems designed to lower utility costs while supporting a greener lifestyle." imageLeft={true} />
            <FacilityCard image="/images/misc/s4.webp" title="Swimming Pool" desc="Relax in a beautifully designed private pool that offers refreshing water, peaceful ambiance, and the perfect space for leisure at home." imageLeft={false} />
            <FacilityCard image="/images/misc/s5.webp" title="Home Security" desc="Protect your home with advanced security features that offer continuous monitoring, smart alerts, and peace of mind every day." imageLeft={false} />
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
      <section className="bg-dark-1 text-light py-[90px]" id="section-floorplan">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="w-full lg:w-4/12">
              <div className="lg:pr-6">
                <AnimateOnScroll animation="fadeInUp" delay={200}>
                  <div className="subtitle">Discover</div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={400}>
                  <h2 className="text-white">Home Floorplans</h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={600}>
                  <div className="space-y-2 text-white/80">
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
                <Tab tabs={floorplanTabs} className="text-white" />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section className="py-[90px] overflow-hidden" id="section-gallery">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
            <div className="w-full lg:w-6/12">
              <AnimateOnScroll animation="fadeIn" delay={200}>
                <div className="subtitle">Home Gallery</div>
                <h2>Designed for Living</h2>
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
function FacilityCard({ image, title, desc, imageLeft }) {
  return (
    <AnimateOnScroll animation="fadeInUp">
      <div className="hover overflow-hidden">
        <div className={`flex flex-wrap items-center ${!imageLeft ? 'flex-row-reverse' : ''}`}>
          <div className="w-full sm:w-6/12">
            <AnimateOnScroll animation={imageLeft ? 'fadeInLeft' : 'fadeInRight'}>
              <img src={image} alt={title} className="w-full rounded-[20px]" />
            </AnimateOnScroll>
          </div>
          <div className="w-full sm:w-6/12">
            <AnimateOnScroll animation={imageLeft ? 'fadeInRight' : 'fadeInLeft'}>
              <div className="p-6 lg:p-10">
                <h3>{title}</h3>
                <p className="mb-0">{desc}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function FloorplanRow({ label, size }) {
  return (
    <div className="flex justify-between py-2 border-b border-white/10">
      <span className="text-white">{label}</span>
      <span className="font-semibold text-white">{size}</span>
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
    
    // Simulate form submission
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
