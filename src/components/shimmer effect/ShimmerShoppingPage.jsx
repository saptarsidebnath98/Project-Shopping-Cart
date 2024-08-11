
const ShimmerShoppingPage = () => {
const shimCardsArr = new Array(20).fill("");

  return (
    <section className="shimmer-shopping">
    <div className="container shimmer-shopping-container">
      {shimCardsArr.map((item, i)=> <div className="shimCard" key={i}>
        <div className="shimCardUpper"></div>
        <div className="shimCardLower">
            <ul className="shimCard-list">
                <li className="shimCard-items"></li>
                <li className="shimCard-items"></li>
                <li className="shimCard-items"></li>
                <li className="shimCard-items"></li>
            </ul>
        </div>
      </div>)}
    </div>
    </section>
  )
}

export default ShimmerShoppingPage
