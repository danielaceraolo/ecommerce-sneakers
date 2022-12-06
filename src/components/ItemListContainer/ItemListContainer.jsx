import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner";

import "./ItemListContainer.css";

const ItemListContainer = (obj) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dbFirestore = getFirestore()
        const getData = async () => {

            const queryRef = !categoryId
                ? collection(dbFirestore, "items")
                : query(
                    collection(dbFirestore, "items"),
                    where("category", "==", categoryId)
                );
            const response = await getDocs(queryRef);
            const prod = response.docs.map((doc) => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id,
                };

                return newProduct;
            });
            setTimeout(() => {
                setProducts(prod);
                setLoading(false)
            }, 1000)
        };

        getData();
    }, [categoryId])

    return loading ? (
        <h3 className="loading text-center mt-5 p-5">
            <Spinner animation="border" />
        </h3>
    ) : (
        <div className="container text-center">
            <h1 className="subtitle col m-1">Nuestros Productos</h1>
            <div className="cardStyle products row row-cols-1 row-cols-md-3 shadow p-3 mb-5 bg-white rounded">
                {products.map((obj) => (
                    <section key={obj.id}>
                        <Link to={`/detail/${obj.id}`}>
                            <div className="cardStyle card justify-content-center text-center text-dark shadow p-3 mb-5 bg-white rounded">
                                <img
                                    className="cardStyle card-img-top justify-content-center shadow p-3 mb-5 bg-white rounded"
                                    src={obj.img}
                                    alt="foto-product"
                                />

                                <div className="cardStyle card-body justify-content-center shadow p-3 mb-5 bg-white rounded">
                                    {" "}
                                    <h5 className="card-title text-center">{obj.name}</h5>
                                    <p>$ {obj.price}</p>
                                    <button className="selectbtn btn btn-dark">Seleccionar</button>
                                </div>
                            </div>
                        </Link>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
