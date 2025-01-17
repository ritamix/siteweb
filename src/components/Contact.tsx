import React, { useEffect, useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import client from "../Lib/sanityClient";
import { Language } from "../types";

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  const [info, setInfo] = useState<{
    address: string;
    phone: string;
    openingHours: { days: string; hours: string }[];
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
    message: "",
  });

  useEffect(() => {
    // Fetch data from Sanity
    client
      .fetch(
        `*[_type == "info"][0]{
          "address": address${language.toUpperCase()},
          phone,
          "openingHours": openingHours${language.toUpperCase()}
        }`
      )
      .then((data) => {
        setInfo(data);
      })
      .catch(console.error);
  }, [language]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:mistura.astronomica@gmail.com?subject=Reservation Request&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Preferred Date: ${formData.date}
Number of Guests: ${formData.guests}
Message: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  if (!info) {
    return (
      <div className="text-center py-32">
        <p className="text-white">Loading contact information...</p>
      </div>
    );
  }

  const title = language === "en" ? "Visit Rita-Mix" : "Visite o Rita-Mix";
  const hours =
    language === "en" ? "Opening Hours" : "Horário de Funcionamento";
  const closed = language === "en" ? "Closed" : "Fechado";
  const formTitle =
    language === "en" ? "Make a Reservation" : "Faça uma Reserva";
  const namePlaceholder = language === "en" ? "Your Name" : "Seu Nome";
  const emailPlaceholder = language === "en" ? "Your Email" : "Seu Email";
  const datePlaceholder =
    language === "en" ? "Preferred Date" : "Data Preferida";
  const guestsPlaceholder =
    language === "en" ? "Number of Guests" : "Número de Convidados";
  const messagePlaceholder =
    language === "en" ? "Special Requests" : "Pedidos Especiais";
  const submitText = language === "en" ? "Send Request" : "Enviar Pedido";

  return (
    <section id="contact" className="py-32 bg-[#8bbaa6]">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Address</h3>
                  <p className="text-white/90">{info.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Phone</h3>
                  <p className="text-white/90">{info.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">{hours}</h3>
                  <ul className="text-white/90 space-y-1">
                    {info.openingHours.map((item, index) => (
                      <li key={index}>
                        {item.days}: {item.hours || closed}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="h-[300px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.275259750262!2d-9.147661!3d38.712899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19348496f69dd7%3A0x4a0767f95def3b67!2sR.%20Poiais%20de%20S%C3%A3o%20Bento%2036A%2C%201200-349%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2s!4v1710337060475!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {formTitle}
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder={namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-white/60 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-white/60 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-white/60 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  />
                  <input
                    type="number"
                    name="guests"
                    placeholder={guestsPlaceholder}
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="20"
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-white/60 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder={messagePlaceholder}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-white/60 text-white border border-white/20 focus:border-white/40 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors"
                >
                  {submitText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
