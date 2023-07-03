import { useState } from 'react'
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import Products from '../components/ProductsList'
import StoreSkeleton from '../components/StoreSkeleton';
import useUrlArray from '../utilities/hooks/useUrlArray';

//import icon components from material UI
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



function Store() {

    const [limitNum, setLimitNum] = useState(6);
    
    const url = `http://localhost:5000/api/products?limit=${limitNum}`;
    
    const { data: limitProducts } = useUrlArray(url);
    const { data: allProducts, isLoading } = useUrlArray('http://localhost:5000/api/products');

    const { handleFilterOpen } = useIsOpenContext();

    const [color, setColor] = useState(true);
    const [collection, setCollection] = useState(true);
    const [price, setPrice] = useState(true);
    const [productLimit, setProductLimit] = useState(0);

    // const getLimitNum = (value:number) => {
    //     setProductLimit(value)
    // }

    // const incLimit = (setNumLimit:any) => {
    //     setNumLimit(prevState => {

    //     })
    // }

  return (
    <>

    { isLoading ? <StoreSkeleton /> :
    <div className="store">
 
        <div className="top">
            <small>Showing <span>{ limitProducts?.length }</span> out of <span>{ allProducts?.length }</span> items</small>
            <div className="filter">
                <p>Filters</p>
                <div className="filter-icon" onClick={ handleFilterOpen }>
                    <TuneOutlinedIcon />
                </div>
            </div>
        </div>


        <div className="content">
            
            <div className="left">
                <div className="color">
                    <div className="head">
                        <p>Colour</p>
                        <span>
                            <RemoveOutlinedIcon 
                            style={{
                                display: color ? 'flex' : 'none'}}
                            className="remove" 
                            onClick={() => setColor(false)}
                            />

                            <AddOutlinedIcon 
                            style={{
                                display: color ? 'none' : 'flex'}} 
                            className="add" 
                            onClick={() => setColor(true)}
                            />
                        </span>
                    </div>
                   
                    <div className="body" style={{display: color ? 'flex' : 'none'}}>
                        <div className="red"></div>
                        <div className="blue"></div>
                        <div className="green"></div>
                        <div className="gray"></div>
                    </div>
                </div>
               
                <div className="collection">
                    <div className="head">
                        <p>Collections</p>
                        <span>
                            <RemoveOutlinedIcon 
                                style={{
                                    display: collection ? 'flex' : 'none'}}
                                className="remove" 
                                onClick={() => setCollection(false)}
                                />

                                <AddOutlinedIcon 
                                style={{
                                    display: collection ? 'none' : 'flex'}} 
                                className="add" 
                                onClick={() => setCollection(true)}
                            />
                        </span>
                    </div>
                    <div className="body" style={{display: collection ? 'flex' : 'none'}}>
                        <div>
                            <input type="checkbox" name="armchair" />
                            <label>Armchair</label>
                        </div>
                        <div>
                            <input type="checkbox" name="sofa" />
                            <label>Sofa</label>
                        </div>
                        <div>
                            <input type="checkbox" name="bundle" />
                            <label>Bundle</label>
                        </div>
                        <div>
                            <input type="checkbox" name="accessories" />
                            <label>Accessories</label>
                        </div>
                    </div>
                </div>

                <div className="price">
                    <div className="head">
                        <p>Price</p>
                        <span>
                            <RemoveOutlinedIcon 
                                style={{
                                    display: price ? 'flex' : 'none'}}
                                className="remove" 
                                onClick={() => setPrice(false)}
                                />

                                <AddOutlinedIcon 
                                style={{
                                    display: price ? 'none' : 'flex'}} 
                                className="add" 
                                onClick={() => setPrice(true)}
                            />
                        </span>
                    </div>

                    <div className="body" style={{display: price ? 'flex' : 'none'}}>
                        <div className="up">
                            <div className="low">700</div>
                            <RemoveOutlinedIcon />
                            <div className="high">5000</div>
                        </div>
                        <div className="down">
                            <input type="range" name="" id="" />
                        </div>
                    </div>
                </div> 
            </div> 

            <div className="right">
              <Products 
              allProducts={allProducts}
              limitProducts={limitProducts}
               /> 
            </div>

        </div> 

        <div className="extra">
            <div className="show-limit">
                    <small>Showing <span>{ limitProducts?.length }</span> out of <span>{ allProducts?.length }</span> items</small>
                </div>

            { (allProducts && limitProducts) && limitProducts.length < allProducts.length && <div 
                className="load-more" 
                onClick={() => setLimitNum(prevNum => prevNum + 4)}
                >Load more
            </div> }
        </div>
    
    </div> }
    </>
  )
}

export default Store