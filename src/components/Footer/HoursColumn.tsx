import React from 'react';
import { Language } from '../../types';

interface HoursColumnProps {
  language: Language;
}

export function HoursColumn({ language }: HoursColumnProps) {
  const title = language === 'en' ? 'Opening Hours' : 'Horário';
  const closed = language === 'en' ? 'Closed' : 'Fechado';

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
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
          <span>{closed}</span>
        </div>
      </div>
    </div>
  );
}