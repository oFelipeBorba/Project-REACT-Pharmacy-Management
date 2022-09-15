import FormCadastraMedicamento from "../components/FormCadastraMedicamento";
export default function CadastraMedicamento() {
  //crio um primeiro medicamento para que no primeiro uso, o usuario tenha algo para visualizar na pagina de medicamentos cadastrados
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
  let listaMedicamentos = "";
  //faco uma verificacao para saber se ja existe algo no localstorage, se existir eu carrego, se nao eu envio uma farmacia para criar ele.
  //esse comando ira rodar apenas uma vez, quando o app eh criado.
  if (localStorage.getItem("ListaMedicamentos")) {
    console.log(`Os medicamentos cadastrados foram carregadas`);
    listaMedicamentos = JSON.parse(localStorage.getItem("ListaMedicamentos"));
  } else {
    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(primeiroMedicamento)
    );
  }
  return <FormCadastraMedicamento />;
}
