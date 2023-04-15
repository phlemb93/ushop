import { useEffect, useState }  from 'react';

import Product from './Product';

type Item = {
  id: number
  title: string
  category: string
  brief: string
  color: string
  price: number
  images: string []
}

function Products() {
  const [data, setData] = useState<null | Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const url = "http://localhost:3000/products";

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(items => {
      setData(items)
      setIsLoading(false)
    })
    .catch(err => {
      setData([])
      setIsLoading(false)
      setError(err)
    });

  }, [])

  return (
    <div className='products'>

      {data?.map(item => (
        <div onMouseOver={e => ((e.currentTarget.children[0] as HTMLImageElement).src = item.images[1] )} onMouseLeave={e => ((e.currentTarget.children[0] as HTMLImageElement).src  = item.images[0])} key={item.id} className='product'>

          <img style={{width:'200px', height:'150px'}} src={item.images[0]}  alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.brief}</p>
          <h4>{item.price}</h4>
          <button>Add to cart</button>

        </div>
      ))}
    </div>
  )
}


export default Products;