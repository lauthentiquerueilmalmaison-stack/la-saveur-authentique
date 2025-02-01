"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Section from "./Section";

// Importer l'icône rouge depuis leaflet-color-markers
import redMarkerIconUrl from "leaflet-color-markers/img/marker-icon-red.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

// Configuration de Leaflet
const coordinates: [number, number] = [48.8768, 2.1897]; // Latitude, Longitude pour Rueil-Malmaison

// Configuration de l'icône rouge
const redIcon = L.icon({
  iconUrl: redMarkerIconUrl.src, // Utiliser l'icône rouge
  shadowUrl: markerShadowUrl.src, // Ombre du marqueur
  iconSize: [25, 41], // Taille de l'icône
  iconAnchor: [12, 41], // Point d'ancrage de l'icône
  popupAnchor: [1, -34], // Point d'ancrage du popup
  shadowSize: [41, 41], // Taille de l'ombre
});

const Contact = () => {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (mapRef.current && markerRef.current) {
      // Ouvrir le popup par défaut
      markerRef.current.openPopup();
    }
  }, []);

  return (
    <Section id="contact" title="Contact">
      <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg min-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte Leaflet */}
          <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <MapContainer
              center={coordinates}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={coordinates} icon={redIcon} ref={markerRef}>
                <Popup>41 Boulevard National, 92500 Rueil-Malmaison</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Informations de contact */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-arizonia text-2xl text-[#E4C590]">Adresse</h3>
              <p className="font-forum text-lg text-white">
                41 Boulevard National, 92500 Rueil-Malmaison
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-arizonia text-2xl text-[#E4C590]">
                Téléphone
              </h3>
              <p className="font-forum text-lg text-white">+33 1 23 45 67 89</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-arizonia text-2xl text-[#E4C590]">Email</h3>
              <p className="font-forum text-lg text-white">
                contact@restaurant.com
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-arizonia text-2xl text-[#E4C590]">
                Horaires
              </h3>
              <p className="font-forum text-lg text-white">
                Lun - Dim : 12h - 22h
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
