import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="nav">
      <p>Accounting Template</p>

      <ul className="nav-items">
        <Link to="/"><li className="nav-item">Inicio</li></Link>
        <Link to="/about"><li className="nav-item">Sobre Nosotros</li></Link>
        <Link to="/services"><li className="nav-item">Servicios</li></Link>
        <Link to="/contact"><li className="nav-item">Contacto</li></Link>
      </ul>
    </div>
  )
}

export default Nav