//Pagina inicial da aplicacao, foi utilizado o bootstrap para estilizacao do formulario, utilizado o useState para armazenar o valor
//da senha que esta sendo digitada e entao mostra ao usuario se ja existem 8 caracteres e se ja existe um numero na senha.
//Utilizado modelo RegExp para apenas aceitar o submit quando o usuario digitar pelo menos 1 letra, 1 numero e 8 caracteres no min.
//onSubmit previne o default e acessa a pagina mapa por meio do navigate

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/useLogin";

export default function FormLogin() {
  const navigate = useNavigate();
  const { setLogin } = useLogin();

  const [senha, setSenha] = useState("");

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <form
          autoComplete="off"
          className="col-lg-5 col-md-8 p-4 rounded-3"
          onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);
            navigate("/mapa");
          }}
          style={{ backgroundColor: "#CCE3DE" }}
        >
          <div className="mb-3">
            <h5>Faça Login para acessar o site:</h5>
          </div>
          <fieldset className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              required
              placeholder="Digite o seu e-mail"
            />
          </fieldset>
          <fieldset className="mb-3">
            <label htmlFor="inputSenha" className="form-label ">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="inputSenha"
              required
              placeholder="Digite a sua senha"
              pattern="^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,30}$"
              onChange={(e) => setSenha(e.target.value)}
            />
          </fieldset>
          <fieldset className="mb-3">
            <span>
              <b>Sua senha deve conter pelo menos:</b>
            </span>
            <br />
            <p>{senha.length >= 8 ? "🟢" : "❌"}8 caracteres</p>
            <p>{senha.search(/[a-z]/) !== -1 ? "🟢" : "❌"}1 letra</p>
            <p>{senha.search(/[0-9]/) !== -1 ? "🟢" : "❌"}1 número</p>
          </fieldset>
          <div className="d-grid gap-2 col-6 mx-auto">
            <input value="Entrar" type="submit" className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  );
}
