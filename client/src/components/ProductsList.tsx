import currencyFormatter from '../utilities/currencyFormatter';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from '../data/cartSlice';
import { Item, useAppDispatch } from '../utilities/types/types';
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import { useProductsContext } from '../utilities/contexts/productsContext';


function Products({ limitProducts }: any ) {

  const { allProducts, isLoading, setNewLimit  } = useProductsContext();
  const [quantity, setQuantity] = useState(1); 
  
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

      { limitProducts && limitProducts.map((item: Item) => (
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

        <div className="extra">
            <div className="show-limit">
                    <small>Showing <span>{ limitProducts?.length }</span> out of <span>{ allProducts?.length }</span> items</small>
                </div>

            { (allProducts && limitProducts) && limitProducts.length < allProducts.length && <div 
                className="load-more" 
                onClick={ setNewLimit }
                >Load more
            </div> }
        </div>
    </div>
    </>
  )
}


export default Products;