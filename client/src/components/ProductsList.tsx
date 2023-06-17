import currencyFormatter from '../utilities/currencyFormatter';
import { Link } from 'react-router-dom';
import useUrlArray from '../utilities/hooks/useUrlArray';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../data/cartSlice';
import { Item } from '../utilities/types/types';


function Products() {

  const [limitNum, setLimitNum] = useState(6);
  const [quantity, setQuantity] = useState(1);

  const url = `http://localhost:5000/api/products?limit=${limitNum}`;
  const { data } = useUrlArray(url);
  const { data: allProducts } = useUrlArray('http://localhost:5000/api/products');

  const dispatch = useDispatch();

  const handleClick = (item: Item) => {
    
    dispatch(addToCart({...item, quantity}))
  }

   return (
    <>
    <div className='products'>

      {data && data.map(item => (

        // <Link to={`/products/${item._id}`}>
          <div 
          key={item._id}
          onMouseOver={ item.images.length > 1 ? 
            (e => ((e.currentTarget.children[0] as HTMLImageElement).src = item.images[1]))
            : (
              e => ((e.currentTarget.children[0] as HTMLImageElement).src = item.images[0])
            )} 

          onMouseLeave={ e => ((e.currentTarget.children[0] as HTMLImageElement).src  = item.images[0])} 
          className='product'
          >
            <img src={item.images[0]}  alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <h4>{currencyFormatter(item.price)}</h4>
            <button onClick={() => handleClick(item)}>Add to cart</button>
          </div>
        // </Link>
      ))}

    </div>

    { data && allProducts && data.length < allProducts.length && <div 
    className="load-more" 
    onClick={() => setLimitNum(prevNum => prevNum + 4)}
    style={{border: "1px solid red", cursor: 'pointer', padding: 10}}
    >Load more...</div> }
    </>
  )
}


export default Products;