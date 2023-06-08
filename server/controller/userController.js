const User = require('../model/User')
const bcrypt = require('bcrypt');



//GET ALL USERS
const get_all_users = async (req, res) => {

    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

//GET SINGLE USER
const get_one_user = async (req, res) => {

    const userId = req.params.id;
    const tokenId = req.tokenData.id;
    const isAdmin = req.tokenData.isAdmin;

    if(userId === tokenId || isAdmin) {
        try {
            const user = await User.findById(userId);
            res.status(200).json(user);
        } catch (error) {  
            res.status(500).json(error)
        }
    } else {
        res.status(400).json("You're not authorized");
    }
}

//UPDATE USER
const update_one_user = async (req, res) => {

    const tokenId = req.tokenData.id;
    const isAdmin = req.tokenData.isAdmin;
    const userId = req.params.id;
    const { firstName, lastName, oldPassword, newPassword } = req.body;

    if(tokenId === userId || isAdmin) { 

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

            res.status(200).json("Password updated successfully")
          
        } else {
        
            const updating = {
                firstName,
                lastName,
            }

            await User.findByIdAndUpdate(userId, {...updating}, { new: true} );

            res.status(200).json("User details updated successfully")

         }
    } else {
        res.status(400).json("You're not authorized")
    }
   

}

//DELETE USER
const delete_one_user = async (req, res) => {

    const userId = req.params.id;
    const tokenId = req.tokenData.id;
    const isAdmin = req.tokenData.isAdmin;

    if(userId === tokenId || isAdmin) {
        try {

            const user = await User.findByIdAndDelete(userId);

            if(user) {
                res.status(200).json("User successfully deleted");
            } else {
                res.status(400).json("User doesn't exist")
            }
        
        } catch (error) {
            res.status(500).json("Server Error")
        }
    } else {
        res.status(400).json("You're not authorized");
    }
}

//GET USERS STATS
const get_users_stats = async (req, res) => {

    try {
        const data = await User.aggregate([
            {
                $group: {
                    _id: {
                        day: { $dayOfMonth: "$createdAt" },
                        month: { $month: "$createdAt" },
                        year: { $year: "$createdAt" }
                    },
                    users: { $sum: 1 }
                }
            }
        ])

        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { get_all_users, get_one_user, update_one_user, delete_one_user, get_users_stats }