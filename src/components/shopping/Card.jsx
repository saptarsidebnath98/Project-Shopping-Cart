import PropTypes from 'prop-types';
import { useContext } from 'react';
import { cartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Card = ({id, image, title, category, rate, price, onClick}) => {

  const cart =  useContext(cartContext);

  return (
    <div className="card">
      <div className='card-img-div'>
        <img className="card-img" src={image} alt={id} loading="lazy"/>
      </div>
      <div className='card-details-div'>
        <h3 className='card-details-title'>{title}</h3>
        <p><span className="card-points">Category: </span>{category}</p>
        <p><span className="card-points">Rating: </span>{rate}/5</p>
        <Link to={`/productInfo/${id}`}className='view-product'>View Product</Link>
        <h4 className='card-price'>{cart.formatToINR(price * 82)}</h4>
        <div className='card-buttons'>
          <button className="addToCartBtn" onClick={() => onClick()}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

//Prop Validation
Card.propTypes = {
  id : PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  rate: PropTypes.number,
  price: PropTypes.number,
  onClick: PropTypes.func,
}

export default Card
