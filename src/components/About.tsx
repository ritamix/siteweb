import React from 'react';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const title = language === 'en' 
    ? 'An Intimate Escape in Bairro Alto'
    : 'Uma Escapada Íntima no Bairro Alto';
    
  const description = language === 'en'
    ? 'Nestled in the heart of Lisbon\'s lively Bairro Alto district, Rita-Mix offers a unique experience for cocktail enthusiasts and food lovers alike. With a cozy, refined atmosphere, we bring together delicious cocktails, flavorful dishes, and live music to create memorable evenings.'
    : 'Situado no coração do animado Bairro Alto em Lisboa, Rita-Mix oferece uma experiência única para amantes de cocktails e da boa comida. Com uma atmosfera aconchegante e refinada, combinamos cocktails deliciosos, pratos saborosos e música ao vivo para criar noites inesquecíveis.';

  return (
    <section id="about" className="relative py-32 bg-[#8bbaa6]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="w-24 h-0.5 bg-gray-900" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[3/2] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczPxVsH0EAwTmiWS50nvmzC2gemAwdqN7GHxN-VvINsKm7tgrFk1M74Q-G4WWWQ2sNIzRlHn47A85fhXNIt9rJ9XHCBJLIDZiwEJZgRBw8RaHEaiBgvJPSnbSsF9qeIKw1xi9iGCJ0zKF_DZAYAHlDrG=w2048-h1366-s-no-gm"
                alt="Rita-Mix Interior"
                className="w-full h-full object-cover scale-[1.10] transform"
              />
            </div>
            <div className="absolute inset-0 rounded-xl ring-1 ring-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}