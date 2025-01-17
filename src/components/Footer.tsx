import React from 'react';
import { Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const translations = {
    contact: language === 'en' ? 'Contact' : 'Contacto',
    address: language === 'en' ? 'Address' : 'Endereço',
    hours: language === 'en' ? 'Opening Hours' : 'Horário',
    followUs: language === 'en' ? 'Follow Us' : 'Siga-nos',
    closed: language === 'en' ? 'Closed' : 'Fechado',
    credits: language === 'en' 
      ? 'Designed with passion by Rita-Mix team'
      : 'Desenhado com paixão pela equipe Rita-Mix',
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Rita-Mix</h2>
            <p className="text-white/70 leading-relaxed">
              {language === 'en' 
                ? 'Your cozy cocktail bar in the heart of Lisboa.'
                : 'Seu acolhedor bar de cocktails no coração do Bairro Alto, Lisboa.'}
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{translations.contact}</h3>
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

          {/* Hours Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{translations.hours}</h3>
            <div className="space-y-3 text-white/70">
              <div className="flex justify-between">
                <span>Tuesday - Friday</span>
                <span>18:00–02:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>18:00–02:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday - Monday</span>
                <span>{translations.closed}</span>
              </div>
            </div>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{translations.followUs}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ritamix.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#8bbaa6] transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">{translations.credits}</p>
        </div>
      </div>
    </footer>
  );
}