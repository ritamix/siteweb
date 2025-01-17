import React from 'react';
import { Language } from '../../types';

interface BrandColumnProps {
  language: Language;
}

export function BrandColumn({ language }: BrandColumnProps) {
  const description = language === 'en'
    ? 'Your cozy cocktail bar in the heart of Lisboa'
    : 'Seu acolhedor bar de cocktails no coração de Lisboa';

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Rita-Mix</h2>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}