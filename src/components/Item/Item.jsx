import { memo } from "react"
import { Link } from "react-router-dom"

const Item = memo(({item}) => {

    return (
        <div className='card w-50 mt-2'>
            <Link to={`/detail/${item.id}`}>
                <div className='card-header'>
                    {item.name}
                </div>
                <div className='card-body'>
                    <center>
                        <img src={item.img} className="w-50" />
                    </center>
                </div>
                <div className='card-footer'>
                    categoria: {item.category}
                    <hr />
                    precio: {item.price}
                </div>
            </Link>
        </div>
    )
})

export default Item