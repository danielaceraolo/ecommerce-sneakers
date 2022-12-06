import { Alert } from "react-bootstrap";
import { useCartContext } from "../../../context/CartContext"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap' 

import "../Order/Order.css"

const Order = () => {
    const { orderId } = useCartContext();
    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                <div className="col">
        <Alert className="alert" variant="success">
            N° de Orden {orderId}.
            <br />
            Gracias por tu compra!
            
            <Link to="/">
                <Button className="btn btn-success m-5 p-3 justify-content-center align-items-center">
                    Volver al Inicio
                </Button>
            </Link>
        </Alert>
                </div>
            </div>
        </div>
    );
};

export default Order;