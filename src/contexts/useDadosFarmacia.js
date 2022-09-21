import { createContext, useContext, useState } from "react";
const DadosFarmaciaContext = createContext();
const DadosFarmaciaProvider = ({ children }) => {
  //Reservado para receber o valor do input de CEP, utilizado em diferentes paginas
  const [cepInformado, setCepInformado] = useState("");
  //Reservado para receber a latitude e longitude, utilizado em diferentes paginas
  const [latLng, setLatLng] = useState({
    latitude: "",
    longitude: "",
  });
  return (
    <DadosFarmaciaContext.Provider
      value={{
        cepInformado,
        setCepInformado,
        latLng,
        setLatLng,
      }}
    >
      {children}
    </DadosFarmaciaContext.Provider>
  );
};
const useDadosFarmacia = () => {
  return useContext(DadosFarmaciaContext);
};
export { DadosFarmaciaProvider, useDadosFarmacia, DadosFarmaciaContext };
