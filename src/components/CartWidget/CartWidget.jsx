import { FaShoppingCart } from "react-icons/fa";

import "./CartWidget.css"

function CartWidget() {
    return (
        <FaShoppingCart className="cart" size={30} />
    );
}

export default CartWidget;