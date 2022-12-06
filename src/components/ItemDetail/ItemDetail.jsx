import { useCartContext } from './../../context/CartContext';
import Counter from './../Counter/Counter';

import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
    const { addToCart } = useCartContext()
    const onAdd = (quantity) => {
        addToCart({ ...product, quantity })
    }

    return (
            <div className="container">
            <div className="row shadow p-3 mb-5 bg-white rounded">
                <div className="products col justify-content-center align-items-center text-center shadow p-3 mb-5 bg-white rounded">
                    <img src={product.img} className='w-50' />
                    <p>{product.name}.</p>
                    <p>$ {product.price}</p>
                </div>
                <div className="products col text-center p-1 m-1 ">
                    <Counter stock={5} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
