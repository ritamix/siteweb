import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import client from "../Lib/sanityClient";
import { Language } from "../types";

interface Event {
  title: { en: string; pt: string };
  description: { en: string; pt: string };
  date: { en: string; pt: string };
  time: string;
}

interface EventsProps {
  language: Language;
}

export function Events({ language }: EventsProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const title = language === "en" ? "Upcoming Events" : "Próximos Eventos";
  const subtitle =
    language === "en"
      ? "Join us for live music nights and other special events!"
      : "Venha para nossas noites de música ao vivo e outros eventos especiais!";

  // Fetch data from Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == "event"]{
          title,
          description,
          date,
          time
        }`
      )
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);

  return (
    <section id="events" className="py-32 bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-white/90">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === "en" ? event.title.en : event.title.pt}
              </h3>
              <p className="text-white/90 mb-6">
                {language === "en"
                  ? event.description.en
                  : event.description.pt}
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Calendar size={20} />
                  <span>
                    {language === "en" ? event.date.en : event.date.pt}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock size={20} />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
