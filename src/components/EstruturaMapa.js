import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect } from 'react';
export default function EstruturaMapa() {
  //crio uma primeira farmacia para que no primeiro uso, o usuario tenha algo para visualizar no mapa
  let primeiraFarmacia = [{
    id: Math.random(),
    razao: "DROGARIA E FARMACIA CATARINENSE S.A.",
    cnpj: "03571509000182",
    nome: "DROGARIA CATARINENSE",
    email: "administracao@drogariacatarinense.com.br",
    telefone: "(47) 97461-9940",
    celular: "(47) 97461-9940",
    cep: "89201400",
    logradouro: "Rua 9 de Marco",
    numero: "638",
    bairro: "Centro",
    cidade: "Joinville",
    estado: "SC",
    complemento: "",
    latitude: "-26.3012762",
    longitude: "-48.8495388",
  }];
  let listaFarmacias=''
  //faco uma verificacao para saber se ja existe algo no localstorage, se existir eu carrego, se nao eu envio uma farmacia para criar ele.
  //esse comando ira rodar apenas uma vez, quando o app eh criado.
    if (localStorage.getItem("ListaFarmacias")) {
      console.log(`As farmacias cadastradas foram carregadas`);       
     listaFarmacias = JSON.parse(localStorage.getItem("ListaFarmacias"))     
    } else {
      localStorage.setItem("ListaFarmacias", JSON.stringify(primeiraFarmacia));
    }
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h4>Mapa de Farmácias</h4>
      <MapContainer
        center={[-26.3012762, -48.8495388]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "900px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {listaFarmacias.map((farmacia) => (
          <Marker position={[farmacia.latitude, farmacia.longitude]}>
            <Popup>
              <h6>{farmacia.nome}</h6>
              <span><b>Razão Social:</b> {farmacia.razao}</span><br/>
              <span><b>CNPJ:</b> {farmacia.cnpj}</span><br/>
              <span><b>Endereço:</b> {farmacia.logradouro},{farmacia.numero} - {farmacia.bairro} - {farmacia.cidade}/{farmacia.estado}</span><br/>             
              {farmacia.complemento ? <span><b>Complemento:</b> {farmacia.complemento}<br/></span>: null }
              <span><b>E-mail:</b> {farmacia.email}</span><br/>
              {farmacia.telefone ? <span><b>Telefone:</b> {farmacia.telefone}<br/></span>: null }
              <span><b>Celular:</b> {farmacia.celular}</span><br/>
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  )
}
