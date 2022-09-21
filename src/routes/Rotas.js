import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RotaPrivada } from "./RotaPrivada";
import Login from "../pages/Login";
import Mapa from "../pages/Mapa";
import CadastraFarmacia from "../pages/CadastraFarmacia";
import CadastraMedicamento from "../pages/CadastraMedicamento";
import NaoEncontrado from "../pages/NaoEncontrado";
import ListaMedicamentos from "../pages/ListaMedicamentos";
import Ajuda from "../pages/Ajuda";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RotaPrivada />}>
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/cadastra-farmacia" element={<CadastraFarmacia />} />
          <Route
            path="/cadastra-medicamento"
            element={<CadastraMedicamento />}
          />
          <Route path="/lista-medicamentos" element={<ListaMedicamentos />} />
        </Route>
        
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/login" element={<Navigate replace to="/" />} />        
        <Route path="/ajuda" element={<Ajuda />} />
        
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}
