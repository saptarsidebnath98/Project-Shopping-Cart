import { Link } from "react-router-dom";

const Header = () => {

  const images = ["coffee", "cycle", "laptop", "ring", "mobile", "shoe", "jacket"];

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
            <div className="header-title">
                <h1 className="header-first">Shop <span className="h-pink">essential</span></h1>
                <p>and</p>
                <h1 className="header-first">Showcase <span className="h-pink">Luxury</span></h1>
            </div>
            <img className="header-img" src="./images/oneStop.png" alt="sale image" />
            <h3 className="famous-for">#World No.1 trusted shopping platform</h3>
            <p className="category-text">Categories</p>
            <div className="header-img-div">
              {images.map((image, index)=> 
              <Link to="/shopping" key={index}>
              <img src={`./images/${image}.png`} alt={`${image} image`} className="header-img-items" loading="lazy"/>
              </Link>)}
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
