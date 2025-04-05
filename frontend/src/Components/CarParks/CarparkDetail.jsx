import { useCarparkContext } from "../../Context/CarparkContext";
import MapComponent from "./MapComponent";

const CarparkDetail = () => {
  const { selectedCarpark } = useCarparkContext();

  if (!selectedCarpark) return null;

  return (
    <div className="mt-8 p-10 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold">{selectedCarpark.name}</h2>
      <p className="text-gray-600">
        {selectedCarpark.district}, {selectedCarpark.city}
      </p>
      
     <MapComponent  />
    </div>
  );
};

export default CarparkDetail;
