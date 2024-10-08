
const ShimmerProductInfo = () => {
    const shimProductArr = new Array(8).fill("");
  return (
    <div className="container shimmer-productInfo-container">
        <div className="shimmer-product-mainDiv">
            <div className="shimmer-product-upper"></div>
            <div className="shimmer-product-lower">
                <ul className="shimmer-productInfo-list">
                    {shimProductArr.map((item, i)=> 
                        <li className="shimmer-productInfo-items" key={i}></li>
                    )}
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default ShimmerProductInfo
