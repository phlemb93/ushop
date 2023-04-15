import Products from '../components/Products'

function Store() {
  return (
    <div className="store">
        <h1>STORE</h1>

        <div className="content">
            <div className="left">
                <div className="color">
                    <div className="head">
                        <p>Colour</p>
                        <span>-</span>
                    </div>
                    <div className="body">
                        <div>red</div>
                        <div>blue</div>
                        <div>green</div>
                        <div>gray</div>
                    </div>
                </div>
                <div className="collection">
                    <div className="head">
                        <p>Collections</p>
                        <span>-</span>
                    </div>
                    <div className="body">
                        <input type="checkbox" name="armchair" id="" />
                        <input type="checkbox" name="sofa" id="" />
                        <input type="checkbox" name="bundle" id="" />
                        <input type="checkbox" name="accessories" id="" />
                    </div>
                </div>
                <div className="price">
                    <div className="head">
                        <p>Price</p>
                        <span>-</span>
                    </div>
                    <div className="body">
                        <div className="top">
                            <input type="number" name="" id="from" />
                            <span>-</span>
                            <input type="number" name="" id="to" />
                        </div>
                        <div className="bottom">
                            <input type="range" name="" id="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <Products />
            </div>
        </div>
    
    </div>
  )
}

export default Store