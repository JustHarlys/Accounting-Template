import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="nav">
      <p>Accounting Template</p>

      <ul className="nav-items">
        <Link to="/"><li className="nav-item">Home</li></Link>
        <Link to="/about"><li className="nav-item">About us</li></Link>
        <Link to="/services"><li className="nav-item">Services</li></Link>
        <Link to="/contact"><li className="nav-item">Contact</li></Link>
      </ul>
    </div>
  )
}

export default Nav