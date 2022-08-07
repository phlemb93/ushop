import { Link } from 'react-router-dom'

export const ItemsList = ({ category, description, image, price, title, rating, id }) => {
    console.log(id)

    return (
        <Link to={`/products/${id}`}>
            <div className='item'>
                <img style={{height:'200px', width: '200px'}} src={image} alt={title}/>
                <h3>{title}</h3>
                <h3>{price}</h3>
            </div>
        </Link>
    )
}
