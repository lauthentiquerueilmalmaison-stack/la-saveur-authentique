"use client";

import Map from "./Map";
import Section from "./Section";

const Contact = () => {
  return (
    <Section id="contact" title="Nous Contacter">
      <div className="flex flex-col lg:flex-row gap-x-5">
        <div className="w-full lg:w-1/2 lg:pl-4 shadow-lg">
          <Map />
        </div>
        <div className="w-full lg:w-1/2 lg:pr-4 rounded-lg bg-white">
          {/* Adresse */}
          <div className="mb-6">
            <h3 className="font-arizonia text-2xl text-[#1E3A8A] mb-2">
              Adresse
            </h3>
            <p className="font-forum text-lg text-gray-700">
              41 Bd National, 92500 Rueil-Malmaison
            </p>
          </div>

          {/* Téléphone */}
          <div className="mb-6">
            <h3 className="font-arizonia text-2xl text-[#1E3A8A] mb-2">
              Téléphone
            </h3>
            <p className="font-forum text-lg text-gray-700">
              +33 1 23 45 67 89
            </p>
          </div>

          {/* Email */}
          <div className="mb-6">
            <h3 className="font-arizonia text-2xl text-[#1E3A8A] mb-2">
              Email
            </h3>
            <p className="font-forum text-lg text-gray-700">
              contact@restaurant.com
            </p>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-arizonia text-2xl text-[#1E3A8A] mb-2">
              Horaires
            </h3>
            <p className="font-forum text-lg text-gray-700">
              Lun - Dim : 12h - 22h
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
