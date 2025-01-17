import React from 'react';
import { GlassWater, Music, PartyPopper } from 'lucide-react';
import { Language } from '../types';

interface Service {
  icon: React.FC<{ className?: string }>;
  titleEn: string;
  titlePt: string;
  descriptionEn: string;
  descriptionPt: string;
}

const services: Service[] = [
  {
    icon: GlassWater,
    titleEn: 'Cocktails & Cuisine',
    titlePt: 'Cocktails e Gastronomia',
    descriptionEn: 'Signature cocktails crafted with care and dishes made to perfection.',
    descriptionPt: 'Cocktails exclusivos preparados com cuidado e pratos feitos com perfeição.',
  },
  {
    icon: Music,
    titleEn: 'Live Music',
    titlePt: 'Música Ao Vivo',
    descriptionEn: 'Enjoy live music performances every week, bringing a special energy to your evening.',
    descriptionPt: 'Aproveite performances musicais ao vivo todas as semanas.',
  },
  {
    icon: PartyPopper,
    titleEn: 'Private Events',
    titlePt: 'Eventos Privados',
    descriptionEn: 'Book Rita-Mix for private gatherings and make your occasion unforgettable.',
    descriptionPt: 'Reserve o Rita-Mix para eventos privados e torne a sua ocasião inesquecível.',
  },
];

interface ServicesProps {
  language: Language;
}

export function Services({ language }: ServicesProps) {
  const title = language === 'en' ? 'What We Offer' : 'O Que Oferecemos';

  return (
    <section id="services" className="py-32 bg-gray-900">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.titleEn}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-12 text-center group hover:bg-white/20 transition-colors duration-300"
            >
              <service.icon className="w-16 h-16 mx-auto mb-8 text-[#8bbaa6]" />
              <h3 className="text-2xl font-bold mb-6 text-white">
                {language === 'en' ? service.titleEn : service.titlePt}
              </h3>
              <p className="text-white/90 text-lg">
                {language === 'en' ? service.descriptionEn : service.descriptionPt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}