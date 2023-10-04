import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../utilities/contexts/userContext';

function Login() {

  const [email, setEmail] = useState<any>('')
  const [password, setPassword] = useState<any>('')
  const [error, setError] = useState<string | null>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { dispatch, userLogout } = useUserContext();
  const navigate = useNavigate();

  //ACTION WHEN FORM IS SUBMITTED
  const handleClick = async() => {

    setIsLoading(true)
    const user = { email, password };

    const response = await fetch('https://ucart-api.onrender.com/api/auth/login', {
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(user),
      method: 'POST'
    })

    const data = await response.json();


    if(response.status === 200) {

      dispatch({
        type: 'login',
        payload: data
      })

      localStorage.setItem('user', JSON.stringify(data))
      setError('')
      setIsLoading(false);
      navigate('/');

    } else {

      setError(data.error)
      setIsLoading(false)

    }
    setEmail('')
    setPassword('')
  }

  return (
    <div className="login">
      <p>login</p>
      <div className="form">
        <div 
          className="error" 
          style={{display: error ? 'block' : 'none'}}
          >{error}</div>
        <div className="inputs">
          <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          />

          <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password" />
        </div>
        
        <div className="buttons">
          <button className="btn-one" onClick={handleClick}>Sign in</button>

          <Link to="/create-account">
            <button disabled={isLoading}>Create Account</button>
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