
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
          <button>Sign in</button>
          <button>Create Account</button>
          <button>Forgot Your Password?</button>
        </div>
      </div>
    </div>
  )
}

export default Login