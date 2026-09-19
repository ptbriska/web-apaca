import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
  fullWidth = false,
}) => {
  // Styling dasar tombol
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-apaca-redPrimary active:scale-95";

  // Ukuran tombol
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  // Varian gaya & gradasi merah APACA
  const variantStyles = {
    primary: "bg-apaca-gradient hover:bg-apaca-gradient-hover text-white shadow-md hover:shadow-lg focus:ring-apaca-redPrimary border border-transparent",
    secondary: "bg-apaca-redLight text-apaca-redDark hover:bg-red-100 border border-apaca-redPrimary/20",
    outline: "bg-transparent border-2 border-apaca-redPrimary text-apaca-redPrimary hover:bg-apaca-redPrimary hover:text-white",
    white: "bg-white text-apaca-redDark hover:bg-slate-100 shadow-md border border-slate-200",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  // Jika memiliki tautan (href), render sebagai <a>
  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  // Jika bukan tautan, render sebagai <button>
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
