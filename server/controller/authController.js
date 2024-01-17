const User = require('../models/User')
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');


//Registration
const register_post = async(req, res) => {

    const { firstName, lastName,  email, password } = req.body;
    const userExist = await User.findOne({email})

    if(!email || !password || !firstName || !lastName) {
        res.status(500).json({error: 'All fields must be filled'})
        return;
    }

    if(!validator.isEmail(email)) {
        res.status(500).json({error: 'Please, enter a valid email'})
        return;
    }

    if(userExist) {
        res.status(500).json({error: 'Email already in use'})
        return;
    }

    if(!validator.isStrongPassword(password)) {
        res.status(500).json({error: 'Please, enter a strong password'})
        return;
    }
    
    //Password Encryption
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //Save new user to the database
    const newUser = await User.create({
        ...req.body,
        password: hash
    })

    //Token generation
    const id = newUser._id;
    const isAdmin = newUser.isAdmin;

    const token = jwt.sign({ id, isAdmin }, process.env.SECRET_KEY, {expiresIn: '3d'})

    try {
        res.status(200).json({ firstName, id, token })
    } catch (error) {
        res.status(500).json(error)
    }

}

//Login
const login_post = async(req, res) => {
   
    const { email, password } = req.body;
    const userExist = await User.findOne({email});

    if(!email || !password) {
        res.status(400).json({error: 'All fields must be filled'})
        return;
    }

    if(!validator.isEmail(email)) {
        res.status(400).json({error: 'Please, enter a valid email'})
        return;
    }

    if(!userExist) {
        res.status(400).json({error: 'Incorrect email'})
        return;
    }
    
    //Compare password
    const hashedPassword = userExist.password;
    const match = await bcrypt.compare(password, hashedPassword);

    if(!match) {
        res.status(400).json({error: 'Incorrect password'})
        return;
    }

    //Token generation
    const id = userExist._id;
    const isAdmin = userExist.isAdmin;

    const token = jwt.sign({ id, isAdmin }, process.env.SECRET_KEY, { expiresIn: '3d' })

    try {
        
        const firstName = userExist.firstName;

        res.status(200).json({ firstName, id, token })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}


module.exports = { login_post, register_post };