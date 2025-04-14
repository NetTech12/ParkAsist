import { useCarparkContext } from "../../Context/CarparkContext";
import CarparkFilter from "../../Components/CarParks/Carparkfilter";
import CarparkList from "../../Components/CarParks/CarparkList";
import CarparkDetail from "../../Components/CarParks/CarparkDetail";
import AllCarparkMap from "../../Components/CarParks/AllCarpark";
import { useEffect } from "react";

const Carpark = () => {
  const { filteredCarparks, selectedCarpark, setSelectedCarpark } = useCarparkContext();

  // Eğer bir otopark seçildiyse, onun konumunu kullan
  const initialPosition = selectedCarpark 
    ? [selectedCarpark.latitude, selectedCarpark.longitude] 
    : [ 41.0122, 28.976]; 

  useEffect(() => {
    setSelectedCarpark(null);
  }, [filteredCarparks, setSelectedCarpark]);

  return (
    <div className="container mx-auto min-h-screen py-20 px-6 md:px-16">
      <h1 className="!font-normal text-[var(--primary)] mb-3 text-start">Size En Yakın Otoparkı Bulun..!</h1>
      <CarparkFilter />
      
      
      {!selectedCarpark && filteredCarparks.length > 0 && <AllCarparkMap initialPosition={initialPosition} />}

      {selectedCarpark && <CarparkDetail />}
      <div className="mt-8">
        <CarparkList />
      </div>
    </div>
  );
};

export default Carpark;
