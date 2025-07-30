import "./Product.css"
import Price from './Price.jsx'

function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "559"]
    let newPrices = ["8,999", "9,199", "899", "278"]
    let description = [
        ["8,000 PI","5 Programmable Buttons"],["Intutive Surface","Intutive Surface"],["Designed for Ipad Pro","Designed for Ipad Pro"],["WireLess","WireLess"]
    ];
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    )
}

export default Product
