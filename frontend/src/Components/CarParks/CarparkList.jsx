import { useCarparkContext } from "../../Context/CarparkContext";

const CarparkList = () => {
  const { filteredCarparks, setSelectedCarpark } = useCarparkContext();

  return (
    <>
      {filteredCarparks.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCarparks.map((carpark) => (
            <li
              key={carpark.id}
              className="p-8 bg-white shadow-md rounded-md flex flex-col justify-center items-center cursor-pointer dark:bg-gray-600 dark:text-white"
              onClick={() => setSelectedCarpark(carpark)}
            >
              <p className="text-lg font-semibold">{carpark.name}</p>
              <p className="text-gray-500 dark:text-gray-400" >
                {carpark.district}, {carpark.city}
              </p>
              {carpark.barrier && <p className="text-sm text-green-500">{carpark.barrier}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 mt-4 text-start">Lütfen şehir ve/veya ilçe seçiniz.</p>
      )}
    </>
  );
};

export default CarparkList;
