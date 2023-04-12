
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import vid from '../assets/videos/chair.mp4'


function Main() {

  return (
    <div className="main-section">

        <div className="first">
            <div className="upper">
                <div className="promo">
                    <h4>EASTER SALE</h4>
                    <h2>10% off everything</h2>
                    <p>Plus get an</p>
                    <h3>EXTRA 10% at checkout</h3>
                    <div className="code">
                        <small>SHOP WITH</small>
                        <p>"EXTRA10"</p>
                    </div>
                </div> 
            </div>

            <div className="lower">
                <div>
                    <LocalShippingOutlinedIcon style={{ backgroundColor:'#00968E', color: '#fff', width: '70px', height: '70px', borderRadius: '50%', padding: '10px'}} />
                  <p>free delivery</p>
                  <small>Fast delivery on a day that suits you</small>
                </div>
                <div>
                    <MeetingRoomOutlinedIcon style={{ backgroundColor:'#00968E', color: '#fff', width: '70px', height: '70px', borderRadius: '50%', padding: '10px'}} />
                    <p>no tight squeezes</p>
                    <small>Fits through any doorway and up any staircase</small>
                </div>
                <div>
                    <VerifiedOutlinedIcon style={{ backgroundColor:'#00968E', color: '#fff', width: '70px', height: '70px', borderRadius: '50%', padding: '10px'}}  />
                    <p>easy to build</p>
                    <small>No tools, just pop it together in minutes</small>
                </div>
                <div>
                    <ChairOutlinedIcon style={{ backgroundColor:'#00968E', color: '#fff', width: '70px', height: '70px', borderRadius: '50%', padding: '10px'}} />
                    <p>add & extend</p>
                    <small>Level-up your seating game whenever you like</small>
                </div>
            </div>
            
        </div>

        <div className="second">
            <div className="text">
                <p>sofas designed for every space</p>
                <ul>
                    <li>Pops together in minutes</li>
                    <li>Fast & FREE delivery</li>
                    <li>Fits through awkward doors and stairs</li>
                </ul>
                <div className="button">
                        <div className="text">
                            <span>Low monthly payments</span>
                            <small>Financing available with 0% interest</small>
                        </div>
                     
                        <EastOutlinedIcon />
                </div>
            </div>
            
                <video src={vid} style={{objectFit: 'cover'}} autoPlay loop muted  />
        </div>

        <div className="third">
            <p>shop your favorites</p>
            <div className="images">
                <div><button>Sofas</button></div>
                <div><button>Corner sofas</button></div>
                <div><button>Footstools</button></div>
                <div><button>Snugglers</button></div>
                <div><button>Sofa beds</button></div>
                <div><button>Accessories</button></div>
                <div><button>Chaise sofas</button></div>
                <div><button>3 seater sofas</button></div>
            </div>
        </div>
        
    </div>
  )
}

export default Main