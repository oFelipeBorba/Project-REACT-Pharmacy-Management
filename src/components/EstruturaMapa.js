import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function EstruturaMapa() {
  //Crio uma primeira farmacia para que no primeiro uso, o usuario tenha algo para visualizar no mapa
  let primeiraFarmacia = [
    {
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
    },
  ];
  //Crio um primeiro medicamento para que no primeiro uso, o usuario tenha algo para visualizar na pagina de medicamentos cadastrados
  let primeiroMedicamento = [
    {
      id: Math.random(),
      medicamento: "Repoflor",
      dosagem: "100mg",
      laboratorio: "Legrand",
      tipo: "Medicamento comum",
      descricao:
        "Repoflor é indicado na restauração da flora intestinal biológica e também como auxiliar no tratamento da diarreia causada pelo Clostridium difficile, em decorrência do uso de antibióticos e quimioterápicos. As cápsulas de Repoflor devem ser ingeridas inteiras, sem mastigar, com um pouco de líquido. Para crianças pequenas ou pessoas com dificuldades de engolir, recomenda-se abrir as cápsulas, adicionando-se o conteúdo a líquidos, mamadeiras ou alimentos. Uma vez abertas, as cápsulas devem ser consumidas imediatamente. Não adicionar o produto a líquidos ou alimentos quentes (temperatura acima de 60ºC) ou gelados, assim como a bebidas alcoólicas. Repoflor deve ser tomado de preferência em jejum ou meia hora antes das refeições. No caso de pacientes durante tratamento com antibióticos ou quimioterápicos, ingerir Repoflor um pouco antes desses agentes.",
      preco: "25,47",
    },
  ];
  let listaFarmacias = "";  
  //Faco uma verificacao para saber se ja existe algo no localstorage
  //Se existir eu faco get, se nao eu armazeno a primeira farmacia e primeiro medicamento no localStorage
  if (localStorage.getItem("ListaFarmacias")) {
    console.log(`As farmacias cadastradas foram carregadas`);
    listaFarmacias = JSON.parse(localStorage.getItem("ListaFarmacias"));
  } else {
    localStorage.setItem("ListaFarmacias", JSON.stringify(primeiraFarmacia));
  }
  if (localStorage.getItem("ListaMedicamentos")) {
    console.log(`Os medicamentos cadastrados foram carregadas`);
  } else {
    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(primeiroMedicamento)
    );
  }
  return (
    <div className="row align-items-center mt-3 vh-100 ms-n5" style={{position: "fixed"}}>
      <div
        className="mt-4 pt-4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MapContainer
          center={[-26.3012762, -48.8495388]}
          zoom={6}
          scrollWheelZoom={true}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {listaFarmacias.map((farmacia) => (
            <Marker position={[farmacia.latitude, farmacia.longitude]} key={farmacia.id}>
              <Popup>
                <h6>{farmacia.nome}</h6>
                <span>
                  <b>Razão Social:</b> {farmacia.razao}
                </span>
                <br />
                <span>
                  <b>CNPJ:</b> {farmacia.cnpj}
                </span>
                <br />
                <span>
                  <b>Endereço:</b> {farmacia.logradouro},{farmacia.numero} -{" "}
                  {farmacia.bairro} - {farmacia.cidade}/{farmacia.estado}
                </span>
                <br />
                {farmacia.complemento ? (
                  <span>
                    <b>Complemento:</b> {farmacia.complemento}
                    <br />
                  </span>
                ) : null}
                <span>
                  <b>E-mail:</b> {farmacia.email}
                </span>
                <br />
                {farmacia.telefone ? (
                  <span>
                    <b>Telefone:</b> {farmacia.telefone}
                    <br />
                  </span>
                ) : null}
                <span>
                  <b>Celular:</b> {farmacia.celular}
                </span>
                <br />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
