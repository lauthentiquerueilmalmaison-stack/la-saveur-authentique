import { useEffect, useRef, useState } from "react";
import L from "leaflet"; // Import de Leaflet
import "leaflet/dist/leaflet.css"; // Import du style de Leaflet

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Assurez-vous que le code fonctionne côté client

    if (mapContainerRef.current && typeof window !== "undefined") {
      // Initialisation de la carte uniquement côté client
      const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13); // Exemple de coordonnées
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );
    }

    // Cleanup de la carte si nécessaire
    return () => {
      if (mapContainerRef.current && typeof window !== "undefined") {
        mapContainerRef.current.innerHTML = ""; // Nettoyer la carte lors du démontage
      }
    };
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Message de chargement si on est toujours sur le serveur
  }

  return (
    <div ref={mapContainerRef} style={{ height: "500px", width: "100%" }}></div>
  );
};

export default Map;
