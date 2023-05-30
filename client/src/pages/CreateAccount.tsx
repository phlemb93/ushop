import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../utilities/contexts/userContext';

function CreateAccount() {

  const [firstName, setFirstName] = useState<any>(null)
  const [lastName, setLastName] = useState<any>(null)
  const [email, setEmail] = useState<any>(null)
  const [password, setPassword] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const { dispatch } = useUserContext();

  const handleClick = async () => {
    const user = {
      firstName, lastName, email, password
    }

  //Sending form data to the backend and getting back a response
  const response = await fetch('http://localhost:5000/api/auth/register', {
    headers: { "Content-Type": "application/json"},
    method: 'POST',
    body: JSON.stringify(user)
  })

  //Convert the json response to an object
  const data = await response.json();

  //Handling the data received and the error
  if(response.status === 200) {

      //Updating the UserContext with the 'user' data
      dispatch({
        type: 'login',
        payload: data
      })

      //Saving the user data to the local storage
      localStorage.setItem('user', JSON.stringify(data))
      
      //Setting the error display back to null
      setError(null)

  } else {

      //Setting the error data
      setError(data.error)
  }

  //Resetting all input fields back to empty after form submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

    return (
      <div className="create-account">

        <p>create account</p>

        <div className="form">
          <div 
          className="error" 
          style={{display: error ? 'block' : 'none'}}
          >{error}</div>

          <div className="inputs">
            <input 
            type='text'
             onChange={(e) => setFirstName(e.target.value)}
             value={firstName}
             placeholder="First name"/>

            <input 
            type='text'
            placeholder="Last name" 
             onChange={(e) => setLastName(e.target.value)}
             value={lastName}
             />

            <input  
            type='email'
             placeholder="Email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
            />

            <input 
            type='password'
            placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
            />
          </div>
          
          <div className="buttons">
            <button className="btn-one" onClick={handleClick}>Create</button>
            <Link to='/'>
                <button>RETURN TO STORE</button>
            </Link>
          </div>
        </div>

      </div>
    )
  }
  
  export default CreateAccount