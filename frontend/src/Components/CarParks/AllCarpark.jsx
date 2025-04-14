import React, { useEffect, useRef } from "react";
import { useCarparkContext } from "../../Context/CarparkContext";
import { useGoogleMaps } from "../../Context/GoogleMapsContext";

const AllCarparkMap = ({ initialPosition }) => {
  const { filteredCarparks } = useCarparkContext();
  const { apiKey, loading } = useGoogleMaps();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const infoWindowRef = useRef(null);
  const scriptLoadedRef = useRef(false); // script yüklendi mi kontrolü

  // ✅ Sadece script yüklemek için
  useEffect(() => {
    if (loading || !apiKey || scriptLoadedRef.current) return;

    const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    const handleScriptLoad = () => {
      scriptLoadedRef.current = true;
      if (filteredCarparks.length > 0 && !mapInstanceRef.current) {
        initMap();
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;
      script.onload = handleScriptLoad;
      document.head.appendChild(script);
    } else {
      scriptLoadedRef.current = true;
      if (filteredCarparks.length > 0 && !mapInstanceRef.current) {
        initMap();
      }
    }
  }, [apiKey, loading]);

  //  Filtre değişince marker’ları güncelle
  useEffect(() => {
    if (scriptLoadedRef.current && mapInstanceRef.current) {
      updateMarkers();
    }
  }, [filteredCarparks]);

  const initMap = () => {
    if (!window.google || filteredCarparks.length === 0) return;

    const initialLatLng = {
      lat: parseFloat(filteredCarparks[0].latitude || initialPosition[0]),
      lng: parseFloat(filteredCarparks[0].longitude || initialPosition[1]),
    };

    const map = new window.google.maps.Map(mapRef.current, {
      center: initialLatLng,
      zoom: 12,
    });

    mapInstanceRef.current = map;
    infoWindowRef.current = new window.google.maps.InfoWindow();

    updateMarkers();
  };

  const updateMarkers = () => {
    if (!mapInstanceRef.current) return;
  
    if (window.allMarkers) {
      window.allMarkers.forEach(marker => marker.setMap(null));
    }
    window.allMarkers = [];
  
    const bounds = new window.google.maps.LatLngBounds();
    const map = mapInstanceRef.current;
  
    filteredCarparks.forEach((carpark) => {
      const lat = parseFloat(carpark.latitude);
      const lng = parseFloat(carpark.longitude);
      const hasValidCoords = !isNaN(lat) && !isNaN(lng);
  
      // Marker ikonu: özel olanlar kırmızı, diğerleri varsayılan
      const markerIcon = {
        url: carpark.special
          ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          scaledSize: new window.google.maps.Size(45, 40), // 📏 
      };
      
      if (hasValidCoords && (lat === 0 || lng === 0)) {
        const marker = new window.google.maps.Marker({
          position: { lat: 41.0122, lng: 28.976 },
          map,
          title: carpark.name + " (Adres Yok)",
          icon: markerIcon,
        });
  
        marker.addListener("click", () => {
          infoWindowRef.current.setContent(
            `<div style="padding:8px; font-size:14px; font-weight:bold;">
              ${carpark.name}
            </div>
            <div style="color:red; margin-top:6px;">Adres bilgisi bulunmamaktadır.</div>`
          );
          infoWindowRef.current.open(map, marker);
        });
  
        window.allMarkers.push(marker);
        return;
      }
  
      if (hasValidCoords) {
        const position = { lat, lng };
        const marker = new window.google.maps.Marker({
          position,
          map,
          title: carpark.name,
          icon: markerIcon,
        });
  
        marker.addListener("click", () => {
          infoWindowRef.current.setContent(
            `<div style="padding:8px; font-size:14px; font-weight:bold; color:black">
              ${carpark.name}
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" 
              target="_blank" 
              style="display:block; text-align:center; background:#007bff; color:white; padding:6px; margin-top:5px; border-radius:4px; text-decoration:none;">
              Yol Tarifi Al
            </a>`
          );
          infoWindowRef.current.open(map, marker);
        });
  
        bounds.extend(position);
        window.allMarkers.push(marker);
      }
    });
  
    if (!bounds.isEmpty()) {
      map.fitBounds(bounds, { padding: 20 });
      map.setZoom(Math.min(map.getZoom(), 14));
    }
  };
  

  if (filteredCarparks.length === 0) {
    return <p className="text-gray-600 mt-4">Lütfen şehir ve ilçe seçiniz veya geçerli park yeri verisi yok.</p>;
  }

  return (
    <>
     <div>
      <p className=" text-gray-600 my-8 font-bold text-xl">Harita üzerinde ÖZEL otoparklar kırmızı , İSPARK otoparkları mavi olarak  görüntülenmektedir.</p>
    </div>
    <div className="mt-8 p-16 bg-gray-100 rounded-lg relative dark:bg-gray-600 dark:text-white">
      <div ref={mapRef} style={{ height: "600px", width: "100%" }} />
    </div>
    </>
   
  );
};

export default AllCarparkMap;
