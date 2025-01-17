import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const title = language === 'en' ? 'Welcome to Rita-Mix' : 'Bem-vindo ao Rita-Mix';
  const subtitle = language === 'en' ? 'Cocktails. Food. Live Music.' : 'Cocktails. Comida. Música Ao Vivo.';
  const reserveText = language === 'en' ? 'Reserve Now' : 'Reservar Agora';
  const menuText = language === 'en' ? 'View Menu' : 'Ver Menu';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center text-white space-y-8 px-4">
        <h1 className="text-5xl md:text-7xl font-bold">{title}</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-[#8bbaa6] hover:bg-[#7aa995] text-white rounded-full transition-colors w-48"
          >
            {reserveText}
          </a>
          <a
            href="#menu"
            className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-full transition-colors w-48"
          >
            {menuText}
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}