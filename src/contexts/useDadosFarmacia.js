import { createContext, useContext, useState } from "react";
const DadosFarmaciaContext = createContext();
const DadosFarmaciaProvider = ({ children }) => {
  //reservado para receber o valor do input de CEP
  const [cepInformado, setCepInformado] = useState("");
  //reservado para receber a latitude e longitude, utilizado em diferentes paginas
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
