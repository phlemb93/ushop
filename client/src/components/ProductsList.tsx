import currencyFormatter from '../utilities/currencyFormatter';
import { useNavigate } from 'react-router-dom';
import useUrlArray from '../utilities/hooks/useUrlArray';
import { useState } from 'react';
import { addToCart } from '../data/cartSlice';
import { Item, useAppDispatch } from '../utilities/types/types';
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';


function Products() {

  const [limitNum, setLimitNum] = useState(6);
  const [quantity, setQuantity] = useState(1);

  const url = `http://localhost:5000/api/products?limit=${limitNum}`;
  const { data } = useUrlArray(url);
  const { data: allProducts } = useUrlArray('http://localhost:5000/api/products');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { handleCartOpen } = useIsOpenContext();


  const handleClick = (item: Item) => {
    dispatch(addToCart({...item, quantity}))
    handleCartOpen();
  }

   return (
    <>
    <div className='products'>

      {data && data.map(item => (

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
              <img src={item.images[0]}  alt={item.title} onClick={() => navigate(`/products/${item._id}`)} />
              <h1 onClick={() => navigate(`/products/${item._id}`)}>{item.title}</h1>
              <p onClick={() => navigate(`/products/${item._id}`)}>{item.description}</p>
              <h4 onClick={() => navigate(`/products/${item._id}`)}>{currencyFormatter(item.price)}</h4>
          
            <button onClick={() => handleClick(item)}>Add to cart</button>
          </div>

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