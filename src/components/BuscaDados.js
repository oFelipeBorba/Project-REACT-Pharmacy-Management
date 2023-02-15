export default function BuscaDados() {
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

  // useEffect(()=>{
  //   fetch('http://localhost:8080/farmacia')
  // });

  //Faco uma verificacao para saber se ja existe algo no localstorage
  //Caso nao exista eu armazeno a primeira farmacia e primeiro medicamento no localStorage
  if (localStorage.getItem("ListaFarmacias")) {
    console.log(`As farmacias cadastradas foram carregadas com sucesso`);
  } else {
    localStorage.setItem("ListaFarmacias", JSON.stringify(primeiraFarmacia));
  }
  if (localStorage.getItem("ListaMedicamentos")) {
    console.log(`Os medicamentos cadastrados foram carregados com sucesso`);
  } else {
    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(primeiroMedicamento)
    );
  }
  return console.log(`Dados inicializados com sucesso`);
}
