const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Token = require("../models/tokenModel");
const crypto = require ("crypto");
const sendEmail = require("../utils/sendEmail");


//Generate token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})
};

//register a User
const registerUser = asyncHandler ( async (req, res) => {
    const {name, email, password} = req.body

    //validation
    if(!name || !email || !password ) {
        res.status(400)
        throw new Error ("Kindly fill in all require fields");
    }

    // password verfication 
    if(password.lenght < 6) {
        res.status(400)
        throw new Error ("Password must be more than 6 character")
    }

    // Check if user already exist
    const userExists = await User.findOne({email})
    if(userExists ) {
        res.status(400)
        throw new Error ("Email has already been registered");
    }


    //Create new user
    const user = await User.create ({
        name,
        email,
        password,
    })

    // Generate Token for user
    const token = generateToken(user._id);

    //send HTTP-only Cookie
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400 ), // 1 day
        sameSite: "none",
        secure: true
    });

    if (user) {
        const{_id, name, email, photo, phone, bio} = user
        res.status(201).json({
            _id,
            name, 
            email, 
            photo, 
            phone, 
            bio,
            token,
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
});




//Login User
const loginUser = asyncHandler ( async (req, res) => {
    const {email, password} = req.body
    //Validate Request
    if (!email || !password) {
        res.status(400);
        throw new Error("Please add email and password");
    }

    // Check if user exists
    const user = await User.findOne({email})
    if (!user) {
        res.status(400);
        throw new Error("User not found pls sign up");
    }

    //User exist, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

       // Generate Token for user
       const token = generateToken(user._id);

       //send HTTP-only Cookie
       res.cookie("token", token, {
           path: "/",
           httpOnly: true,
           expires: new Date(Date.now() + 1000 * 86400 ), // 1 day
           sameSite: "none",
           secure: true
       });


    if (user && passwordIsCorrect ) {
        const{_id, name, email, photo, phone, bio } = user
        res.status(200).json({
            _id,
            name, 
            email, 
            photo, 
            phone, 
            bio,
            token,
        })
    } else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
});


//Logout a User
const logout = asyncHandler ( async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0), // 0 sec
        sameSite: "none",
        secure: true
    });
    return res.status(200).json({ message: "Successfully logged out"})
});

//Get a User data
const getUser = asyncHandler ( async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        const{_id, name, email, photo, phone, bio} = user
        res.status(200).json({
            _id,
            name, 
            email, 
            photo, 
            phone, 
            bio,
        })
    } else {
        res.status(400)
        throw new Error("User not found")
    }
})


//Get login status
const loginStatus = asyncHandler ( async (req, res) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json(false)
    }

    //verify token
    const verified =jwt.verify(token, process.env.JWT_SECRET)
    if (verified) {
        return res.json(true);
    }
    return res.json(false);
})


// updating User
const updateUser = asyncHandler ( async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        const{_id, name, email, photo, phone, bio } = user
        user.email = email;
        user.name = req.body.name || name;
        user.photo = req.body.photo || photo;
        user.bio = req.body.bio || bio;
        user.phone = req.body.phone || phone;

        const updatedUser = await user.save()
        res.status(200).json({
            name: updatedUser.name, 
            email: updatedUser.email, 
            photo: updatedUser.photo, 
            phone: updatedUser.phone, 
            bio: updatedUser.bio,
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

//change Password of user
const changePassword = asyncHandler ( async (req, res) => {
    const user = await User.findById(req.user._id);

    const {oldPassword, password} = req.body

    if (!user) {
        res.status(404)
        throw new Error("User not found, please sign in")
    }
    //Validate
    if (!oldPassword || !password) {
        res.status(404)
        throw new Error("Please enter old password and new password")
    }
    // Check if old password matches password in DB is correct
    const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);
    // save new password
    if(user && passwordIsCorrect) {
        user.password = password
        await user.save()
        res.status(200).send("Password changed succesfully")
    } else {
        res.status(404)
        throw new Error("Old password is incorrect.")
    }
});


// forgotPassword
const forgotPassword = asyncHandler ( async (req, res) => {
    const { email } =req.body
    const user = await User.findOne({email})

    if (!user) {
        res.status(404)
        throw new Error ("User does not exist")
    }

    // Delete token if exist in DB
    let token = await Token.findOne({userId:user._id})
    if (token) {
        await token.deleteOne()
    }

    // create reset token
    let resetToken = crypto.randomBytes(32).toString("hex") + user._id
    console.log(resetToken);

    
    // Hash Token before saving to DB
    const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")

    // Save Token to DB
    await new Token ({
        userId: user._id,
        token: hashedToken,
        createdAt: Date.now(),
        expiresAt: Date.now() + 30 * (60 * 1000) // 30 minute
    }).save()

    // construct reset Url
    const resetUrl = `${process.env.FRONTEND_URL}/restpassword/${resetToken}`

    // Reset Email
    const message = `<h2>Hello ${user.name}</h2>
        <p>Please use the url below to reset your password</p>
        <p>This reset is valid only for 30 minutes.</p>


        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>

        <p>Regards...</p>
        <p>Inventory Team</p>
    `;

    const subject = "Password Reset Request";
    const send_to = user.email;
    const sent_from = process.env.EMAIL_USER;

    try {
        await sendEmail(subject, message, send_to, sent_from)
        res.status(200).json({success: true, message:"Reset email sent"})
    } catch (error) {
        res.status(500)
        throw new Error("Email not sent, please try again")
    };

});



// Reset Password
const resetPassword = asyncHandler ( async (req, res) => {
    
    const {password} = req.body
    const {resetToken} = req.params

        // Hash Token, then compare to Token in DB
        const hashedToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex")

        //Find token in DB
        const userToken = await Token.findOne({
            token: hashedToken,
            expiresAt: {$gt: Date.now()}
        });

        if(!userToken) {
            res.send(404);
            throw new Error ("Invalid or Expired Token")
        }

        //find the user
        const user = await User.findOne({_id: userToken.userId})
        user.password = password
        await user.save()
        res.status(200).json({
            message: "Password reset successful, Please login"
        });

})

module.exports = {
    registerUser,
    loginUser,
    logout,
    getUser,
    loginStatus,
    updateUser,
    changePassword,
    forgotPassword,
    resetPassword,
};