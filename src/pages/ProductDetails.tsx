import { useParams } from "react-router-dom"
import useUrl from "../utilities/hooks/useUrl";
import { Item } from "../utilities/types/types";


function Product() {

  const { id } = useParams();

  const url = `http://127.0.0.1:3000/products/${id}`;

  const { data, isLoading, error} = useUrl(url);

  return (
        <div className='item'>
          <div className="images">
            <div className="main-image">
              <img src={data?.images[2]} alt={data?.title} />
            </div>
            <div className="minor-images">
              <img className="image" src={data?.images[1]} alt={data?.title} />
              <img className="image" src={data?.images[0]} alt={data?.title} />
            </div>
          </div>

          <div className="content">
            <div className="content-top">
              <h2>{ data?.title }</h2>
              <p>{ data?.brief }</p>
            </div>
 
            <div className="details">
              <div className="head">
                <p>Options</p>
                <p>Dimensions</p>
              </div>
              <div className="body">

                <div className="fabric">
                  <p>Fabric: <span>Midnight Blue</span></p>
                  <div className="options">
                    <div className="blue"></div>
                    <div className="gray"></div>
                    <div className="green"></div>
                  </div>
                </div>

                <div className="arms">
                  <p>Arms: <span>Included</span></p>
                  <div className="options">
                    <div className="included">Included</div>
                    <div className="not-included">Not Included</div>
                  </div>
                </div>

                <div className="display">
                  <div className="top">
                    <p>with code:<span>BH20</span></p>
                  </div>

                    <p>Price: {data?.price}</p>
                  <div className="btn">
                    <p>Add to Basket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default Product