import React, { useEffect, useRef } from "react";
import { useCarparkContext } from "../../Context/CarparkContext";
import { useGoogleMaps } from "../../Context/GoogleMapsContext";

const MapComponent = () => {
  const mapRef = useRef(null);
  const { selectedCarpark } = useCarparkContext();
  const { apiKey, loading } = useGoogleMaps();

  useEffect(() => {
    if (loading || !apiKey || !selectedCarpark) return;

    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve();
          return;
        }

        const existingScript = document.getElementById("google-maps-script");
        if (existingScript) {
          existingScript.addEventListener("load", resolve);
          return;
        }

        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;

        document.body.appendChild(script);
      });
    };

    loadGoogleMapsScript()
      .then(() => {
        const lat = parseFloat(selectedCarpark.latitude);
        const lng = parseFloat(selectedCarpark.longitude);
        const name = selectedCarpark.name;

        const hasValidCoords = !isNaN(lat) && !isNaN(lng) && (lat !== 0 && lng !== 0);
        if (!hasValidCoords) return;

        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 16,
        });

        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map,
          title: name,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding:8px; font-size:14px; font-weight:bold;">${name}</div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" 
              target="_blank" style="display:block; text-align:center; background:#007bff; color:white; padding:6px; margin-top:5px; border-radius:4px; text-decoration:none;">
              Yol Tarifi Al
            </a>
          `
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      })
      .catch((err) => {
        console.error("Google Maps yüklenirken hata oluştu:", err);
      });
  }, [apiKey, loading, selectedCarpark]);

  if (
    loading ||
    !selectedCarpark ||
    !selectedCarpark.latitude ||
    !selectedCarpark.longitude ||
    selectedCarpark.latitude === 0 ||
    selectedCarpark.longitude === 0
  ) {
    return (
      <div className="text-center h-25 bg-red-100 text-red-600 p-4 rounded-lg">
        <p>Harita bilgisi bulunamadı.</p>
      </div>
    );
  }

  return <div ref={mapRef} style={{ height: "600px", width: "100%" }} />;
};

export default MapComponent;
