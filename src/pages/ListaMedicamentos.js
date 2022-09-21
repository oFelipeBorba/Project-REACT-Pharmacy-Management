import MenuNavegacao from "../components/MenuNavegacao";
import CardMedicamento from "../components/CardMedicamento";
import { useState, useEffect } from "react";
export default function ListaMedicamentos() {
  // Declaro uma variavel para receber do localStorage todos os medicamentos ja cadastrados
  let listaMedicamentos = JSON.parse(localStorage.getItem("ListaMedicamentos"));

  // Declaro um useState para receber de inicio a lista de medicamentos, ele sera utilizado para filtrar a pesquisa do usuario
  const [filtrado, setFiltro] = useState(listaMedicamentos);

  // Declaro um useState para receber o que foi digitado pelo usuário
  const [termo, setTermo] = useState("");

  // useEffect ira alterar o valor do filtrado toda vez que o termo digitado mudar
  useEffect(() => {
    // O valor de filtrado sera composto apenas pelos itens da listaMedicamentos que corresponderem ao que foi digitado pelo usuario
    setFiltro(
      listaMedicamentos.filter((item) => {
        if (
          item.medicamento
            .toLocaleLowerCase()
            .indexOf(termo.toLocaleLowerCase()) !== -1
        ) {
          return item;
        } else {
          return false;
        }
      })
    );
  }, [termo]);

  return (
    <>
      <MenuNavegacao />
      <div className="container">
        <div className="row g-3 ps-4 pe-4 pt-5">
          <div className="col-lg-5 col-md-12 mt-5">
            <h4 className="pt-4 mb-0 mt-2">Lista de Medicamentos:</h4>
            <input
              className="form-control mt-3"
              aria-describedby="inputGroup-sizing-sm"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              placeholder="Pesquise o nome do medicamento ..."
            ></input>
          </div>
          <div className="row g-3 mb-5">
            {filtrado.map((item) => {
              return (
                <CardMedicamento
                  key={item.id}
                  descricao={item.descricao}
                  medicamento={item.medicamento}
                  dosagem={item.dosagem}
                  preco={item.preco}
                  tipo={item.tipo}
                  laboratorio={item.laboratorio}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
