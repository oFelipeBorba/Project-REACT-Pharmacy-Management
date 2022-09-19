import { useState } from "react";
export default function FormCadastraMedicamento() {
  //objeto reservado para montar um medicamento que apos validacao sera enviado para lista de medicamentos.
  const [medicamento, setMedicamento] = useState({
    id: Math.random(),
  });
  //variavel reservada para montar a lista completa dos medicamentos e enviar para localStorage
  let listaMedicamentos = JSON.parse(localStorage.getItem("ListaMedicamentos"));
  //funcao que armazena no array o novo medicamento criado e envia para o localstorage
  function armazenaMedicamento() {
    listaMedicamentos.push(medicamento);
    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(listaMedicamentos)
    );
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <form
          className="row g-3 p-4 rounded-3"
          onSubmit={armazenaMedicamento}          
          style={{ backgroundColor: "#e9ecef" }}
        >
          <h4>Cadastro de novo Medicamento</h4>
          <fieldset className="col-md-6">
            <label for="inputMedicamento" className="form-label">
              Medicamento
            </label>
            <input
              value={medicamento.medicamento}
              type="text"
              className="form-control"
              id="inputMedicamento"
              placeholder="Informe o nome do medicamento"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, medicamento: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6">
            <label for="inputLaboratorio" className="form-label">
              Laboratório
            </label>
            <input
              value={medicamento.laboratorio}
              type="text"
              className="form-control"
              id="inputLaboratorio"
              placeholder="Informe o laboratório"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, laboratorio: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-4">
            <label for="inputDosagem" className="form-label">
              Dosagem
            </label>
            <input
              value={medicamento.dosagem}
              type="text"
              className="form-control"
              id="inputDosagem"
              placeholder="Informe a dosagem"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, dosagem: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-4">
            <label for="inputPreco" className="form-label">
              Preço Unitário
            </label>
            <input
              value={medicamento.preco}
              type="text"
              className="form-control"
              id="inputPreco"
              placeholder="Informe o preço unitário"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, preco: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-4">
            <label for="inputTipo" className="form-label">
              Tipo de medicamento
            </label>
            <select
              id="inputTipo"
              className="form-select"
              aria-label="Selecione o tipo do medicamento"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, tipo: e.target.value })
              }
            >
              <option selected></option>
              <option value="Medicamento controlado">
                Medicamento controlado
              </option>
              <option value="Medicamento comum">Medicamento comum</option>
            </select>
          </fieldset>
          <fieldset className="col-md-12">
            <label for="inputDescricao" className="form-label">
              Descrição
            </label>
            <textarea
              value={medicamento.descricao}
              className="form-control"
              id="inputDescricao"
              rows="5"
              maxLength={870}
              onChange={(e) =>
                setMedicamento({ ...medicamento, descricao: e.target.value })
              }
            ></textarea>
          </fieldset>
          <div className="d-grid gap-1 d-md-flex justify-content-md-end">
            <input
              value="Limpar"
              type="reset"
              className="btn btn-secondary me-md-1"
              onClick={() => {
                document.location.reload(true);
              }}
            />
            <input
              value="Cadastrar"
              type="submit"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
