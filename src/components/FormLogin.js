//Pagina inicial da aplicacao, foi utilizado o bootstrap para estilizacao do formulario, utilizado o useState para armazenar o valor
//da senha que esta sendo digitada e entao mostra ao usuario se ja existem 8 caracteres e se ja existe um numero na senha.
//Utilizado modelo RegExp para apenas aceitar o submit quando o usuario digitar pelo menos 1 letra, 1 numero e 8 caracteres no min.
//onSubmit previne o default e acessa a pagina mapa por meio do navigate

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLogin(){
    const navigate = useNavigate();

    const [senha, setSenha] = useState("");
  
    return (
      <form
        className="col-lg-4"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/mapa");
        }}
      >
        <fieldset className="mb-3">
          <label for="inputEmail" className="form-label">
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
          <label for="inputSenha" className="form-label">
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
          <p>
            {senha.includes("0") |
            senha.includes("1") |
            senha.includes("2") |
            senha.includes("3") |
            senha.includes("4") |
            senha.includes("5") |
            senha.includes("6") |
            senha.includes("7") |
            senha.includes("8") |
            senha.includes("9")
              ? "🟢"
              : "❌"}
            1 número
          </p>
        </fieldset>
        <input value="Entrar" type="submit" className="btn btn-primary" />
      </form>
    );
  }