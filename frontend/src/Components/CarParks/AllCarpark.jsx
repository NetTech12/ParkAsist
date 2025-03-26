import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useCarparkContext } from "../../Context/CarparkContext";
import { useEffect } from "react";
import L from "leaflet";

const markerIconPng = new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href;
const markerShadowPng = new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href;

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Harita sınırlarını güncelleyerek tüm noktaları kapsamasını sağlayan bileşen
const MapUpdater = ({ carparks }) => {
  const map = useMap();

  useEffect(() => {
    if (carparks.length > 0) {
      const bounds = L.latLngBounds(carparks.map(carpark => [carpark.latitude, carpark.longitude],16));
      map.fitBounds(bounds, { padding: [50, 50] }); // Tüm noktaları kapsayan sınırları ayarla
    }
  }, [carparks, map]);

  return null;
};

const AllCarparkMap = () => {
  const { filteredCarparks } = useCarparkContext();

  const validCarparks = filteredCarparks.filter(
    (carpark) => carpark.latitude && carpark.longitude
  );

  if (validCarparks.length === 0) {
    return <p className="text-gray-600 mt-4">Lütfen şehir ve ilçe seçiniz veya geçerli park yeri verisi yok.</p>;
  }

  const initialLat = validCarparks[0]?.latitude;
  const initialLng = validCarparks[0]?.longitude;

  return (
    <div className="mt-8 p-16 bg-gray-100 rounded-lg">

      <MapContainer center={[initialLat, initialLng]} zoom={12} style={{ height: "600px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Haritayı tüm noktaları kapsayacak şekilde ayarla */}
        <MapUpdater carparks={validCarparks} />

        {validCarparks.map((carpark) => (
          <Marker key={carpark.id} position={[carpark.latitude, carpark.longitude]} icon={customIcon}>
            <Popup>{carpark.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AllCarparkMap;
