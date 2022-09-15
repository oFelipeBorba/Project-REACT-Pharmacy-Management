import { useState, useEffect } from "react";
import { useDadosFarmacia } from "../contexts/useDadosFarmacia";
export default function FormCadastraFarmacia({
  logradouro,
  localidade,
  bairro,
  uf,
  lat,
  lng,
}) {
  //faco a desestruturacao para utilizar as variaveis do useDadosFarmacia (context)
  const { cepInformado, setCepInformado } = useDadosFarmacia();
  //variavel local para armazenar provisoriamente os dados dos inputs e depois enviar para lista completa das farmacias
  const [farmacia, setFarmacia] = useState({});

  // crio um arr para receber os dados ja existentes do localStorage 
  let listaFarmacias = JSON.parse(localStorage.getItem("ListaFarmacias"));
  //Como os dados do cep sao recebidos por meio de props e nao pelo onchange, utilizo o useffect para atualizar o valor de farmacia toda vez que o cepInformado for alterado
  useEffect(() => {
    setFarmacia({
      ...farmacia,
      id: Math.random(),
      logradouro: logradouro,
      bairro: bairro,
      cidade: localidade,
      estado: uf,
      latitude: lat,
      longitude: lng,
    });
  }, [cepInformado, bairro, localidade, logradouro, uf, lat, lng]);

  //funcao que armazena no array a nova farmacia criada e envia para o localstorage
  function armazenaFarmacia() {
    listaFarmacias.push(farmacia);
    localStorage.setItem("ListaFarmacias", JSON.stringify(listaFarmacias));
  }

  return (
    //formulario criado com bootstrap e feito modificacoes para responsividade, em cada input existe um onchange que envia valor para var farmacia
    <form
      className="row g-3 me-3 ms-3 mt-3"
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
        armazenaFarmacia();
      }}
    >
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputRazaoSocial" className="form-label">
          Razão Social
        </label>
        <input
          type="text"
          className="form-control"
          id="inputRazaoSocial"
          placeholder="Informe a razão social"
          required
          onChange={(e) => setFarmacia({ ...farmacia, razao: e.target.value })}
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputCNPJ" className="form-label">
          CNPJ
        </label>
        <input
          type="text"
          className="form-control"
          id="inputCNPJ"
          placeholder="00.000.000/0000-00"
          required          
          minLength={14}
          onChange={(e) => setFarmacia({ ...farmacia, cnpj: e.target.value })}
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputNomeFantasia" className="form-label">
          Nome Fantasia
        </label>
        <input
          type="text"
          className="form-control"
          id="inputNomeFantasia"
          placeholder="Informe o nome fantasia"
          required
          onChange={(e) => setFarmacia({ ...farmacia, nome: e.target.value })}
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputEmail" className="form-label">
          E-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="email@email.com"
          required
          onChange={(e) => setFarmacia({ ...farmacia, email: e.target.value })}
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputTelefone" className="form-label">
          Telefone
        </label>
        <input
          type="phone"
          className="form-control"
          id="inputTelefone"
          placeholder="(99) 9999-9999"
          onChange={(e) =>
            setFarmacia({ ...farmacia, telefone: e.target.value })
          }
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputCelular" className="form-label">
          Celular
        </label>
        <input
          type="phone"
          className="form-control"
          id="inputCelular"
          placeholder="(99) 9.9999-9999"
          required
          onChange={(e) =>
            setFarmacia({ ...farmacia, celular: e.target.value })
          }
        />
      </fieldset>
      <fieldset className="col-md-2 col-lg-3">
        <label for="inputCEP" className="form-label">
          CEP
        </label>
        <input
          type="text"
          className="form-control"
          id="inputCEP"
          placeholder="Apenas números {8}"
          pattern="^(?=.*[0-9])[0-9]{8}$"
          required
          onChange={(e) => setCepInformado(e.target.value)}
        />
      </fieldset>
      <fieldset className="col-md-8 col-lg-6">
        <label for="inputTelefone" className="form-label">
          Logradouro
        </label>
        <input
          value={farmacia.logradouro}
          type="phone"
          className="form-control"
          id="inputTelefone"
          placeholder="Rua/Avenida . . ."
          required
          onChange={(e) =>
            setFarmacia({ ...farmacia, logradouro: e.target.value })
          }
        />
      </fieldset>
      <fieldset className="col-md-2 col-lg-3">
        <label for="inputCelular" className="form-label">
          Número
        </label>
        <input
          type="phone"
          className="form-control"
          id="inputCelular"
          placeholder="0000"
          required
          onChange={(e) => setFarmacia({ ...farmacia, numero: e.target.value })}
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputBairro" className="form-label">
          Bairro
        </label>
        <input
          value={farmacia.bairro}
          type="text"
          className="form-control"
          id="inputBairro"
          placeholder="Informe o bairro"
          required
          onChange={(e) => setFarmacia({ ...farmacia, bairro: e.target.value })}
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputCidade" className="form-label">
          Cidade
        </label>
        <input
          value={farmacia.cidade}
          type="text"
          className="form-control"
          id="inputCidade"
          placeholder="Informe a cidade"
          required
          onChange={(e) => setFarmacia({ ...farmacia, cidade: e.target.value })}
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-4">
        <label for="inputEstado" className="form-label">
          Estado
        </label>
        <input
          value={farmacia.estado}
          type="text"
          className="form-control"
          id="inputEstado"
          placeholder="Informe o estado"
          required
          onChange={(e) => setFarmacia({ ...farmacia, estado: e.target.value })}
        />
      </fieldset>
      <fieldset className="col-md-6">
        <label for="inputComplemento" className="form-label">
          Complemento
        </label>
        <input
          type="text"
          className="form-control"
          id="inputComplemento"
          placeholder="Perto do estabelecimento . . . "
          onChange={(e) =>
            setFarmacia({ ...farmacia, complemento: e.target.value })
          }
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-3">
        <label for="inputLatitude" className="form-label">
          Latitude
        </label>
        <input
          value={farmacia.latitude}
          type="text"
          className="form-control"
          id="inputLatitude"
          placeholder="Informe a latitude"
          required
          onChange={(e) =>
            setFarmacia({ ...farmacia, latitude: e.target.value })
          }
        />
      </fieldset>
      <fieldset className="col-md-6 col-lg-3">
        <label for="inputLongitude" className="form-label">
          Longitude
        </label>
        <input
          value={farmacia.longitude}
          type="text"
          className="form-control"
          id="inputLongitude"
          placeholder="Informe a longitude"
          required
          onChange={(e) =>
            setFarmacia({ ...farmacia, longitude: e.target.value })
          }
        />
      </fieldset>
      <div className="d-grid gap-1 d-md-flex justify-content-md-end">
        <input
          value="Limpar"
          type="reset"
          className="btn btn-secondary me-md-1"
        />
        <input value="Cadastrar" type="submit" className="btn btn-primary" />
      </div>
    </form>
  );
}
