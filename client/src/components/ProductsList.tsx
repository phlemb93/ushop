import currencyFormatter from '../utilities/currencyFormatter';
import { Link } from 'react-router-dom';
import useUrl from '../utilities/hooks/useUrl';


function Products() {

  const url = "http://127.0.0.1:3000/products";

  const { data, isLoading, error } = useUrl(url);

  return (
    <div className='products'>

      {data?.map(item => (

        <Link to={`/${item.id}`}>
          <div 
          onMouseOver={e => ((e.currentTarget.children[0] as HTMLImageElement).src = item.images[1] )} 
          onMouseLeave={e => ((e.currentTarget.children[0] as HTMLImageElement).src  = item.images[0])} 
          key={item.id} className='product'
          >
            <img src={item.images[0]}  alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.brief}</p>
            <h4>{currencyFormatter(item.price)}</h4>
            <button>Add to cart</button>

          </div>
        </Link>
      ))}
    </div>
  )
}


export default Products;