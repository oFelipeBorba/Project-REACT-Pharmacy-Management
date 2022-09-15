import Rotas from "./routes/Rotas.js";
import {DadosFarmaciaProvider} from './contexts/useDadosFarmacia'

export default function App(){
  return (
    <DadosFarmaciaProvider>
    <Rotas />
    </DadosFarmaciaProvider>
  );
}


