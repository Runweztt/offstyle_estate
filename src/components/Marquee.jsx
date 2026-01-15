export default function Marquee({ items, className = '' }) {
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items];

  return (
    <section className={`p-0 ${className}`}>
      <div className="bg-primary/5 py-3 overflow-hidden">
        <div className="de-marquee-list-1 flex animate-slide-left whitespace-nowrap">
          {duplicatedItems.map((item, index) => (
            <h3 
              key={index}
              className={`
                inline-block mb-0 text-[48px] font-semibold mx-4
                ${index % 2 === 0 ? 'text-heading' : 'text-heading/50'}
              `}
            >
              {item}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}
