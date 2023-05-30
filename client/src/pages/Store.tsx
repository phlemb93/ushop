import { useState } from 'react'
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import Products from '../components/ProductsList'

//import icon components from material UI
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


function Store() {
    
    const { handleFilterOpen } = useIsOpenContext();

    const [color, setColor] = useState(true);
    const [collection, setCollection] = useState(true);
    const [price, setPrice] = useState(true);

  return (
    <div className="store">
        <div className="top">
            <small>Showing <span>530</span> results</small>
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
                            <input type="checkbox" name="armchair" id="" />
                            <label>Armchair</label>
                        </div>
                        <div>
                            <input type="checkbox" name="sofa" id="" />
                            <label>Sofa</label>
                        </div>
                        <div>
                            <input type="checkbox" name="bundle" id="" />
                            <label>Bundle</label>
                        </div>
                        <div>
                            <input type="checkbox" name="accessories" id="" />
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
                <Products />
            </div>
        </div>
    
    </div>
  )
}

export default Store