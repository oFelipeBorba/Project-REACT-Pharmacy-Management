import { NavLink } from "react-router-dom";
import logo from "../imagens/logo-pharmacy-management.png";
export default function MenuNavegacao() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: "#31955F"}}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/home"} activeClassName="active-link">
          <img
            src={logo}
            alt=""
            width="43"
            height="43"
            className="d-inline-block align-text-center"
          />
          <b>Pharmacy Management</b>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-end">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link" type='button' to={"/cadastra-farmacia"} activeClassName="active-link">Cadastro de Farmácias</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" type='button' to={"/cadastra-medicamento"} activeClassName="active-link">Cadastro de Medicamentos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" type='button' to={"/lista-medicamentos"} activeClassName="active-link">Lista de Medicamentos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-sm btn-dark border-0 rounded-5 pe-3" type='button' to={"/mapa"} activeClassName="active-link">
                📍 Mapa 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
