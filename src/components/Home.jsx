import EcommImg from '../img/ecomm-img.png'
import { FaLongArrowAltRight } from 'react-icons/fa'



export const Home = () => {

    return (
        <div className='home'>
         <div className='first-section'>
             <div className="content">
                 <h2>"you can have anything you want in life if you   dress for it"</h2>
                    <p>- edith head</p>
                 <button>start shopping<FaLongArrowAltRight className='arrow' /></ button>
                </div>

             <div className="image">
                    <img className="img" src={EcommImg} alt="" />
                </div>
            </div>
        </div>
    )
}
