
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
                    <li className="nav-items"><a className="nav-links" href="">Home</a></li>
                    <li className="nav-items"><a className="nav-links" href="">Shop Now</a></li>
                    <li className="nav-items"><a className="nav-links" href="">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
