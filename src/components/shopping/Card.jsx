import PropTypes from 'prop-types';

const Card = ({id, image, title, category, rate, price}) => {
  return (
    <div className="card">
      <div className='card-img-div'>
        <img className="card-img" src={image} alt={id} />
      </div>
      <div className='card-details-div'>
        <h3>{title}</h3>
        <p><span className="card-points">Category: </span>{category}</p>
        <p><span className="card-points">Rating: </span>{rate}/5</p>
        <h4>{price}</h4>
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
}

export default Card
