import currencyFormatter from '../utilities/currencyFormatter';
import { Link } from 'react-router-dom';
import useUrlArray from '../utilities/hooks/useUrlArray';


function Products() {

  const url = "http://localhost:5000/api/products";

  const { data, isLoading, error } = useUrlArray(url);

console.log(data)
   return (
    <div className='products'>

      {data && data!.map(item => (

        <Link to={`/${item._id}`}>
          <div 
          onMouseOver={ item.images.length > 1 ? 
            (e => ((e.currentTarget.children[0] as HTMLImageElement).src = item.images[1]))
            : (
              e => ((e.currentTarget.children[0] as HTMLImageElement).src = item.images[0])
            )} 

          onMouseLeave={ e => ((e.currentTarget.children[0] as HTMLImageElement).src  = item.images[0])} 
          key={item._id} className='product'
          >
            <img src={item.images[0]}  alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <h4>{currencyFormatter(item.price)}</h4>
            <button>Add to cart</button>

          </div>
        </Link>
      ))}
    </div>
  )
}


export default Products;