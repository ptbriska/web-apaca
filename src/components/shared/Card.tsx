import React from 'react';
import Button from './Button';

interface CardProps {
  type?: 'service' | 'pricing' | 'article';
  title: string;
  description?: string;
  icon?: React.ReactNode;
  
  // Khusus Pricing (Paket Bundling)
  price?: string;
  period?: string;
  features?: string[];
  badge?: string;
  isPopular?: boolean;
  ctaText?: string;
  ctaHref?: string;
  
  // Khusus Article (Blog)
  image?: string;
  category?: string;
  date?: string;
  slug?: string;
  
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  type = 'service',
  title,
  description,
  icon,
  price,
  period,
  features,
  badge,
  isPopular = false,
  ctaText = 'Pilih Paket',
  ctaHref = '/kontak',
  image,
  category,
  date,
  slug,
  className = '',
}) => {
  
  // 1. Tipe Kartu Layanan (Service Card)
  if (type === 'service') {
    return (
      <div className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-apaca-redPrimary/30 transition-all duration-300 flex flex-col justify-between group ${className}`}>
        <div>
          {icon && (
            <div className="w-12 h-12 rounded-xl bg-apaca-redLight text-apaca-redDark flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-apaca-redPrimary/20">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-apaca-redPrimary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  // 2. Tipe Kartu Harga (Pricing/Bundling Card)
  if (type === 'pricing') {
    return (
      <div className={`relative bg-white rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
        isPopular 
          ? 'border-apaca-redPrimary shadow-xl ring-2 ring-apaca-redPrimary/20 scale-105 z-10' 
          : 'border-slate-200 shadow-sm hover:shadow-md'
      } ${className}`}>
        
        {badge && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-apaca-gradient text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
            {badge}
          </div>
        )}

        <div>
          <h3 className="text-2xl font-extrabold text-slate-800 mb-2">{title}</h3>
          {description && <p className="text-sm text-slate-500 mb-6">{description}</p>}
          
          {price && (
            <div className="mb-6 pb-6 border-b border-slate-100">
              <span className="text-3xl sm:text-4xl font-extrabold text-apaca-redDark">{price}</span>
              {period && <span className="text-sm text-slate-400 font-normal ml-1">/{period}</span>}
            </div>
          )}

          {features && features.length > 0 && (
            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-apaca-redBright flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Button 
          href={ctaHref} 
          variant={isPopular ? 'primary' : 'outline'} 
          fullWidth
        >
          {ctaText}
        </Button>
      </div>
    );
  }

  // 3. Tipe Kartu Artikel / Blog
  if (type === 'article') {
    return (
      <article className={`bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group ${className}`}>
        {image && (
          <div className="relative h-48 w-full overflow-hidden bg-slate-100">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {category && (
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-apaca-redDark text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-slate-200">
                {category}
              </span>
            )}
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            {date && <p className="text-xs font-medium text-slate-400 mb-2">{date}</p>}
            <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-apaca-redPrimary transition-colors line-clamp-2">
              <a href={`/artikel/${slug || '#'}`}>
                {title}
              </a>
            </h3>
            {description && (
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                {description}
              </p>
            )}
          </div>

          <a 
            href={`/artikel/${slug || '#'}`} 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-apaca-redPrimary hover:text-apaca-redDark transition-colors pt-2"
          >
            <span>Baca Selengkapnya</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </article>
    );
  }

  return null;
};

export default Card;
