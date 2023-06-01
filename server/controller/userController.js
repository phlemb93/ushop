const User = require('../model/User')
const bcrypt = require('bcrypt');

//Get all users
const get_all_users = async (req, res) => {

    try {
        const users = await User.find();

        res.status(200).json(users)
        
    } catch (error) {
        res.status(500).json({error: "Server Error"})
    }

}

//Get single user
const get_one_user = async (req, res) => {

    const userId = req.params.id;

    try {

        const user = await User.findById(userId);

        res.status(200).json(user);

    } catch (error) {
        
        res.status(500).json({error: "Server Error"})
    }

}

//Update single user's details
const update_one_user = async (req, res) => {

    const userId = req.params.id;
    const { firstName, lastName, oldPassword, newPassword } = req.body;

        if(oldPassword || newPassword) {

            if(!oldPassword || !newPassword) {
                res.status(400).json({error: "All fields must be filled"})
                return
            }

            const user = await User.findById(userId);
            const hashedPassword = user.password;

            const match = await bcrypt.compare(oldPassword, hashedPassword);

            if(!match) {
                res.status(400).json({error: "Old password is incorrect"})
                return
               }

            const salt = await bcrypt.genSalt(10);
            const newHash = await bcrypt.hash(newPassword, salt);
    
            await User.findByIdAndUpdate(userId, {password: newHash})

            res.status(200).json({mssg: "Password updated successfully"})
          

        } else {
        
            const updating = {
                firstName,
                lastName,
            }

            await User.findByIdAndUpdate(userId, {...updating}, { new: true} );

            res.status(200).json({mssg: "User details updated successfully"})

        }
   

}

//Delete single user
const delete_one_user = async (req, res) => {

    const userId = req.params.id;

    try {

        const user = await User.findByIdAndDelete(userId);

        if(user) {
            res.status(200).json({mssg: "User successfully deleted"});
        } else {
            res.status(400).json({error: "User doesn't exist"})
        }
    
    } catch (error) {
        res.status(500).json({error: "Server Error"})
    }

  
}

module.exports = { get_all_users, get_one_user, update_one_user, delete_one_user }