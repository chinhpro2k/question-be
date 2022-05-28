const express = require("express");
const Spend = require("../modal/Spend");
const User = require("../modal/User");
const router = express.Router();

//get list question
router.get("/", async (req, res) => {
  const spend = await Spend.find({});
  console.log(spend);
  return res.status(200).json({ spend });
});
//create question
router.post("/add", async (req, res) => {
  const newSpend = {
    title: req.body.title,
    price: req.body.price,
    userId: req.body.userId,
    type: req.body.type,
  };
  console.log(newSpend);
  try {
    const user = await User.findById(newSpend.userId);
    console.log(user);
    if (user) {
      await Spend.create(newSpend);
      return res.status(200).json({
        message: "Thêm thành công.",
      });
    } else {
      return res.status(404).json({
        message: "User không tồn tại",
      });
    }
  } catch (e) {
    console.log(e);
    res.send("error");
  }
});
router.get("/report", async (req, res) => {
    const userId=req.body.userId;
    console.log("userID",userId);
    const spends=await Spend.find({userId:userId});


    console.log(spends);
    return res.status(200).json({ spends });
  });
module.exports = router;
