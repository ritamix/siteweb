import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { MenuPreview } from './components/MenuPreview';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageToggle } from './components/LanguageToggle';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <main className="min-h-screen">
      <LanguageToggle currentLang={language} onToggle={setLanguage} />
      <Navbar language={language} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <MenuPreview language={language} />
      <Events language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
}