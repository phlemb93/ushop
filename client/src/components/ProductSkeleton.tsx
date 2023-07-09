
const ProductSkeleton = () => {
    return (
      <div className="product-skeleton">
        <div className="left">
          <div className="img"></div>
          <div className="small-imgs">
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="right">

          <div className="top">
              <div className="title"></div>
              <div className="desc"></div>
          </div>

          <div className="item">

            <div className="top-btns">
                <div className="btn"></div>
                <div className="btn"></div>
            </div>
           
            <div className="desc"></div>

            <div className="circles">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="price"></div>

            <div className="bottom-btns">
                <div className="btn"></div>
                <div className="btn"></div>
            </div>
          </div>

        </div>
      </div>
    )
  }
  
  export default ProductSkeleton