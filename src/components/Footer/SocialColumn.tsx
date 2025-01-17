import React from 'react';
import { Instagram } from 'lucide-react';
import { Language } from '../../types';

interface SocialColumnProps {
  language: Language;
}

export function SocialColumn({ language }: SocialColumnProps) {
  const title = language === 'en' ? 'Follow Us' : 'Siga-nos';

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
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
  );
}