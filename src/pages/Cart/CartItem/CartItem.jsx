import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useCartContext } from '../../../context/CartContext';

const CartItem = ({ product }) => {
    const { removeFromCart } = useCartContext();
    return (
        <li
            className="d-flex flex-row justify-content-center align-items-center p-2 m-2"
        >
            <Card className="card" style={{ width: "15rem" }}>
                <Card.Img className='cardImg' variant="top" src={`${product.img}`} />
            </Card>
            <h5 className="lead fs-4 m-3 justify-content-center align-items-center">
                {product.name} - $
                {product.price * product.quantity} - Cantidad: {product.quantity}
                <Button
                    className="btn btn-dark btn-outline-danger border-dark m-1 justify-content-center align-items-center m-3 p-3"
                    onClick={() => removeFromCart(product.id)} >
                    X
                </Button>
            </h5>
        </li>
    )
}

export default CartItem