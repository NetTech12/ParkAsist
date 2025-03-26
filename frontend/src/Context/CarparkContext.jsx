import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CarparkContext = createContext();

export const CarparkProvider = ({ children }) => {
  const [carparks, setCarparks] = useState([]);
  const [filteredCarparks, setFilteredCarparks] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCarpark, setSelectedCarpark] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  // Tüm otoparkları API'den çek
  useEffect(() => {
    const fetchAllParks = async () => {
      try {
        const res = await axios.get(`${API_URL}/carparks`);
        setCarparks(res.data);
      } catch (err) {
        console.error("Otopark verileri alınırken hata oluştu:", err);
      }
    };
    fetchAllParks();
  }, []);

  // Şehir ve ilçe seçimine göre filtreleme
  useEffect(() => {
    if (!selectedCity && !selectedDistrict) {
      setFilteredCarparks([]);
      return;
    }

    let filtered = carparks;
    if (selectedCity) {
      filtered = filtered.filter((carpark) => carpark.city === selectedCity);
    }
    if (selectedDistrict) {
      filtered = filtered.filter((carpark) => carpark.district === selectedDistrict);
    }
    setFilteredCarparks(filtered);
  }, [selectedCity, selectedDistrict, carparks]);

  return (
    <CarparkContext.Provider
      value={{
        carparks,
        filteredCarparks,
        selectedCity,
        setSelectedCity,
        selectedDistrict,
        setSelectedDistrict,
        selectedCarpark,
        setSelectedCarpark,
      }}
    >
      {children}
    </CarparkContext.Provider>
  );
};

// 3. Context'i tüketmek için Hook
export const useCarparkContext = () => {
  return useContext(CarparkContext);
};
