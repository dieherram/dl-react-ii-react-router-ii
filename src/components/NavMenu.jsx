import { NavLink } from "react-router-dom"
import logo from "../../src/assets/img/logo.webp"

const NavMenu = () => {
  return (
    <nav className="navbar-container navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/"><img src={logo} alt="imagen logo" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="ms-auto navbar-nav d-flex gap-4">
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "text-danger" : undefined)} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "text-danger" : undefined)} to="/pokemones">Pokemones</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavMenu