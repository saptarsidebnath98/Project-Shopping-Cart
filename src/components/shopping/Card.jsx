
const Card = ({id, image, title, category, rate, price}) => {
  return (
    <div className="card">
      <div>
        <img className="card-img" src={image} alt={id} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{rate}</p>
        <h4>{price}</h4>
      </div>
    </div>
  )
}

export default Card
