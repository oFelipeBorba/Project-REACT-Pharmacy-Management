import MenuNavegacao from "../components/MenuNavegacao";
export default function NaoEncontrado() {
  return (
    <>
      <MenuNavegacao />
      <div className="container mt-3 pt-4">
        <div className="mt-5 pt-4 ">
          <h4>Error 404 - Página não encontrada</h4>
          <p>Desculpe o transtorno porém a página não foi encontrada. Para identificar a raiz do problema para o Error 404, as principais causas dele são:</p>
          <br/>
          <ul>
            <li><b>URL incorreta.</b> Pode ser que a URL (endereço) do site que você esteja querendo acessar tenha sido digitada de forma errada no navegador.</li>
            <li><b>Extensão incompatível.</b> Além da URL, é possível que a extensão (por exemplo, .com.br) não seja a correta para acessar um site.</li>
            <li><b>Página desativada.</b> Essa página que você quer acessar pode ser desativada ou até mesmo excluída. </li>
            <li><b>Servidor instável.</b> Se o servidor da hospedagem da página que você quer visitar estiver instável ou sobrecarregado, é possível que ela não possa ser acessada.</li>
            <li><b>Vírus e Malwares.</b> Quando você baixar e executar algum programa de origem duvidosa, um vírus ou algum tipo de malware infecte o navegador que você usa. Desse jeito, o navegador perde desempenho e não consegue redirecionar os acessos ao servidor do site que você quer visitar.</li>
          </ul>
          <p><i>*Informações obtidas do site: "paracambi.rj.gov.br"</i></p>
        </div>
      </div>
    </>
  );
}
