import { useEffect, useState } from "react";
import { useDadosFarmacia } from "../contexts/useDadosFarmacia";
import MenuNavegacao from "../components/MenuNavegacao";
import FormCadastraFarmacia from "../components/FormCadastraFarmacia";
export default function CadastraFarmacia() {
  const { cepInformado, setCepInformado, latLng, setLatLng } =
    useDadosFarmacia();

  //recebe a resposta da api viaCep
  const [respostaCep, setRespostaCep] = useState({
    logradouro: "",
    localidade: "",
    uf: "",
    bairro: "",
  });

  //o useEffect aciona toda vez que o valor de cepInformado altera, ele recebe seu valor no onChange do input do CEP.
  //Verifica se ele contem os 8 digitos e faz o fetch com a api viaCep, esse retorno, apos passar por um tratamento de erros,
  //e enviado para a variavel do useRef que preenche os atributos'value' dos inputs de endereco.
  useEffect(() => {
    if (cepInformado.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepInformado}/json/`, { method: "GET" })
        .then((respostaInicial) => {
          return respostaInicial.json();
        })
        .then((infoDoCEP) => {
          setRespostaCep({
            logradouro: infoDoCEP.logradouro,
            localidade: infoDoCEP.localidade,
            uf: infoDoCEP.uf,
            bairro: infoDoCEP.bairro,
          });
          if (infoDoCEP.erro) {
            alert(
              `ATENÇÃO: Para carregar automaticamento os dados do endereço por meio do CEP informado, por favor revise o campo: "CEP". (Ele deve conter 8 dígitos, apenas números)`
            );
            setRespostaCep({
              logradouro: "",
              localidade: "",
              uf: "",
              bairro: "",
            });
          }
        });
    }
  }, [cepInformado]);

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${respostaCep.logradouro},${respostaCep.localidade},${respostaCep.bairro},${respostaCep.uf}&components=country:BR&key=`,
      { method: "GET" }
    )
      .then((respostaInicial) => {
        return respostaInicial.json();
      })
      .then((geocode) => {
        if (respostaCep.localidade !== "") {
          setLatLng({
            latitude: geocode.results[0].geometry.location.lat,
            longitude: geocode.results[0].geometry.location.lng,
          });
        } else {
          setLatLng({
            latitude: "",
            longitude: "",
          });
        }
        setCepInformado("");
      });
  }, [respostaCep]);

  return (
    <>
      <MenuNavegacao />
      <FormCadastraFarmacia
        logradouro={respostaCep.logradouro}
        localidade={respostaCep.localidade}
        bairro={respostaCep.bairro}
        uf={respostaCep.uf}
        lat={latLng.latitude}
        lng={latLng.longitude}
      />
    </>
  );
}
