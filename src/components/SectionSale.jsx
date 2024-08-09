
const SectionSale = () => {

    const saleArr = new Array(5).fill("")
  return (
    <section className="sale-section">
        <div className="container sale-container">
            {saleArr.map((item, i) => <img key={i} className="sale-img" src="./images/sale.png" alt="sale picture" />)}
            
        </div>
      
    </section>
  )
}

export default SectionSale
