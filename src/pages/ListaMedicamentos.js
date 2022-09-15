import CardMedicamento from "../components/CardMedicamento";
export default function ListaMedicamentos() {
  let listaMedicamentos = JSON.parse(localStorage.getItem("ListaMedicamentos"));
  return (
    <>
      <div className="row row-cols-4" >
        {listaMedicamentos.map((item) => (
          <CardMedicamento
            descricao={item.descricao}
            medicamento={item.medicamento}
            dosagem={item.dosagem}
            preco={item.preco}
            tipo={item.tipo}
            laboratorio={item.laboratorio}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}
