import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <p>login</p>
      <div className="form">
        <div className="inputs">
          <input type="email" name="email" id="email" placeholder="Email"/>
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        
        <div className="buttons">
          <button className="btn-one">Sign in</button>

          <Link to="/create-account">
            <button>Create Account</button>
          </Link>
          <Link to="/forget-password">
            <button>Forgot Your Password?</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login