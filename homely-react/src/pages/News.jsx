import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';

export default function News() {
  const articles = [
    {
      id: 1,
      image: '/images/news/1.webp',
      date: 'Jan 05, 2026',
      title: 'Essential Tips for First-Time Homebuyers',
      excerpt: 'Buying a home is one of the biggest investments you will make. Here are key tips to help guide your journey.',
    },
    {
      id: 2,
      image: '/images/news/2.webp',
      date: 'Jan 03, 2026',
      title: 'Top Interior Design Trends for Modern Homes',
      excerpt: 'Explore the latest design trends that are transforming living spaces this year.',
    },
    {
      id: 3,
      image: '/images/news/3.webp',
      date: 'Dec 28, 2025',
      title: 'How to Increase Your Property Value',
      excerpt: 'Simple upgrades and renovations can boost your home value significantly over time.',
    },
    {
      id: 4,
      image: '/images/news/4.webp',
      date: 'Dec 20, 2025',
      title: 'Understanding Real Estate Market Cycles',
      excerpt: 'Learn how market cycles affect buying and selling decisions for property owners.',
    },
    {
      id: 5,
      image: '/images/news/5.webp',
      date: 'Dec 15, 2025',
      title: 'Sustainable Homes: Building for the Future',
      excerpt: 'Eco-friendly construction is the future of residential development worldwide.',
    },
    {
      id: 6,
      image: '/images/news/6.webp',
      date: 'Dec 10, 2025',
      title: 'Smart Home Technology Worth Investing In',
      excerpt: 'From security systems to energy management, smart tech adds value and convenience.',
    },
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
                  News
                </h1>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-5/12 lg:text-right">
              <ul className="flex justify-start lg:justify-end gap-2 text-white">
                <li><Link to="/" className="text-white hover:text-primary">Home</Link></li>
                <li className="opacity-50">/</li>
                <li className="opacity-80">News</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEWS GRID ========== */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <AnimateOnScroll key={article.id} animation="fadeInUp" delay={idx * 100}>
                <article className="group">
                  {/* Image */}
                  <Link to={`/news/${article.id}`} className="block overflow-hidden rounded-[20px] mb-4">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                  
                  {/* Date */}
                  <span className="text-primary text-sm font-medium">{article.date}</span>
                  
                  {/* Title */}
                  <h4 className="mt-2 mb-3 group-hover:text-primary transition-colors">
                    <Link to={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h4>
                  
                  {/* Excerpt */}
                  <p className="mb-4">{article.excerpt}</p>
                  
                  {/* Read More */}
                  <Link 
                    to={`/news/${article.id}`} 
                    className="text-heading font-semibold hover:text-primary transition-colors"
                  >
                    Read More →
                  </Link>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
