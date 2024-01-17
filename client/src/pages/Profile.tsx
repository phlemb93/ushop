import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import axios from 'axios';

function Profile() {

    const [lockProfile, setLockProfile] = useState(true);
    const [lockPassword, setLockPassword] = useState(true);  

    const [firstName, setFirstName] = useState<any>('');
    const [lastName, setLastName] = useState<any>('');
    const [email, setEmail] = useState<any>('');

    const [oldPassword, setOldPassword] = useState<any>('');
    const [newPassword, setNewPassword] = useState<any>('');

    const [mssg, setMssg] = useState<any>('');
    const [errorMssg, setErrorMssg] = useState<any>('');
    const [isErrorMssg, setIsErrorMssg] = useState<any>(false);
    const [showMssg, setShowMssg] = useState<any>(false);
    


   const navigate = useNavigate();
   const user = JSON.parse(`${localStorage.getItem('user')}`);
    const { id, token } = user;


    //FETCH USER DETAILS WHEN THE BROWSER LOADS
    useEffect(() => {

        const loadData = async () => {

            try {
                const data = await axios.get(`http://localhost:5000/api/users/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${token}`
                    }
                });

                if(data.status === 200){
                    const { firstName, lastName, email } = data.data;

                    setFirstName(firstName)
                    setLastName(lastName)
                    setEmail(email)
                } 
            } catch (error) {
                console.log(error)
            }
        }

      loadData();

    }, [user])

    //EDIT PROFILE BUTTON HANDLING
    const handleEditProfile = () => {
        setLockProfile(false);
    }

    //RESET PASSWORD BUTTON HANDLING
    const handleResetPassword = () => {
        setLockPassword(false);
    }

    //SAVE BUTTON HANDLING
    const handleSaveProfile = async () => {

        //LOCK PROFILE DETAILS AND PASSWORD FIELDS
        setLockProfile(true);
        setLockPassword(true);

        const user = {firstName, lastName};
        const pass = {oldPassword, newPassword};

        //RUN THIS WHEN THE PROFILE DETAILS SECTION IS UNLOCKED
       if(!lockProfile) {

            const res = await fetch(`http://localhost:5000/api/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(user),
                method: 'PUT'
            })
    
            const data = await res.json();

            setMssg(data.mssg)    

            if(data) {
                setShowMssg(true)
            }
        } 
        
        
        //RUN THIS WHEN THE PASSWORD SECTION IS UNLOCKED
        if(!lockPassword) {

            //PASSWORD SECTION REMAINS UNLOCK IF ONE OF THE FIELDS IS EMPTY
            if(!oldPassword || !newPassword) {
                setLockPassword(false);
            }

            const res = await fetch(`http://localhost:5000/api/users/${id}`, {
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(pass),
                method: 'PUT'
            })
            const data = await res.json();

            //ERROR HANDLING
            if(res.status !== 200) {
                setLockPassword(false);
                setIsErrorMssg(true)
                setErrorMssg(data.error)
                setMssg('')
            }

            if(res.status === 200) {
                setMssg(data.mssg)
                setIsErrorMssg(false)
                setErrorMssg('')
            }


            if(data) {
                setShowMssg(true)

                setTimeout(() => {
                    setShowMssg(false)
                }, 2000)
            }
        }

    }

    //BACK BUTTON HANDLING
    const handleBackButton = () => {
        navigate('/');
    }

    //CANCEL BUTTON HANDLING
    const handleCancelClick = () => {
        setLockPassword(true);
        setLockProfile(true);
        setShowMssg(false)
    }


  return (
    <div className='my-profile'>
        <div className="back">
            <div  onClick={handleBackButton}>
                <KeyboardBackspaceOutlinedIcon />
                <p>Back</p>
            </div>
        </div>

        <div className="container">
            <div className='form'>
            <button onClick={handleEditProfile} disabled={!lockPassword}>Edit profile</button>

                <label>First Name</label>
                <input 
                type="text" 
                disabled={lockProfile}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                />

                <label>Last Name</label>
                <input 
                type="text" 
                disabled={lockProfile}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                />
                <label>Email Address</label>
                <input 
                type="text" 
                disabled={true}
                placeholder={email}
                />

                <div className="divider"></div> 

                <div className="password">
                    <button onClick={handleResetPassword} disabled={!lockProfile}>Reset password</button>

                    <label>Old Password</label>
                    <input 
                    type="password" 
                    disabled={lockPassword}
                    placeholder='xxxxxxxxxx'
                    onChange={(e) => setOldPassword(e.target.value)}
                    value={oldPassword}
                    />

                    <label>New Password</label>
                    <input 
                    type="password" 
                    disabled={lockPassword}
                    placeholder='xxxxxxxxxx'
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    />

                </div>

                <p 
                style={
                    {
                        color: isErrorMssg ? 'red' : 'green',
                        border: isErrorMssg ? '1px dotted red' : '1px dashed green',
                        display: showMssg ? 'block' : 'none'
                    }}
                className="mssg"
                >{ mssg || errorMssg } </p>

            </div>

            <div className="delete">
                <div>Delete Your Account</div>
                <p>Please note that your profile will be deleted permanently</p>
            </div>

            <div className="buttons">
                <button className="cancel" onClick={handleCancelClick}>Cancel</button>
                <button className="save" onClick={handleSaveProfile} disabled={lockPassword && lockProfile}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default Profile