import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../../context/CartContext";

import "../Cart.css"

const CartForm = () => {
    const { cartList, deleteCart, calcTotal, showOrder } = useCartContext();
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: "",
        emailCheck: "",
    });
    const createOrder = (evt) => {
        evt.preventDefault();
        let orden = {};
        orden.buyer = { dataForm };
        orden.total = calcTotal();
        orden.items = cartList.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            totalProductPrice: product.quantity * product.price
        }));

        if (dataForm.email === dataForm.emailCheck) {
            const db = getFirestore();
            const queryCollection = collection(db, "orders");
            addDoc(queryCollection, orden)
                .then((resp) => showOrder(resp.id))
                .catch((err) => console.log(err))
                .finally(() => {
                    setDataForm({
                        name: "",
                        phone: "",
                        email: "",
                        emailCheck: "",
                    });
                    deleteCart();
                });
        } else {
            notify();
        }
    };

    const notify = () =>
        toast.warn("Email incorrecto", {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
        });

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value,
        });
    };

    return (
        <Form onSubmit={createOrder} className="d-flex flex-column justify-content-center align-items-center text-center p-1 m-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="texth2">Realizar Pago</h2>
                        <Form.Group className="m-1" controlId="formBasicEmail">
                            <Form.Label className="texth2">Nombre completo</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleOnChange}
                                name="name"
                                value={dataForm.name}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="m-1" controlId="formBasicEmail">
                            <Form.Label className="texth2">Correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={handleOnChange}
                                name="email"
                                value={dataForm.email}
                            />
                        </Form.Group>
                        <Form.Group className="m-1" controlId="formBasicEmail">
                            <Form.Label className="texth2">Repetir correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={handleOnChange}
                                name="emailCheck"
                                value={dataForm.emailCheck}
                            />
                        </Form.Group>
                        <Form.Group className="m-1" controlId="formBasicEmail">
                            <Form.Label className="texth2">Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleOnChange}
                                name="phone"
                                value={dataForm.phone}
                            />
                        </Form.Group>
                        <Button
                            className="btn btn-dark btn-outline-success border-dark p-2 m-2 texth2"
                            onClick={createOrder}
                            onSubmit={notify}
                        > Finalizar compra
                        </Button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default CartForm;