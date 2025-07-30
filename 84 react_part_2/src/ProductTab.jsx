import Product from './Product'
import './ProductTab.css'

function ProductTab() {
    
    return (
        <div className='ProductTab'>
            
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil (2nd Gen)" idx={1} />
            <Product title="Zebronics Zeb-Transformer " idx={2} />
            <Product title="Petronic Toad 23" idx={3} />
        </div>
    )
}

export default ProductTab;