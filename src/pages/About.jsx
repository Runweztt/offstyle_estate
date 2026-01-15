import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';
import Tab from '../components/Tab';

export default function About() {
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

  const propertyStats = [
    { icon: '/images/svg/calendar.svg', label: 'Year of Build', value: '2019' },
    { icon: '/images/svg/size.svg', label: 'Square Feet', value: '1665 sqft' },
    { icon: '/images/svg/bed.svg', label: 'Bedrooms', value: '4' },
    { icon: '/images/svg/bath.svg', label: 'Bathrooms', value: '5' },
    { icon: '/images/svg/car.svg', label: 'Car Parking', value: '3' },
    { icon: '/images/svg/price-tag.svg', label: 'Price', value: '$250,000' },
  ];

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
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="w-full lg:w-7/12">
              <AnimateOnScroll animation="fadeInUp">
                <h1 className="text-[72px] lg:text-[72px] text-[10vw] leading-[1.1] font-semibold text-white mb-0">
                  About
                </h1>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-5/12 lg:text-right">
              <ul className="flex justify-start lg:justify-end gap-2 text-white">
                <li><Link to="/" className="text-white hover:text-primary">Home</Link></li>
                <li className="opacity-50">/</li>
                <li className="opacity-80">About</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROPERTY DESCRIPTION ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <h3 className="text-[26px] leading-[1.5] mb-8">
              This exceptional residence offers refined living with generous open spaces, bright interiors, and a warm modern design that blends comfort with style. Every room is crafted to create a welcoming atmosphere, giving you the perfect setting for daily life, relaxation, and memorable moments.
            </h3>
          </AnimateOnScroll>
          
          <div className="h-8"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {propertyStats.map((stat, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={400 + index * 200}>
                <div className="text-center">
                  <img src={stat.icon} alt="" className="w-[60px] mx-auto mb-4" />
                  <div className="text-body">{stat.label}</div>
                  <h3 className="mb-0">{stat.value}</h3>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FLOORPLAN SECTION ========== */}
      <section className="bg-dark-1 text-white py-20" id="section-floorplan">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="w-full lg:w-4/12">
              <div className="lg:pr-6">
                <AnimateOnScroll animation="fadeInUp" delay={200}>
                  <span className="text-primary text-sm font-semibold uppercase tracking-widest">Discover</span>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={400}>
                  <h2 className="text-white mt-2">Home Floorplans</h2>
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FacilityCard image="/images/misc/s2.webp" title="Smart Home" desc="Experience seamless daily comfort with intuitive smart features that connect your home effortlessly and enhance modern living." imageLeft={true} />
            <FacilityCard image="/images/misc/s3.webp" title="Solar Powered" desc="Generate clean renewable energy with efficient solar systems designed to lower utility costs while supporting a greener lifestyle." imageLeft={true} />
            <FacilityCard image="/images/misc/s4.webp" title="Swimming Pool" desc="Relax in a beautifully designed private pool that offers refreshing water, peaceful ambiance, and the perfect space for leisure at home." imageLeft={false} />
            <FacilityCard image="/images/misc/s5.webp" title="Home Security" desc="Protect your home with advanced security features that offer continuous monitoring, smart alerts, and peace of mind every day." imageLeft={false} />
          </div>
        </div>
      </section>

      {/* ========== LOCATION HIGHLIGHTS SECTION ========== */}
      <section className="bg-primary/5 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8 gap-6">
            <div className="w-full lg:w-6/12">
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
    </main>
  );
}

// Helper Components
function FacilityCard({ image, title, desc, imageLeft }) {
  return (
    <AnimateOnScroll animation="fadeInUp">
      <div className="overflow-hidden">
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
