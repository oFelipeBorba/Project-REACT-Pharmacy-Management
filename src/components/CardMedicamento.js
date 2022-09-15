export default function CardMedicamento({
  dosagem,
  medicamento,
  laboratorio,
  preco,
  tipo,
  id,
  descricao,
}) {
  //como o id foi criado com math.randon eu passo ele para outra variavel para tornar uma string, assim consigo diferenciar os modals
  let novoId = id.toString();
  return (
    <>
      <div className="card" style={{ width: "18rem", height: '11rem'}}>
        <div
          className="card-body"
          data-bs-toggle="modal"
          data-bs-target={`#a${novoId.substring(2, 13)}`}
        >
          <h5 className="card-title">{medicamento}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{dosagem}</h6>
          <p className="card-text">
            {descricao.substring(0,47)}...
          </p>
          <div className="d-grid col-6 mx-auto">
          <button className="btn btn-outline-success btn-sm mt-3">
            Saiba mais
          </button>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`a${novoId.substring(2, 13)}`}
        tabindex="-1"
        aria-labelledby={`a${novoId.substring(2, 13)}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`a${novoId.substring(2, 13)}`}>
                Detalhes do medicamento:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <span>
                <b>Medicamento:</b> {medicamento}
              </span>
              <br />
              <span>
                <b>Dosagem:</b> {dosagem}
              </span>
              <br />
              <span>
                <b>Laboratório:</b> {laboratorio}
              </span>
              <br />
              <span>
                <b>Tipo:</b> {tipo}
              </span>
              <br />
              <span>
                <b>Preço:</b> R$ {preco}
              </span>
              <br />
              {descricao ? (
                <span>
                  <b>Descrição:</b> {descricao}
                  <br />
                </span>
              ) : null}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
