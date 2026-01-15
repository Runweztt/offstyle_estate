import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  to, 
  href, 
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ...props 
}) {
  const baseClasses = `
    inline-block px-6 py-2 font-bold text-base
    rounded-[5px] transition-all duration-300 cursor-pointer
    relative overflow-hidden
  `;

  const variants = {
    primary: 'bg-primary text-heading hover:bg-secondary',
    dark: 'bg-dark-1 text-white hover:bg-dark-2',
    light: 'bg-white text-heading hover:bg-gray-100',
    outline: 'border-2 border-primary text-heading hover:bg-primary',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  // Internal link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  // Button
  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
