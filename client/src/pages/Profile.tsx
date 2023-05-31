import React from 'react'

function Profile() {
  return (
    <div className='my-profile'>
        <div className="head">
            <h2>Profile Settings</h2>
            <p>Edit profile</p>
        </div>

        <div className="container">
            <div className='form'>
                <label>First Name</label>
                <input type="text" disabled={true}/>

                <label>Last Name</label>
                <input type="text" disabled={true}/>

                <label>Email Address</label>
                <input type="text" disabled={true}/>

                <label>Password</label>
                <input type="text" disabled={true}/>
            </div>

            <div className="delete">
                <div>Delete Your Account</div>
                <p>Please note that your profile will be deleted permanently</p>
            </div>

            <div className="buttons">
                <div className="cancel">Cancel</div>
                <div className="save">Save</div>
            </div>
        </div>
    </div>
  )
}

export default Profile