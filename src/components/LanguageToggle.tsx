import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={() => onToggle(currentLang === 'en' ? 'pt' : 'en')}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-white hover:bg-white/20 transition-colors"
    >
      <Globe size={18} />
      <span className="uppercase font-medium">{currentLang}</span>
    </button>
  );
}