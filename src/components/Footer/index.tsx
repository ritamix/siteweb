import React from 'react';
import { Language } from '../../types';
import { BrandColumn } from './BrandColumn';
import { ContactColumn } from './ContactColumn';
import { HoursColumn } from './HoursColumn';
import { SocialColumn } from './SocialColumn';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const credits = language === 'en'
    ? 'Designed with passion by Rita-Mix team'
    : 'Desenhado com paixão pela equipe Rita-Mix';

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <BrandColumn language={language} />
          <ContactColumn language={language} />
          <HoursColumn language={language} />
          <SocialColumn language={language} />
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">{credits}</p>
        </div>
      </div>
    </footer>
  );
}