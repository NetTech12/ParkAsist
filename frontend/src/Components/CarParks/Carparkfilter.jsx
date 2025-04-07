import { useCarparkContext } from "../../Context/CarparkContext";

const CarparkFilter = () => {
  const { carparks, selectedCity, setSelectedCity, selectedDistrict, setSelectedDistrict } = useCarparkContext();

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedDistrict(""); // İlçe seçimini sıfırla
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-2 mb-4">
      <select
        className="py-2 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-600 dark:text-white"
        onChange={handleCityChange}
        value={selectedCity}
      >
        <option value="">Şehir Seçin</option>
        {[...new Set(carparks.map((carpark) => carpark.city))]
          .sort((a, b) => a.localeCompare(b, "tr"))
          .map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>

      {/* İlçe Seçimi */}
      <select
        className="py-2 px-4 border border-gray-300  rounded-md focus:ring-2 focus:ring-blue-400 disabled:bg-gray-200 dark:bg-gray-600 dark:text-white"
        onChange={(e) => setSelectedDistrict(e.target.value)}
        value={selectedDistrict}
        disabled={!selectedCity}
      >
        <option value="">Tüm İlçeler</option>

        {[...new Set(carparks.filter((carpark) => carpark.city === selectedCity).map((carpark) => carpark.district))]
          .sort((a, b) => a.localeCompare(b, "tr"))
          .map((district) => (
            <option  key={district} value={district}>
              {district}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CarparkFilter;
