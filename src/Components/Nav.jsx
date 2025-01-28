import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="nav">
      <p>Accounting Template</p>

      <ul className="nav-items">
        <Link to="/"><li className="nav-item">Home</li></Link>
        <Link to="/about"><li className="nav-item">About us</li></Link>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  )
}

export default Nav