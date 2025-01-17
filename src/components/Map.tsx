import React from 'react';

export function Map() {
  return (
    <section className="h-[500px] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.275259750262!2d-9.147661!3d38.712899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19348496f69dd7%3A0x4a0767f95def3b67!2sR.%20Poiais%20de%20S%C3%A3o%20Bento%2036A%2C%201200-349%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2s!4v1710337060475!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}</content>