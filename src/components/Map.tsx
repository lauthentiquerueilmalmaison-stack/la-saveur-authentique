"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Initialiser la carte
      const map = L.map(mapRef.current).setView([48.8768, 2.1897], 15); // Coordonnées de Rueil-Malmaison

      // Ajouter une couche de tuiles (par exemple, OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Ajouter un marqueur rouge à l'adresse spécifiée
      const redIcon = L.icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      L.marker([48.8768, 2.1897], { icon: redIcon })
        .addTo(map)
        .bindPopup("41 Bd National, 92500 Rueil-Malmaison")
        .openPopup();
    }
  }, []);

  return (
    <div
      ref={mapRef}
      className="h-[500px] w-full z-10 rounded-lg overflow-hidden"
    />
  );
};

export default Map;
