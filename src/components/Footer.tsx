import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Footer() {
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
            <div>Sofas</div>
            <div>Armchairs</div>
            <div>Bundles</div>
            <div>Accessories</div>
        </div>
        <div className="connect">
            <p>connect with me</p>

            <div className="icons">

                <div className="github">
                    <GitHubIcon style={{fontSize: '28px'}} />
                    <p>Github</p>
                </div>
                <div className="linkedin">
                    <LinkedInIcon style={{fontSize: '28px'}} />
                    <p>LinkedIn</p>
                </div>
                <div className="twitter">
                    <TwitterIcon style={{fontSize: '28px'}} />
                    <p>Twitter</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer