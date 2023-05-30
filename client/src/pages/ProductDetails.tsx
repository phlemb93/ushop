import { useParams } from "react-router-dom"
import useUrlSingle from "../utilities/hooks/useUrlSingle";
import currencyFormatter from "../utilities/currencyFormatter";
import { useRef, useState } from "react";


function Product() {

  const { id } = useParams();

  const url = `http://127.0.0.1:3000/products/${id}`;

  const { data, isLoading, error} = useUrlSingle(url);

  const [image1, setImage1] = useState(true)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)

  const dimensionRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLDivElement>(null);

  const handleImg1 = () => {
    setImage1(true)
    setImage2(false)
    setImage3(false)
  }
  const handleImg2 = () => {
    setImage1(false)
    setImage2(true)
    setImage3(false)
  }
  const handleImg3 = () => {
    setImage1(false)
    setImage2(false)
    setImage3(true)
  }
  const handleOptionScroll = () => {
      optionRef.current?.scrollIntoView()
  }
  const handleDimensionScroll = () => {
      dimensionRef.current?.scrollIntoView()
  }



  return (
        <div className='item'>
          <div className="images">
            <div className="main-image">
              <img src={data?.images[0]} alt={data?.title} style={{display: image1 ? 'block' : 'none'}}/>
              <img src={data?.images[1]} alt={data?.title} style={{display: image2 ? 'block' : 'none'}} />
              <img src={data?.images[2]} alt={data?.title} style={{display: image3 ? 'block' : 'none'}}/>
            </div>
            <div className="minor-images">
              <img className="image" src={data?.images[0]} alt={data?.title} onClick={handleImg1} />
              <img className="image" src={data?.images[1]} alt={data?.title} onClick={handleImg2} />
              <img className="image" src={data?.images[2]} alt={data?.title} onClick={handleImg3}  />
            </div>
          </div>

          <div className="content">
            <div className="content-top">
              <h2>{ data?.title }</h2>
              <p>{ data?.brief }</p>
            </div>
 
            <div className="details">
              <div className="head">
                <p onClick={handleOptionScroll}>Options</p>
                <p onClick={handleDimensionScroll}>Dimensions</p>
              </div>

              <div className="body" ref={optionRef}>

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
                    <p>Only { currencyFormatter(data?.price! * 0.8) } with code: <span>BH20</span></p>
                  </div>
                  <p>Price: { currencyFormatter(data?.price!) }</p>
                  <div className="btn">
                    <p>Add to Basket</p>
                  </div>
                </div>

                <div className="dimension" ref={dimensionRef}>
                  <div className="image">
                    <img src="src/assets/images/sofaD.png" alt="sofa-dimension" />
                  </div>
                  <div className="details">
                    <div>
                      <p>External</p>
                      <p>W198.5 x D103 x H98cm</p>
                    </div>
                    <div>
                      <p>Arms</p>
                      <p>W15 x D103 x H68cm</p>
                    </div>
                    <div>
                      <p>Legs</p>
                      <p>H5cm</p>
                    </div>
                    <div>
                      <p>Seat</p>
                      <p>W168.5 x D66 x H54cm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default Product