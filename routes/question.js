const express = require('express');
const Question = require('../modal/Question');
const router = express.Router();

//get list question
router.get("/",async(req,res)=>{
    const question=await Question.find({});
    return res.status(200).json({ question })
})
//create question
router.post('/add',async(req,res)=>{
    const newQuestion={
        title:req.body.title,
        correctAnswer:req.body.correctAnswer,
        answer:req.body.answer,
    }
console.log(newQuestion)
try {
    await Question.create(newQuestion);
    res.status(201).json({
        message: "Them cau hoi thanh cong."
    });

} catch (e) {
    console.log(e)
    res.send("error")
}
})
module.exports =router;