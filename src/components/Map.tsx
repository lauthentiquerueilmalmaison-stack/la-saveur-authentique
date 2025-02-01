"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Importer les images
import redMarkerIcon from "../../public/active-map-marker.png";
import markerShadow from "../../public/marker-shadow.png";

// Configuration de Leaflet
const coordinates: [number, number] = [48.8768, 2.1897]; // Latitude, Longitude pour Rueil-Malmaison

// Configuration de l'icône rouge
const redIcon = L.icon({
  iconUrl: redMarkerIcon.src, // Utilisation de .src pour obtenir l'URL
  shadowUrl: markerShadow.src, // Utilisation de .src pour obtenir l'URL
  iconSize: [25, 41], // Taille de l'icône
  iconAnchor: [12, 41], // Point d'ancrage de l'icône
  popupAnchor: [1, -34], // Point d'ancrage du popup
  shadowSize: [41, 41], // Taille de l'ombre
});

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  useEffect(() => {
    if (mapRef.current && markerRef.current) {
      // Ouvrir le popup par défaut
      markerRef.current.openPopup();
    }
  }, []);
  return (
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
  );
};

export default Map;
