import PropTypes from 'prop-types';

const Card = ({id, image, title, category, rate, price, onClick}) => {
  return (
    <div className="card">
      <div className='card-img-div'>
        <img className="card-img" src={image} alt={id} />
      </div>
      <div className='card-details-div'>
        <h3 className='card-details-title'>{title}</h3>
        <p><span className="card-points">Category: </span>{category}</p>
        <p><span className="card-points">Rating: </span>{rate}/5</p>
        <h4 className='card-price'>${price}</h4>
        <div className='card-buttons'>
          <button onClick={onClick}>Add to Cart</button>
        </div>
      </div>
      
    </div>
  )
}

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