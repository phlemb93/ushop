import { Link } from 'react-router-dom';


function Login() {
    return (
      <div className="forget-password">
        <p>reset your password</p>
        <span>We'll pop over an email to reset your password</span>
        <div className="form">
          <div className="input">
            <input type="email" name="email" id="email" placeholder="Email"/>
          </div>
          
          <div className="buttons">
            <button className='btn-one'>Submit</button>

            <Link to='/login'>
                <button>Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login