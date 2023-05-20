import { useState } from 'react'
import Products from '../components/ProductsList'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useIsOpenContext } from '../utilities/contexts/useIsOpenContext';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

function Filter() {

    const { isFilterOpen, handleFilterClose } = useIsOpenContext();

  return (
    <div className="filter-menu" style={{display: isFilterOpen ? 'flex' : 'none'}}>
        <div className="top">
            <div className="close-btn" onClick={ handleFilterClose }>
                <CloseIcon />
            </div>
            <p>Filters</p>
        </div>

        <div className="sort-by">
            <p>Sort by</p>
            <div>
                <input type="radio" name="title-desc" id="title-desc" />
                <label htmlFor="title-desc">Title: A-Z</label>
            </div>
            <div>
                <input type="radio" name="title-asc" id="title-asc" />
                <label htmlFor="title-asc">Title: Z-A</label>
            </div>
            <div>
                <input type="radio" name="price-low" id="price-low" />
                <label htmlFor="price-low">Price: Low-High</label>
            </div>
            <div>
                <input type="radio" name="price-high" id="price-high" />
                <label htmlFor="price-high">Price: High-Low</label>
            </div>
        </div>

        <div className="color"> 
            <p>Colour</p>
                
            <div className="body">
                <div className="red">
                    <div></div>
                    <p>Red</p>
                </div>
                <div className="blue">
                    <div></div>
                    <p>Blue</p>
                </div>
                <div className="green">
                    <div></div>
                    <p>Green</p>
                </div>
                <div className="gray">
                    <div></div>
                    <p>Gray</p>
                </div>
            </div>
        </div>

        <div className="collection">
                    
            <p>Collections</p>
            <div className="body">
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
            <p>Price</p>
            <div className="body">
                <input type="number" name="" id="" />
                <div></div>
                <input type="number" name="" id="" />
            </div>
            <input type="range" name="" id="" />
            <input type="range" name="" id="" />
        </div>

        <div className="bottom">
            <p>Show 55 products</p>
            <div className="buttons">
                <div className="reset-filters">
                    <p>RESET FILTERS</p>
                    <CloseIcon className="icon" />
                </div>
                <div className="apply-filters">
                    <p>DONE</p>
                    <DoneOutlinedIcon className="icon done" />
                </div>
              
            </div>
        </div>

    </div>
  )
}

export default Filter