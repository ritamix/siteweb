import React from 'react';
import { NavItem, Language } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', labelPt: 'Início', href: '#home' },
  { label: 'About', labelPt: 'Sobre', href: '#about' },
  { label: 'Menu', labelPt: 'Menu', href: '#menu' },
  { label: 'Events', labelPt: 'Eventos', href: '#events' },
  { label: 'Contact', labelPt: 'Contacto', href: '#contact' },
];

interface NavbarProps {
  language: Language;
}

export function Navbar({ language }: NavbarProps) {
  const reserveText = language === 'en' ? 'Reserve Now' : 'Reservar Agora';

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-bold text-xl">Rita-Mix</a>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#8bbaa6] transition-colors"
              >
                {language === 'en' ? item.label : item.labelPt}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-[#8bbaa6] hover:bg-[#7aa995] text-white rounded-full transition-colors"
            >
              {reserveText}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}