import React from 'react';

export const MapsSnippet: React.FC = () => {
  return (
    <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      <iframe
        title="Lokasi Kantor APACA Consulting Makassar"
        src="https://maps.google.com/maps?q=Jalan%20Racing%20Center%20Perum%20Mustika%20Mulia%20Blok%20B5%20No%208%20Panakukkang%20Makassar&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapsSnippet;
