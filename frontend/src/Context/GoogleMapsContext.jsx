import React, { createContext, useContext, useEffect, useState } from "react";

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchGoogleMapsKey = async () => {
      try {
        const response = await fetch(`${API_URL}/google-maps-key`);
        const data = await response.json();
        setApiKey(data.apiKey);
      } catch (error) {
        console.error("Google Maps API anahtarı alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleMapsKey();
  }, []);

  return (
    <GoogleMapsContext.Provider value={{ apiKey, loading }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);
