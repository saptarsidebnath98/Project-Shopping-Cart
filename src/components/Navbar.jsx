import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container nav-container">
            <div className="navbar-logo-header">
                <i className="fa-solid fa-shop" id="nav-logo"></i>
                    <h1><span id="nav-one">One</span> <span id="nav-two">Stop</span> Shopping</h1>
            </div>
            <div>
                <ul className="nav-list">
                    <li className="nav-items"><Link className="nav-links" to="/Project-Shopping-Cart/home">Home</Link></li>
                    <li className="nav-items"><Link className="nav-links" to="/Project-Shopping-Cart/shopping">Shop Now</Link></li>
                    <li className="nav-items"><Link className="nav-links" to="/Project-Shopping-Cart/contacts">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
