import { useState } from 'react';

export default function Tab({ tabs, className = '', variant = 'default' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const navClasses = {
    default: '',
    bordered: 'border-b pb-4',
  };

  return (
    <div className={`de-tab ${className}`}>
      {/* Tab Navigation */}
      <ul className={`d-tab-nav mb-4 flex flex-wrap gap-3 ${navClasses[variant]}`}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`
              px-5 py-2.5 cursor-pointer font-semibold rounded-[5px]
              border-2 transition-all duration-300
              ${activeIndex === index 
                ? 'border-primary bg-primary/10 text-heading' 
                : 'border-transparent text-body hover:text-heading hover:border-primary/30'}
            `}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      
      {/* Tab Content */}
      <ul className="d-tab-content">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'block' : 'hidden'}
          >
            {tab.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
