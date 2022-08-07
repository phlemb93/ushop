import EcommImg from '../img/ecomm-img.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { allSelected } from '../features/genderSlice'



export const Home = () => {

    const dispatch = useDispatch()

    return (
        <div className='home'>
         <div className='first-section'>
             <div className="content">
                 <h2>"you can have anything you want in life if you   dress for it"</h2>
                    <p>- edith head</p>
                <Link to="/products">
                    <button onClick={() => dispatch(allSelected())}>start shopping<FaLongArrowAltRight className='arrow' /></ button>
                 </Link>
                </div>

             <div className="image">
                    <img className="img" src={EcommImg} alt="" />
                </div>
            </div>
        </div>
    )
}
