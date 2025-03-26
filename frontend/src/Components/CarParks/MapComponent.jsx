import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIconPng = new URL(
  "leaflet/dist/images/marker-icon.png",
  import.meta.url
).href;

const markerShadowPng = new URL(
  "leaflet/dist/images/marker-shadow.png",
  import.meta.url
).href;

// Özel Marker ikonu oluştur
const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41], // Genişlik ve yükseklik
  iconAnchor: [12, 41], // Haritada ortalama noktası
  popupAnchor: [1, -34], // Popup açıldığında konumu
  shadowSize: [41, 41],
});

// Harita merkezini güncelleyen bileşen
const MapUpdater = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 16); // Yeni konuma odaklan
    }
  }, [lat, lng, map]);

  return null;
};

const MapComponent = ({ lat, lng, name }) => {
  if (!lat || !lng) {
    return (
      <div className="text-center h-25 bg-red-100 text-red-600 p-4 rounded-lg">
        <p>Harita bilgisi bulunamadı.</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={16}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Harita merkezini güncelleyen bileşen */}
      <MapUpdater lat={lat} lng={lng} />

      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
