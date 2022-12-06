import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import Order from "../Cart/Order/Order"
import CartList from "../Cart/CartList/CartList"
import CartForm from "../Cart/CartForm/CartForm"

import "react-toastify/dist/ReactToastify.css";
import "./Cart.css"

const Cart = () => {
    const { cartList, order } = useCartContext();

    return (
        <>
            {order ? (
                <div className="text-center">
                    <Order />
                </div>
            ) : (
                <>
                    {cartList.length !== 0 ? (
                        <div className="text-center">
                            <h1 className="texth1">Productos seleccionados</h1>
                            <CartList />
                            <CartForm />
                        </div>
                    ) : (
                        <div className="text-center shadow-lg p-3 mb-5 bg-white rounded">
                            <h2 className="texth2 shadow-lg p-3 mb-5 bg-white rounded">No hay productos</h2>
                            <Link to="/">
                                <Button className="btn btn-dark btn-outline-light border-dark m-5">
                                    Volver al Inicio
                                </Button>
                            </Link>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Cart;
