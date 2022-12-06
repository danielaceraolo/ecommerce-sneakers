import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InterChange = () => {

    return (
        <>
        <div className="container">
            <div className="row-2">
                <div className="col justify-content-center align-items-center text-center">
            <Link to="/cart">
                <Button className="btn btn-light btn-dark  p-2 m-1">
                    Finalizar la compra
                </Button>
            </Link>
            <Link to="/">
                <Button className="btn btn-light btn-dark p-2 m-1">
                    Seguir comprando
                </Button>
            </Link>
            </div>
            </div>
        </div>
        </>
    );
};

export default InterChange;