import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Language } from '../../types';

interface ContactColumnProps {
  language: Language;
}

export function ContactColumn({ language }: ContactColumnProps) {
  const title = language === 'en' ? 'Contact' : 'Contacto';

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-3">
        <a 
          href="mailto:info@ritamix.pt"
          className="flex items-center gap-2 text-white/70 hover:text-[#8bbaa6] transition-colors"
        >
          <Mail size={18} />
          <span>info@ritamix.pt</span>
        </a>
        <a 
          href="tel:+351912149934"
          className="flex items-center gap-2 text-white/70 hover:text-[#8bbaa6] transition-colors"
        >
          <Phone size={18} />
          <span>912 149 934</span>
        </a>
        <div className="flex items-center gap-2 text-white/70">
          <MapPin size={18} />
          <span>R. Poiais de São Bento 36a, 1200-343 Lisboa</span>
        </div>
      </div>
    </div>
  );
}