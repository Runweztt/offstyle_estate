import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';

export default function Contact() {
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
                  Contact
                </h1>
              </AnimateOnScroll>
              <ul className="flex justify-center gap-2 text-white">
                <li><Link to="/" className="text-white hover:text-primary">Home</Link></li>
                <li className="opacity-50">/</li>
                <li className="opacity-80">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-start gap-8">
            {/* Contact Info */}
            <div className="w-full lg:w-4/12">
              <AnimateOnScroll animation="fadeInUp">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact Us</span>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <h2 className="mt-2 mb-4">Schedule a Home Tour</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={400}>
                <p className="mb-6">Interested in this property or ready to see it in person? Send us your request and we'll arrange a visit at your convenience.</p>
              </AnimateOnScroll>



              <AnimateOnScroll animation="fadeInUp" delay={800}>
                <div className="space-y-4">
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <p className="mb-0">KG 123 Street, Kigali<br />Rwanda</p>
                  </div>
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <p className="mb-0">contact@offstyle.com</p>
                  </div>
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p className="mb-0">+250 780 987 150</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-7/12">
              <AnimateOnScroll animation="fadeInUp" delay={400}>
                {isSubmitted ? (
                  <div className="bg-primary p-10 rounded-[20px] shadow-lg">
                    <h4 className="mb-2">Home Visit Request Received!</h4>
                    <p className="mb-0">
                      Thank you <strong>{formData.name}</strong> for submitting your home visit request.
                      Our team will review your details and contact you shortly to schedule the visit.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-[20px]">
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
                          className={`form-control h-[150px] ${errors.message ? 'border-red-500' : ''}`}
                        ></textarea>
                      </div>
                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          className="btn-main"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Request a Visit'}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="py-0">
        <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
          <p className="text-body">Map placeholder - Add Google Maps integration here</p>
        </div>
      </section>
    </main>
  );
}
