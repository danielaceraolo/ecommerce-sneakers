import { Button } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext";
import CartItem from './../CartItem/CartItem';

const CartList = () => {
    const { cartList, deleteCart } = useCartContext();

    return (
        <div>
            <ul className="d-flex flex-column justify-content-center align-items-center shadow-lg p-3 mb-5 bg-white rounded">
                {cartList.map((product) => (
                    <CartItem product={product} key={product.id} />
                ))}
            </ul>
            <Button
                className="btn btn-dark btn-outline-danger border-dark shadow-lg p-3 mb-5 rounded"
                onClick={deleteCart}>
                Vaciar carrito
            </Button>
        </div>
    );

};

export default CartList