import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../utilities/contexts/productsContext';

function Footer() {

const { setNewCat } = useProductsContext();

  return (
    <div className="footer">
        <div className="form">
            <p>Sign up & get 5% off your next order along with exclusive content and offers before anyone else!</p>
            <div className="input">
                <input type="text" />
                <div className="button">
                    <span>Subscribe</span>
                    <ArrowForwardIosIcon style={{fontSize: '22px'}} />
                </div>
            </div>
        </div>
        <div className="shop">
            <p>shop</p>
        
            <Link to='/store'>
                <div onClick={() => setNewCat('') }>All</div>
            </Link>
            <Link to='/store'>
                <div onClick={() => setNewCat('sofa') }>Sofas</div>
            </Link>
            <Link to='/store'>
                <div onClick={() => setNewCat('armchair') }>Armchairs</div>
            </Link>
            <Link to='/store'>
                <div onClick={() => setNewCat('bundles') }>Bundles</div>
            </Link>
            <Link to='/store'>
                <div onClick={() => setNewCat('accessories') }>Accessories</div>
            </Link>
            
        </div>
        <div className="connect">
            <p>connect with me</p>

            <div className="icons">
                <Link to="https://github.com/phlemb93" target='_blank'>
                    <div className="github icon">
                        <GitHubIcon className="github-icon" style={{fontSize: '24px'}} />
                        <p>Github</p>
                    </div>
                </Link>

                <Link to="https://www.linkedin.com/in/oluwafemi-badrudeen/" target='_blank'>
                    <div className="linkedin icon">
                        <LinkedInIcon className="linkedin-icon" style={{fontSize: '24px'}} />
                        <p>LinkedIn</p>
                    </div>
                </Link>

                <Link to="https://twitter.com/Phlemb2" target='_blank'>
                    <div className="twitter icon">
                        <TwitterIcon className="twitter-icon" style={{fontSize: '24px'}} />
                        <p>Twitter</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer