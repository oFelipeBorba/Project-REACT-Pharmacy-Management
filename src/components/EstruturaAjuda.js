export default function EstruturaAjuda() {
  return (
    <div className="container pt-5">
      <div className="mt-5 p-4 ">
        <h4>Perguntas Frequentes</h4>
        <p>
          Ficou com alguma dúvida e está precisando de ajuda? Veja abaixo uma
          lista das perguntas mais frequentes:
        </p>
        <br />
        <div className="accordion" id="accordionFaq">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Problema ao realizar login
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionFaq"
            >
              <div className="accordion-body">
                Para realizar login no Pharmacy Management o usuário deverá
                preencher um e-mail válido, sem se esquecer do '@' e da extensão
                '.com' ou '.com.br'. Além disso, no campo "Senha" é necessário
                informar uma senha com no mínimo 8 caracteres, que contenha pelo
                menos 1 letra e 1 número.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Problema relacionado ao cadastro de nova farmácia
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionFaq"
            >
              <div className="accordion-body">
                Para o cadastro correto de uma nova farmácia o usuário deverá
                preencher todos os campos do formulário disponível em "Cadastro
                de Farmácias" com exceção apenas do "Telefone" e "Complemento"
                que não são obrigatórios. O campo do "CEP" deverá ser preenchido
                apenas com números, sem caracteres especiais. Em alguns casos os
                dados relacionados ao CEP não serão preenchidos automáticamente,
                como logradouro e bairro, isso se da pelo fato de que alguns
                CEP's são gerais, existindo para uma região com diferentes ruas
                e bairros. Nessa situação o usuário deverá realizar o
                preenchimento manual desses campos.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Problema relacionado ao cadastro de novo medicamento
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionFaq"
            >
              <div className="accordion-body">
                Para o cadastro correto de um novo medicamento todos os campos
                deverão ser preenchidos, com exceção da descrição que não é
                obrigatória. Importante se atentar para o campo "Tipo de
                Medicamento" que vem com valores pré preenchidos e configuram
                uma informação importante relacionada ao medicamento a ser
                cadastrado.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Problema relacionado ao mapa
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionFaq"
            >
              <div className="accordion-body">
                Para o desenvolvimento e visualização do mapa, foram realizadas
                no desenvolvimento do Pharmacy Management diferentes integrações
                com APIs de terceiros, desse modo existe a possibilidade de
                alguns desses serviços estarem fora do ar. Caso todos os dados
                tenham sido preenchidos corretamente no ato de cadastro de uma
                nova farmácia e ainda assim as informações não aparecerem
                automáticamente no mapa, essa possibilidade deverá ser
                considerada. Além disso, uma das APIs usa informações de
                latitude e longitude, por meio do Geocoding Google, para que
                esses dados sejam gerados é necessário ter preenchido uma KEY no
                arquivo JSX "CadastraFarmacia", essa chave deverá ser solicitada
                ao desenvolvedor do Pharmacy Management.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
