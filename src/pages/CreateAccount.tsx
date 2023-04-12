import { Link } from 'react-router-dom';

function CreateAccount() {
    return (
      <div className="create-account">

        <p>create account</p>

        <div className="form">
          <div className="inputs">

            <input type="first-name" name="first-name" id="first-name" placeholder="First name"/>

            <input type="Last name" name="Last name" id="Last name" placeholder="Last name" />

            <input type="email" name="email" id="email" placeholder="Email"/>

            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          
          <div className="buttons">
            <button className="btn-one">Create</button>
            <Link to='/'>
                <button>RETURN TO STORE</button>
            </Link>
          </div>
        </div>

      </div>
    )
  }
  
  export default CreateAccount