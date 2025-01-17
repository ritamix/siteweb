import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import client from "../Lib/sanityClient";
import { MenuModal } from "./MenuModal";
import { Language } from "../types";

interface Recipe {
  title: { en: string; pt: string };
  description: { en: string; pt: string };
  imageUrl: string;
}

interface MenuPreviewProps {
  language: Language;
}

export function MenuPreview({ language }: MenuPreviewProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const title = language === "en" ? "Discover Our Menu" : "Descubra Nosso Menu";
  const subtitle =
    language === "en"
      ? "Explore our collection of signature cocktails and delicious dishes."
      : "Explore nossa coleção de cocktails exclusivos e pratos deliciosos.";
  const buttonText = language === "en" ? "View Full Menu" : "Ver Menu Completo";

  useEffect(() => {
    // Fetch recipes from Sanity
    client
      .fetch(
        `*[_type == "recipe"]{
          title,
          description,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => setRecipes(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section id="menu" className="py-32 bg-[#8bbaa6]">
        <div className="container">
          <div className="text-center mb-20">
            <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-white/90">{subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/5]"
              >
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title[language]}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {recipe.title[language]}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {recipe.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors text-lg"
            >
              {buttonText}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
