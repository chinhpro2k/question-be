const express = require('express');
const User = require('../modal/User');
const router = express.Router();


// register
router.post('/register', async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        type:'user'
    }
    console.log(user);
    try {
        await User.create(user);
        res.status(201).json({
            message: "Dang ky thanh cong.",
            email: user.email
        });

    } catch (e) {
        console.log(e)
        res.send("error")
    }
});
// login

router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ email: email });
        if (!user) {
            // res.send("khong tim thay email !");
            return res.status(404).json({
                message: "sai tài khoản.",
            })
        } else {
            if (password == user.password) {
                res.send({
                    user
                });
            }else {
                // res.send("Sai mat khau");
                return res.status(404).json({
                    message: "Sai mật khẩu.",
                })
            }
        }
    } catch (error) {

    }
});

//change password
router.put('/change/:userID',async(req,res)=>{
    try {
        const{userID}=req.params;
        const newUser=req.body
        const result=await User.findByIdAndUpdate(userID,newUser);
        return res.status(201).json({
            success: true
        })
    } catch (error) {
        
    }
})

//forgot password
router.post('/forgot',async(req,res)=>{
    const email=req.body.email;
    const user = await User.findOne({ email: email });
    if(!user){
        return res.status(404).json({
            message: "không tìm thấy email.",
        })
    }else{
        return res.status(200).json({
            message: "Tìm thấy email.",
            idUser:user._id
        })
    }
})

module.exports = router;